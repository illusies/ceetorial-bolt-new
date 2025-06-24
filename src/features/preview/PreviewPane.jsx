useEffect(() => {
  if (wasmModule) {
    const memory = wasmModule.exports.memory;
    if (!memory || memory.buffer.byteLength === 0) {
      console.error('Memory sharing failed between modules');
      // Implement fallback strategy
    }
  }
}, [wasmModule]);