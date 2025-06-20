import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import { Map, ExternalLink } from 'lucide-react';

const Sitemap: React.FC = () => {
  const siteStructure = [
    {
      category: 'Main Pages',
      pages: [
        { name: 'Home', path: '/', description: 'Welcome to Ceetorial - Interactive programming education' },
        { name: 'Dashboard', path: '/dashboard', description: 'Your personalized learning dashboard' },
        { name: 'Pricing', path: '/pricing', description: 'Choose your learning plan' },
        { name: 'Success', path: '/success', description: 'Payment confirmation page' }
      ]
    },
    {
      category: 'Learning',
      pages: [
        { name: 'Courses', path: '/courses', description: 'Browse all programming courses' },
        { name: 'Learn C', path: '/learn/c', description: 'Interactive C programming course' },
        { name: 'Learn C++', path: '/learn/cpp', description: 'Advanced C++ programming course' },
        { name: 'Learn Rust', path: '/learn/rust', description: 'Memory-safe systems programming with Rust' },
        { name: 'Language Comparison', path: '/compare', description: 'Side-by-side programming language comparisons' },
        { name: 'Blog', path: '/blog', description: 'Programming insights and tutorials' }
      ]
    },
    {
      category: 'User Account',
      pages: [
        { name: 'Profile', path: '/profile', description: 'Manage your user profile and achievements' },
        { name: 'Settings', path: '/settings', description: 'Account settings and preferences' }
      ]
    },
    {
      category: 'Support',
      pages: [
        { name: 'FAQ', path: '/faq', description: 'Frequently asked questions' },
        { name: 'Help Center', path: '/help', description: 'Get help and support' },
        { name: 'Contact Us', path: '/contact', description: 'Get in touch with our team' },
        { name: 'Community', path: '/community', description: 'Join our programming community' }
      ]
    },
    {
      category: 'Company',
      pages: [
        { name: 'About Ceetorial', path: '/about', description: 'Learn about our mission and team' },
        { name: 'Careers', path: '/careers', description: 'Join our team' },
        { name: 'Press Kit', path: '/press', description: 'Media resources and press information' }
      ]
    },
    {
      category: 'Legal',
      pages: [
        { name: 'Terms of Service', path: '/terms', description: 'Terms and conditions of use' },
        { name: 'Privacy Policy', path: '/privacy', description: 'How we protect your privacy' },
        { name: 'Cookie Policy', path: '/cookies', description: 'Information about our cookie usage' },
        { name: 'Accessibility', path: '/accessibility', description: 'Our commitment to accessibility' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900">
      <Navbar variant="app" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex p-4 bg-primary-100 dark:bg-primary-900 rounded-full mb-6">
            <Map className="h-8 w-8 text-primary-600" />
          </div>
          <h1 className="text-4xl font-bold text-neutral-900 dark:text-white mb-4">
            Sitemap
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-300">
            Navigate through all pages and sections of Ceetorial
          </p>
        </div>

        {/* Site Structure */}
        <div className="space-y-8">
          {siteStructure.map((section, index) => (
            <div key={index} className="bg-white dark:bg-neutral-800 rounded-xl p-8">
              <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-6">
                {section.category}
              </h2>
              
              <div className="grid md:grid-cols-2 gap-4">
                {section.pages.map((page, pageIndex) => (
                  <div key={pageIndex} className="p-4 bg-neutral-50 dark:bg-neutral-700 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-600 transition-colors">
                    <div className="flex items-center justify-between mb-2">
                      <Link 
                        to={page.path}
                        className="font-medium text-primary-600 hover:text-primary-700 flex items-center space-x-1"
                      >
                        <span>{page.name}</span>
                        <ExternalLink className="h-4 w-4" />
                      </Link>
                      <code className="text-xs text-neutral-500 dark:text-neutral-400 bg-neutral-200 dark:bg-neutral-600 px-2 py-1 rounded">
                        {page.path}
                      </code>
                    </div>
                    <p className="text-sm text-neutral-600 dark:text-neutral-300">
                      {page.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Information */}
        <div className="mt-12 bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
            Need Help Finding Something?
          </h2>
          <p className="text-neutral-600 dark:text-neutral-300 mb-6">
            If you can't find what you're looking for, try our search feature or contact our support team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              to="/help"
              className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-semibold text-center"
            >
              Visit Help Center
            </Link>
            <Link 
              to="/contact"
              className="px-6 py-3 border border-neutral-300 dark:border-neutral-600 text-neutral-700 dark:text-neutral-300 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-colors font-semibold text-center"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </div>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default Sitemap;