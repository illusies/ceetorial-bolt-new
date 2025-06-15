import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Home, User } from 'lucide-react';
import Navbar from '../components/Navbar';
import { useAuth } from '../hooks/useAuth';

const Success: React.FC = () => {
  const { user } = useAuth();
  const [orderDetails, setOrderDetails] = useState<any>(null);

  useEffect(() => {
    // You could fetch order details here if needed
    // For now, we'll just show a success message
  }, []);

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900">
      <Navbar variant="app" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          {/* Success Icon */}
          <div className="mx-auto flex items-center justify-center h-24 w-24 rounded-full bg-green-100 dark:bg-green-900 mb-8">
            <CheckCircle className="h-12 w-12 text-green-600 dark:text-green-400" />
          </div>

          {/* Success Message */}
          <h1 className="text-4xl font-bold text-neutral-900 dark:text-white mb-4">
            Payment Successful!
          </h1>
          <p className="text-xl text-neutral-600 dark:text-neutral-300 mb-8 max-w-2xl mx-auto">
            Thank you for your purchase! Your payment has been processed successfully. 
            You now have access to all the features included in your plan.
          </p>

          {/* Order Details Card */}
          <div className="bg-white dark:bg-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-700 p-8 mb-8 max-w-md mx-auto">
            <h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">
              What's Next?
            </h2>
            <div className="space-y-4 text-left">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-primary-600 text-sm font-bold">1</span>
                </div>
                <div>
                  <h3 className="font-medium text-neutral-900 dark:text-white">Access Your Dashboard</h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-300">
                    Start learning with your new features and content
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-primary-600 text-sm font-bold">2</span>
                </div>
                <div>
                  <h3 className="font-medium text-neutral-900 dark:text-white">Explore New Languages</h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-300">
                    Try out C++, Rust, Go, Python, and more
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-primary-600 text-sm font-bold">3</span>
                </div>
                <div>
                  <h3 className="font-medium text-neutral-900 dark:text-white">Join the Community</h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-300">
                    Connect with other learners and get help
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/dashboard"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700 transition-all duration-300 hover:scale-105"
            >
              <User className="h-5 w-5 mr-2" />
              Go to Dashboard
              <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
            
            <Link
              to="/"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-neutral-300 dark:border-neutral-600 text-neutral-700 dark:text-neutral-300 font-semibold rounded-xl hover:border-primary-300 hover:text-primary-600 transition-all duration-300"
            >
              <Home className="h-5 w-5 mr-2" />
              Back to Home
            </Link>
          </div>

          {/* Additional Info */}
          <div className="mt-12 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
            <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-2">
              Need Help?
            </h3>
            <p className="text-blue-800 dark:text-blue-200 mb-4">
              If you have any questions about your purchase or need assistance getting started, 
              we're here to help!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:support@ceetorial.com"
                className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
              >
                Contact Support
              </a>
              <Link
                to="/help"
                className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
              >
                Visit Help Center
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;