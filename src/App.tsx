import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import BackToTop from './components/BackToTop';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900">
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
        </Routes>
        <BackToTop />
      </div>
    </Router>
  );
}

export default App;