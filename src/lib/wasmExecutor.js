// Timeout guard
const runCode = async (instance, code) => {
  const timeout = 5000;
  const timeoutId = setTimeout(() => {
    if (instance.exports) {
      instance.exports._emergency_halt();
    }
    throw new Error(`Execution timed out after ${timeout}ms`);
  }, timeout);

  try {
    return await instance.exports.run(code);
  } finally {
    clearTimeout(timeoutId);
  }
};

// Memory guard (add to imports)
const imports = {
  env: {
    memory_guard: (ptr, size) => {
      const memory = instance.exports.memory;
      if (ptr + size > memory.buffer.byteLength) {
        throw new Error(`Memory access violation at ${ptr}`);
      }
    }
  }
};

// Initialize WASM with proper seeding
const initWasm = async () => {
  const imports = {
    env: {
      // Seed RNG from JS side
      seed_rng: () => Date.now() % 1000000,
      // Memory bounds check
      memory: new WebAssembly.Memory({ initial: 256 })
    }
  };

  const { instance } = await WebAssembly.instantiate(wasmModule, imports);
  
  // Seed RNG during initialization
  instance.exports.seed(imports.env.seed_rng());
  return instance;
};

// Validate shared memory
const validateMemory = (instance) => {
  const memory = instance.exports.memory;
  if (!memory || memory.buffer.byteLength === 0) {
    throw new Error('Memory sharing failed');
  }
  return memory;
};

const executeWithGuards = (instance, timeout = 5000) => {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      reject(new Error('Execution timed out'));
      instance.exports.force_halt(); // Implement in WASM
    }, timeout);

    try {
      // Execute WASM
      const result = instance.exports.run_code();
      
      // Memory guard
      const memUsed = instance.exports.get_memory_usage();
      if (memUsed > 1024 * 1024) { // 1MB limit
        throw new Error('Memory overflow');
      }
      
      clearTimeout(timer);
      resolve(result);
    } catch (err) {
      clearTimeout(timer);
      reject(err);
    }
  });
};

// Implement force_halt
extern "C" {
    void force_halt() {
        // Trigger immediate termination
        throw "ExecutionHalted";
    }
    
    // Memory usage tracker
    size_t get_memory_usage() {
        return __builtin_wasm_memory_size(0) * WASM_PAGE_SIZE;
    }
}

// Enhanced memory protection
const MEMORY_LIMIT = 1024 * 1024 * 10; // 10MB
const MEMORY_GROWTH_LIMIT = 5; // Max 5 memory growth operations

const executeWithGuards = (instance, code, timeout = 5000) => {
  return new Promise((resolve, reject) => {
    const memory = instance.exports.memory;
    let growthCount = 0;
    
    // Memory growth observer
    const originalGrow = memory.grow;
    memory.grow = (pages) => {
      growthCount++;
      if (growthCount > MEMORY_GROWTH_LIMIT) {
        reject(new Error('Memory growth limit exceeded'));
        return -1;
      }
      return originalGrow.call(memory, pages);
    };

    const timer = setTimeout(() => {
      reject(new Error('Execution timed out'));
      instance.exports.force_halt();
    }, timeout);

    try {
      // Initial memory check
      if (memory.buffer.byteLength > MEMORY_LIMIT) {
        throw new Error('Initial memory exceeds limit');
      }
      
      // Execute WASM
      const result = instance.exports.run_code();
      
      // Post-execution memory check
      if (memory.buffer.byteLength > MEMORY_LIMIT) {
        throw new Error('Memory overflow during execution');
      }
      
      clearTimeout(timer);
      resolve(result);
    } catch (err) {
      clearTimeout(timer);
      reject(err);
    } finally {
      // Restore original grow function
      memory.grow = originalGrow;
    }
  });
};