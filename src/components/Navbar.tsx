import React from 'react';
import { Link } from 'react-router-dom';
import { Code, Menu, X, User, Settings, LogOut } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import AuthModal from './AuthModal';
import { useAuth } from '../hooks/useAuth';

interface NavbarProps {
  variant?: 'landing' | 'app';
}

const Navbar: React.FC<NavbarProps> = ({ variant = 'landing' }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [authModal, setAuthModal] = React.useState<{ isOpen: boolean; mode: 'login' | 'signup' }>({
    isOpen: false,
    mode: 'login'
  });
  const { user, signOut } = useAuth();

  const openAuthModal = (mode: 'login' | 'signup') => {
    setAuthModal({ isOpen: true, mode });
  };

  const closeAuthModal = () => {
    setAuthModal({ isOpen: false, mode: 'login' });
  };

  const handleSignOut = async () => {
    await signOut();
    window.location.href = '/';
  };

  return (
    <>
      <nav className="bg-white/90 dark:bg-neutral-900/90 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 font-bold text-xl text-neutral-900 dark:text-white">
              <Code className="h-8 w-8 text-primary-600" />
              <span>Ceetorial</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {variant === 'landing' ? (
                <>
                  <a href="#features" className="text-neutral-600 dark:text-neutral-300 hover:text-primary-600 transition-colors">
                    Features
                  </a>
                  <a href="#languages" className="text-neutral-600 dark:text-neutral-300 hover:text-primary-600 transition-colors">
                    Languages
                  </a>
                  <Link to="/pricing" className="text-neutral-600 dark:text-neutral-300 hover:text-primary-600 transition-colors">
                    Pricing
                  </Link>
                  <ThemeToggle />
                  {user ? (
                    <div className="flex items-center space-x-4">
                      <Link to="/dashboard" className="text-neutral-600 dark:text-neutral-300 hover:text-primary-600 transition-colors">
                        Dashboard
                      </Link>
                      <button 
                        onClick={handleSignOut}
                        className="flex items-center space-x-1 text-neutral-600 dark:text-neutral-300 hover:text-primary-600 transition-colors"
                      >
                        <LogOut className="h-4 w-4" />
                        <span>Sign Out</span>
                      </button>
                    </div>
                  ) : (
                    <>
                      <button 
                        onClick={() => openAuthModal('login')}
                        className="text-neutral-600 dark:text-neutral-300 hover:text-primary-600 transition-colors"
                      >
                        Sign In
                      </button>
                      <button 
                        onClick={() => openAuthModal('signup')}
                        className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors"
                      >
                        Get Started
                      </button>
                    </>
                  )}
                </>
              ) : (
                <>
                  <Link to="/dashboard" className="text-neutral-600 dark:text-neutral-300 hover:text-primary-600 transition-colors">
                    Dashboard
                  </Link>
                  <Link to="/compare" className="text-neutral-600 dark:text-neutral-300 hover:text-primary-600 transition-colors">
                    Compare
                  </Link>
                  <ThemeToggle />
                  <div className="flex items-center space-x-2">
                    <Link to="/settings" className="p-2 text-neutral-600 dark:text-neutral-300 hover:text-primary-600 transition-colors">
                      <Settings className="h-5 w-5" />
                    </Link>
                    <Link to="/profile" className="p-2 text-neutral-600 dark:text-neutral-300 hover:text-primary-600 transition-colors">
                      <User className="h-5 w-5" />
                    </Link>
                    <button 
                      onClick={handleSignOut}
                      className="p-2 text-neutral-600 dark:text-neutral-300 hover:text-primary-600 transition-colors"
                      title="Sign Out"
                    >
                      <LogOut className="h-5 w-5" />
                    </button>
                  </div>
                </>
              )}
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 text-neutral-600 dark:text-neutral-300 hover:text-primary-600 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-neutral-200 dark:border-neutral-700">
              <div className="flex flex-col space-y-2">
                {variant === 'landing' ? (
                  <>
                    <a href="#features" className="px-4 py-2 text-neutral-600 dark:text-neutral-300 hover:text-primary-600 transition-colors">
                      Features
                    </a>
                    <a href="#languages" className="px-4 py-2 text-neutral-600 dark:text-neutral-300 hover:text-primary-600 transition-colors">
                      Languages
                    </a>
                    <Link to="/pricing" className="px-4 py-2 text-neutral-600 dark:text-neutral-300 hover:text-primary-600 transition-colors">
                      Pricing
                    </Link>
                    <div className="px-4 py-2">
                      <ThemeToggle />
                    </div>
                    {user ? (
                      <>
                        <Link to="/dashboard" className="px-4 py-2 text-neutral-600 dark:text-neutral-300 hover:text-primary-600 transition-colors">
                          Dashboard
                        </Link>
                        <button 
                          onClick={handleSignOut}
                          className="mx-4 mt-2 text-left py-2 text-neutral-600 dark:text-neutral-300 hover:text-primary-600 transition-colors"
                        >
                          Sign Out
                        </button>
                      </>
                    ) : (
                      <>
                        <button 
                          onClick={() => openAuthModal('login')}
                          className="mx-4 mt-2 text-center py-2 text-neutral-600 dark:text-neutral-300 hover:text-primary-600 transition-colors"
                        >
                          Sign In
                        </button>
                        <button 
                          onClick={() => openAuthModal('signup')}
                          className="mx-4 mt-2 bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors text-center"
                        >
                          Get Started
                        </button>
                      </>
                    )}
                  </>
                ) : (
                  <>
                    <Link to="/dashboard" className="px-4 py-2 text-neutral-600 dark:text-neutral-300 hover:text-primary-600 transition-colors">
                      Dashboard
                    </Link>
                    <Link to="/compare" className="px-4 py-2 text-neutral-600 dark:text-neutral-300 hover:text-primary-600 transition-colors">
                      Compare
                    </Link>
                    <div className="px-4 py-2">
                      <ThemeToggle />
                    </div>
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      </nav>

      <AuthModal
        isOpen={authModal.isOpen}
        onClose={closeAuthModal}
        mode={authModal.mode}
        onModeChange={(mode) => setAuthModal({ isOpen: true, mode })}
      />
    </>
  );
};

export default Navbar;