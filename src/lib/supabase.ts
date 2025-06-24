import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

// Check if we have valid Supabase configuration
const hasValidConfig = supabaseUrl && supabaseAnonKey && 
  supabaseUrl !== '' && supabaseAnonKey !== '' &&
  supabaseUrl.includes('supabase.co');

let supabase;

if (hasValidConfig) {
  // Configure Supabase with proper redirect URLs
  supabase = createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: true,
      flowType: 'pkce'
    }
  });
} else {
  // Mock Supabase client for demo purposes with more helpful error messages
  console.warn('Supabase configuration missing. Running in demo mode.');
  
  supabase = {
    auth: {
      getSession: () => Promise.resolve({ data: { session: null }, error: null }),
      onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => {} } } }),
      signUp: () => Promise.resolve({ 
        data: null, 
        error: { message: 'Demo mode - Please connect to Supabase to enable user registration. Click "Connect to Supabase" in the top right corner.' } 
      }),
      signInWithPassword: () => Promise.resolve({ 
        data: null, 
        error: { message: 'Demo mode - Please connect to Supabase to enable authentication. Click "Connect to Supabase" in the top right corner.' } 
      }),
      signOut: () => Promise.resolve({ error: null }),
      getUser: () => Promise.resolve({ data: { user: null }, error: null })
    },
    from: () => ({
      select: () => ({
        eq: () => ({
          maybeSingle: () => Promise.resolve({ data: null, error: null })
        })
      })
    })
  };
}

export { supabase };