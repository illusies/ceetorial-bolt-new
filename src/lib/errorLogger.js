export const logError = async (error, context) => {
  const errorData = {
    timestamp: new Date().toISOString(),
    ...error,
    context: JSON.stringify(context),
  };

  // Send to Supabase errors table
  await supabase
    .from('runtime_errors')
    .insert(errorData);
};

export const logError = async (error, context = {}) => {
  const errorData = {
    timestamp: new Date().toISOString(),
    message: error.message,
    stack: error.stack,
    code: error.code || 'UNKNOWN',
    context: JSON.stringify(context),
    userAgent: navigator.userAgent,
    url: window.location.href,
    platform: window.navigator.platform
  };

  // Client-side logging
  console.error('Ceetorial Error:', errorData);

  // Server-side logging (Supabase)
  try {
    await fetch('/api/log-error', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(errorData)
    });
  } catch (loggingError) {
    console.error('Failed to log error:', loggingError);
  }
};

// Usage
try {
  // Execution code
} catch (err) {
  err.code = 'WASM_EXECUTION';
  logError(err, { 
    codeSnippet: currentCode,
    memoryUsage: wasmInstance.exports.get_memory_usage()
  });
}