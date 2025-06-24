const blockedImports = ['fd_write', 'system', 'execv'];
const safeImports = {
  abort: () => { throw new Error('Aborted') },
  // ... other safe imports
};