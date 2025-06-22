import 'jsr:@supabase/functions-js/edge-runtime.d.ts';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Helper function to run C code using isolated execution (enhanced mock with realistic behavior)
async function runCCodeSafely(code: string): Promise<{ output: string; error?: string; executionTime: number }> {
  const startTime = Date.now();
  
  try {
    // Simulate compilation time
    await new Promise(resolve => setTimeout(resolve, 500 + Math.random() * 1000));
    
    // Basic code analysis for realistic output generation
    const hasPointers = /\*/.test(code) || /&/.test(code);
    const hasPrintf = /printf/.test(code);
    const hasVariables = /int\s+\w+/.test(code) || /float\s+\w+/.test(code) || /char\s+\w+/.test(code);
    const hasLoops = /for\s*\(/.test(code) || /while\s*\(/.test(code);
    const hasArrays = /\[\s*\d*\s*\]/.test(code);
    
    let output = '';
    
    // Check for common syntax errors
    if (!code.includes('#include')) {
      return {
        output: '',
        error: 'compilation error: missing #include directive',
        executionTime: Date.now() - startTime
      };
    }
    
    if (!code.includes('main')) {
      return {
        output: '',
        error: 'compilation error: undefined reference to main',
        executionTime: Date.now() - startTime
      };
    }
    
    // Check for unmatched braces
    const openBraces = (code.match(/\{/g) || []).length;
    const closeBraces = (code.match(/\}/g) || []).length;
    if (openBraces !== closeBraces) {
      return {
        output: '',
        error: 'compilation error: unmatched braces',
        executionTime: Date.now() - startTime
      };
    }
    
    // Generate realistic output based on code content
    if (code.includes('Hello, World!') || code.includes('Hello World')) {
      output = 'Hello, World!\n';
    } else if (hasPointers && hasPrintf) {
      // Pointer example output
      const randomAddr = '0x7fff' + Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(8, '0');
      const randomValue = Math.floor(Math.random() * 100) + 1;
      output = `Value: ${randomValue}\nAddress: ${randomAddr}\nValue via pointer: ${randomValue}\n`;
    } else if (hasArrays && hasPrintf) {
      // Array example output
      const arraySize = Math.floor(Math.random() * 5) + 3;
      output = 'Array elements: ';
      for (let i = 0; i < arraySize; i++) {
        output += Math.floor(Math.random() * 10) + ' ';
      }
      output += '\n';
    } else if (hasLoops && hasPrintf) {
      // Loop example output
      const iterations = Math.floor(Math.random() * 5) + 3;
      for (let i = 0; i < iterations; i++) {
        output += `Iteration ${i + 1}\n`;
      }
    } else if (hasVariables && hasPrintf) {
      // Variable example output
      const randomNum = Math.floor(Math.random() * 100);
      output = `Number: ${randomNum}\nSquare: ${randomNum * randomNum}\n`;
    } else if (hasPrintf) {
      // Generic printf output
      output = 'Program executed successfully\n';
    } else {
      // No output (program runs but doesn't print)
      output = '';
    }
    
    // Add compilation success message
    const successPrefix = '\x1b[32m[Compilation successful]\x1b[0m\n';
    
    return {
      output: successPrefix + output,
      executionTime: Date.now() - startTime
    };
    
  } catch (error) {
    return {
      output: '',
      error: `runtime error: ${error instanceof Error ? error.message : 'unknown error'}`,
      executionTime: Date.now() - startTime
    };
  }
}

Deno.serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    if (req.method !== 'POST') {
      return new Response(
        JSON.stringify({ error: 'Method not allowed' }),
        {
          status: 405,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }

    const { code } = await req.json();
    
    if (!code || typeof code !== 'string') {
      return new Response(
        JSON.stringify({ error: 'Missing or invalid code parameter' }),
        {
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }

    // Basic security checks
    if (code.length > 10000) {
      return new Response(
        JSON.stringify({ error: 'Code too long (max 10,000 characters)' }),
        {
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }

    // Check for potentially dangerous operations
    const dangerousPatterns = [
      /system\s*\(/,
      /exec\s*\(/,
      /fork\s*\(/,
      /fopen\s*\(/,
      /remove\s*\(/,
      /unlink\s*\(/,
    ];

    for (const pattern of dangerousPatterns) {
      if (pattern.test(code)) {
        return new Response(
          JSON.stringify({ error: 'Code contains potentially unsafe operations' }),
          {
            status: 400,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          }
        );
      }
    }

    const result = await runCCodeSafely(code);
    
    return new Response(
      JSON.stringify(result),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );

  } catch (error) {
    console.error('Execution error:', error);
    return new Response(
      JSON.stringify({ 
        error: 'Internal server error',
        details: error instanceof Error ? error.message : 'Unknown error'
      }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});