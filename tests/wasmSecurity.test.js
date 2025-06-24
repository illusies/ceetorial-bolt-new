describe('WASM Security Guards', () => {
  test('terminates infinite loops', async () => {
    const code = `while(1){}`;
    await expect(executeWasm(code)).rejects.toThrow('timed out');
  }, 10000);

  test('blocks memory overflows', async () => {
    const code = `void main() { 
      while(1) malloc(1024*1024); 
    }`;
    await expect(executeWasm(code)).rejects.toThrow('Memory overflow');
  });

  test('prevents stack overflows', async () => {
    const code = `void recurse() { recurse(); }
                 void main() { recurse(); }`;
    await expect(executeWasm(code)).rejects.toThrow('Stack depth');
  });

  test('throttles excessive requests', async () => {
    const requests = Array(15).fill().map(() => executeCode('int main(){}'));
    const results = await Promise.allSettled(requests);
    const rejected = results.filter(r => r.status === 'rejected');
    expect(rejected.length).toBeGreaterThan(5);
  });
});