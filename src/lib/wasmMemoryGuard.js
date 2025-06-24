export class MemoryGuard {
  constructor(instance, limitMB = 10) {
    this.instance = instance;
    this.limit = limitMB * 1024 * 1024;
  }

  check(ptr, size) {
    const current = this.instance.exports.memory.buffer.byteLength;
    if (current > this.limit) {
      throw new Error(`Memory limit exceeded (${current} > ${this.limit})`);
    }
    // ... pointer boundary checks
  }
}