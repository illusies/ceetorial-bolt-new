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