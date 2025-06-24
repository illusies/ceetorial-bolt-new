// Add at top of file
import { useEffect, useRef } from 'react';

// Inside custom hook
export const useCodeRunner = () => {
  const abortControllerRef = useRef(new AbortController());

  const executeCode = async (code) => {
    abortControllerRef.current.abort();
    abortControllerRef.current = new AbortController();
    
    try {
      // ... existing state updates
      const response = await fetch('/api/execute', {
        method: 'POST',
        body: JSON.stringify({ code }),
        signal: abortControllerRef.current.signal
      });
      // ... handle response
    } catch (err) {
      if (err.name !== 'AbortError') {
        // ... error handling
      }
    }
  };

  // Cleanup
  useEffect(() => {
    return () => abortControllerRef.current?.abort();
  }, []);

  return { executeCode };
};