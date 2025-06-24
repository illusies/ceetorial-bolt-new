import { createClient } from '@supabase/supabase-js'
import { Ratelimit } from '@upstash/ratelimit'

export const rateLimiter = new Ratelimit({
  redis: Deno.env.get('REDIS_URL'),
  limiter: Ratelimit.slidingWindow(10, '1 m'),
});

export default async (req) => {
  const ip = req.headers.get('x-real-ip') || 'unknown';
  const { success } = await rateLimiter.limit(ip);
  
  if (!success) {
    return new Response('Too many requests', { status: 429 });
  }
  
  // Continue to main function
};