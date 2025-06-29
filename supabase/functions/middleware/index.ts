import { createClient } from 'npm:@supabase/supabase-js@2.49.1'

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

// Simple rate limiting without external dependencies
const rateLimitMap = new Map();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const windowMs = 60 * 1000; // 1 minute
  const maxRequests = 10;
  
  if (!rateLimitMap.has(ip)) {
    rateLimitMap.set(ip, []);
  }
  
  const requests = rateLimitMap.get(ip);
  
  // Remove old requests outside the window
  const validRequests = requests.filter((timestamp: number) => now - timestamp < windowMs);
  
  if (validRequests.length >= maxRequests) {
    return true;
  }
  
  // Add current request
  validRequests.push(now);
  rateLimitMap.set(ip, validRequests);
  
  return false;
}

Deno.serve(async (req: Request) => {
  try {
    if (req.method === "OPTIONS") {
      return new Response(null, {
        status: 200,
        headers: corsHeaders,
      });
    }

    const ip = req.headers.get('x-real-ip') || req.headers.get('x-forwarded-for') || 'unknown';
    
    if (isRateLimited(ip)) {
      return new Response(
        JSON.stringify({ error: 'Too many requests' }),
        { 
          status: 429,
          headers: {
            ...corsHeaders,
            'Content-Type': 'application/json',
          }
        }
      );
    }

    return new Response(
      JSON.stringify({ message: 'Rate limit check passed' }),
      {
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      {
        status: 500,
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
      }
    );
  }
});