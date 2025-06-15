import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';
import Learn from './pages/Learn';
import Compare from './pages/Compare';
import Pricing from './pages/Pricing';
import Settings from './pages/Settings';
import Profile from './pages/Profile';
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
        </Routes>
        <BackToTop />
      </div>
    </Router>
  );
}

export default App;