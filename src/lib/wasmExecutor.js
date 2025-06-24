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