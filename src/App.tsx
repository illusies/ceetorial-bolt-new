import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';
import Learn from './pages/Learn';
import Compare from './pages/Compare';
import Pricing from './pages/Pricing';
import Settings from './pages/Settings';
import Profile from './pages/Profile';
import Success from './pages/Success';
import Blog from './pages/Blog';
import About from './pages/About';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import Help from './pages/Help';
import Community from './pages/Community';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Accessibility from './pages/Accessibility';
import Cookies from './pages/Cookies';
import Sitemap from './pages/Sitemap';
import Courses from './pages/Courses';
import Careers from './pages/Careers';
import Press from './pages/Press';
import DailyChallenge from './pages/DailyChallenge';
import Challenge from './pages/Challenge';
import BackToTop from './components/BackToTop';
import { supabase } from './lib/supabase';

// Component to handle auth state changes and redirects
const AuthHandler: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Handle auth state changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (event === 'SIGNED_IN') {
        // User successfully signed in, redirect to dashboard
        navigate('/dashboard');
      } else if (event === 'TOKEN_REFRESHED') {
        // Token was refreshed, user is still authenticated
        console.log('Token refreshed');
      } else if (event === 'SIGNED_OUT') {
        // User signed out, redirect to home if on protected page
        const protectedPaths = ['/dashboard', '/settings', '/profile'];
        if (protectedPaths.some(path => location.pathname.startsWith(path))) {
          navigate('/');
        }
      }
    });

    // Check for email confirmation in URL
    const handleEmailConfirmation = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const accessToken = urlParams.get('access_token');
      const refreshToken = urlParams.get('refresh_token');
      const type = urlParams.get('type');

      if (type === 'signup' && accessToken && refreshToken) {
        try {
          const { error } = await supabase.auth.setSession({
            access_token: accessToken,
            refresh_token: refreshToken
          });

          if (error) {
            console.error('Error setting session:', error);
          } else {
            // Clear URL parameters and redirect to dashboard
            window.history.replaceState({}, document.title, window.location.pathname);
            navigate('/dashboard');
          }
        } catch (error) {
          console.error('Error handling email confirmation:', error);
        }
      }
    };

    handleEmailConfirmation();

    return () => subscription.unsubscribe();
  }, [navigate, location]);

  return null;
};

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900">
        <AuthHandler />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/learn/:language" element={<Learn />} />
          <Route path="/compare" element={<Compare />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/success" element={<Success />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/help" element={<Help />} />
          <Route path="/community" element={<Community />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/accessibility" element={<Accessibility />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/sitemap" element={<Sitemap />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/press" element={<Press />} />
          <Route path="/daily-challenge" element={<DailyChallenge />} />
          <Route path="/challenge" element={<Challenge />} />
        </Routes>
        <BackToTop />
      </div>
    </Router>
  );
}

export default App;