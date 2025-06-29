import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Play, ArrowRight, Code, Users, Award, Zap } from 'lucide-react';
import AuthModal from './AuthModal';
import { useAuth } from '../hooks/useAuth';

const Hero: React.FC = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [authModal, setAuthModal] = React.useState<{ isOpen: boolean; mode: 'login' | 'signup' }>({
    isOpen: false,
    mode: 'signup'
  });

  const openAuthModal = (mode: 'login' | 'signup') => {
    setAuthModal({ isOpen: true, mode });
  };

  const closeAuthModal = () => {
    setAuthModal({ isOpen: false, mode: 'signup' });
  };

  const handleStartLearning = () => {
    if (user) {
      // User is logged in, go to dashboard
      navigate('/dashboard');
    } else {
      // User not logged in, show signup modal
      openAuthModal('signup');
    }
  };

  return (
    <>
      <div className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-20 h-20 bg-primary-200 dark:bg-primary-800 rounded-full opacity-20 animate-bounce-subtle"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-secondary-200 dark:bg-secondary-800 rounded-full opacity-20 animate-bounce-subtle" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-accent-200 dark:bg-accent-800 rounded-full opacity-20 animate-bounce-subtle" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center px-4 py-2 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 rounded-full text-sm font-medium mb-6">
                <Zap className="h-4 w-4 mr-2" />
                Interactive Learning Platform
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-neutral-900 dark:text-white mb-6 leading-tight">
                Master <span className="text-primary-600">C Programming</span> and Beyond
              </h1>
              
              <p className="text-xl text-neutral-600 dark:text-neutral-300 mb-8 leading-relaxed">
                From C fundamentals to modern languages like Rust, Go, and Python. 
                Learn through interactive coding, side-by-side comparisons, and hands-on challenges.
              </p>

              {/* Stats */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-8 mb-8">
                <div className="flex items-center space-x-2 text-neutral-600 dark:text-neutral-300">
                  <Users className="h-5 w-5 text-primary-600" />
                  <span className="font-medium">50K+ learners</span>
                </div>
                <div className="flex items-center space-x-2 text-neutral-600 dark:text-neutral-300">
                  <Code className="h-5 w-5 text-primary-600" />
                  <span className="font-medium">9 languages</span>
                </div>
                <div className="flex items-center space-x-2 text-neutral-600 dark:text-neutral-300">
                  <Award className="h-5 w-5 text-primary-600" />
                  <span className="font-medium">Interactive challenges</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <button
                  onClick={handleStartLearning}
                  className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  <Play className="h-5 w-5 mr-2" />
                  Start Learning Free
                </button>
              </div>
            </div>

            {/* Code Preview */}
            <div className="relative">
              <div className="bg-neutral-900 rounded-2xl shadow-2xl overflow-hidden border border-neutral-800">
                <div className="flex items-center px-4 py-3 bg-neutral-800">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-accent-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-secondary-500 rounded-full"></div>
                  </div>
                  <div className="ml-4 text-neutral-400 text-sm font-mono">hello_world.c</div>
                </div>
                <div className="p-6 font-mono text-sm">
                  <div className="text-neutral-500">#include &lt;stdio.h&gt;</div>
                  <div className="text-neutral-500 mt-2">// Your journey starts here</div>
                  <div className="text-blue-400 mt-2">int <span className="text-yellow-400">main</span>() {'{'}  </div>
                  <div className="text-neutral-300 ml-4 mt-1">
                    printf(<span className="text-green-400">"Hello, Ceetorial!"</span>);
                  </div>
                  <div className="text-purple-400 ml-4 mt-1">return <span className="text-orange-400">0</span>;</div>
                  <div className="text-blue-400 mt-1">{'}'}</div>
                  <div className="mt-4 text-neutral-500">
                    <span className="text-secondary-400">Output:</span> Hello, Ceetorial!
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-white dark:bg-neutral-800 rounded-lg shadow-lg p-3 border border-neutral-200 dark:border-neutral-700">
                <div className="flex items-center space-x-2 text-sm">
                  <div className="w-2 h-2 bg-secondary-500 rounded-full"></div>
                  <span className="text-neutral-600 dark:text-neutral-300 font-medium">Code compiled successfully!</span>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-white dark:bg-neutral-800 rounded-lg shadow-lg p-3 border border-neutral-200 dark:border-neutral-700">
                <div className="flex items-center space-x-2 text-sm">
                  <Award className="h-4 w-4 text-yellow-500" />
                  <span className="text-neutral-600 dark:text-neutral-300 font-medium">First program complete!</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AuthModal
        isOpen={authModal.isOpen}
        onClose={closeAuthModal}
        mode={authModal.mode}
        onModeChange={(mode) => setAuthModal({ isOpen: true, mode })}
      />
    </>
  );
};

export default Hero;