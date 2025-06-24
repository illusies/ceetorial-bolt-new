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