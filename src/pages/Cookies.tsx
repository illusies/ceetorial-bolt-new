import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import { Cookie, Shield, BarChart, Settings, CheckCircle, X } from 'lucide-react';

const Cookies: React.FC = () => {
  const [cookieSettings, setCookieSettings] = useState({
    essential: true,
    analytics: true,
    marketing: false,
    preferences: true
  });

  const handleCookieToggle = (type: keyof typeof cookieSettings) => {
    if (type === 'essential') return; // Essential cookies cannot be disabled
    
    setCookieSettings(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  const cookieTypes = [
    {
      id: 'essential',
      name: 'Essential Cookies',
      description: 'These cookies are necessary for the website to function and cannot be switched off.',
      icon: Shield,
      required: true,
      examples: [
        'Authentication tokens',
        'Security tokens',
        'Session management',
        'Load balancing'
      ]
    },
    {
      id: 'analytics',
      name: 'Analytics Cookies',
      description: 'These cookies help us understand how visitors interact with our website.',
      icon: BarChart,
      required: false,
      examples: [
        'Google Analytics',
        'Page view tracking',
        'User behavior analysis',
        'Performance monitoring'
      ]
    },
    {
      id: 'preferences',
      name: 'Preference Cookies',
      description: 'These cookies remember your choices and provide enhanced, personalized features.',
      icon: Settings,
      required: false,
      examples: [
        'Theme preferences',
        'Language settings',
        'Layout customizations',
        'Accessibility options'
      ]
    },
    {
      id: 'marketing',
      name: 'Marketing Cookies',
      description: 'These cookies track your activity to help show you relevant advertisements.',
      icon: Cookie,
      required: false,
      examples: [
        'Advertising networks',
        'Social media tracking',
        'Conversion tracking',
        'Retargeting pixels'
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
            <Cookie className="h-8 w-8 text-primary-600" />
          </div>
          <h1 className="text-4xl font-bold text-neutral-900 dark:text-white mb-4">
            Cookie Policy
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-300">
            Last updated: January 1, 2025
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-white dark:bg-neutral-800 rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-4">What are Cookies?</h2>
          <p className="text-neutral-600 dark:text-neutral-300 mb-4">
            Cookies are small text files that are placed on your computer or mobile device when you visit our website. 
            They are widely used to make websites work more efficiently and provide information to website owners.
          </p>
          <p className="text-neutral-600 dark:text-neutral-300 mb-4">
            We use cookies to enhance your experience on Ceetorial, remember your preferences, and analyze how our 
            platform is used to improve our services.
          </p>
        </div>

        {/* Cookie Types */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-8 text-center">
            Types of Cookies We Use
          </h2>
          <div className="space-y-6">
            {cookieTypes.map((type) => (
              <div key={type.id} className="bg-white dark:bg-neutral-800 rounded-xl p-8">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="inline-flex p-3 bg-primary-100 dark:bg-primary-900 rounded-xl">
                      <type.icon className="h-6 w-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">{type.name}</h3>
                      <p className="text-neutral-600 dark:text-neutral-300">{type.description}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    {type.required ? (
                      <span className="px-3 py-1 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 rounded-full text-sm font-medium">
                        Required
                      </span>
                    ) : (
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={cookieSettings[type.id as keyof typeof cookieSettings]}
                          onChange={() => handleCookieToggle(type.id as keyof typeof cookieSettings)}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-neutral-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 rounded-full peer dark:bg-neutral-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-neutral-600 peer-checked:bg-primary-600"></div>
                      </label>
                    )}
                  </div>
                </div>
                
                <div className="ml-16">
                  <h4 className="font-medium text-neutral-900 dark:text-white mb-2">Examples:</h4>
                  <ul className="grid md:grid-cols-2 gap-2">
                    {type.examples.map((example, index) => (
                      <li key={index} className="flex items-center space-x-2 text-sm text-neutral-600 dark:text-neutral-300">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span>{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cookie Management */}
        <div className="bg-white dark:bg-neutral-800 rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-6">Managing Your Cookie Preferences</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-medium text-neutral-900 dark:text-white mb-4">Browser Settings</h3>
              <p className="text-neutral-600 dark:text-neutral-300 mb-4">
                You can control cookies through your browser settings. Most browsers allow you to:
              </p>
              <ul className="space-y-2 text-neutral-600 dark:text-neutral-300">
                <li>• View cookies stored on your device</li>
                <li>• Delete existing cookies</li>
                <li>• Block cookies from specific websites</li>
                <li>• Block all cookies</li>
                <li>• Get notified when cookies are set</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-neutral-900 dark:text-white mb-4">Our Cookie Settings</h3>
              <p className="text-neutral-600 dark:text-neutral-300 mb-4">
                Use the toggles above to customize your cookie preferences on Ceetorial. Your choices will be saved and applied immediately.
              </p>
              <div className="space-y-2">
                <button className="w-full px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium">
                  Save Preferences
                </button>
                <button className="w-full px-4 py-2 border border-neutral-300 dark:border-neutral-600 text-neutral-700 dark:text-neutral-300 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-colors font-medium">
                  Accept All Cookies
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Third-Party Cookies */}
        <div className="bg-white dark:bg-neutral-800 rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-6">Third-Party Cookies</h2>
          <p className="text-neutral-600 dark:text-neutral-300 mb-6">
            We may use third-party services that set their own cookies. These services include:
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-4 bg-neutral-50 dark:bg-neutral-700 rounded-lg">
              <h3 className="font-medium text-neutral-900 dark:text-white mb-2">Google Analytics</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-300 mb-2">
                Helps us understand how users interact with our website
              </p>
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700 text-sm">
                Google Privacy Policy →
              </a>
            </div>
            
            <div className="p-4 bg-neutral-50 dark:bg-neutral-700 rounded-lg">
              <h3 className="font-medium text-neutral-900 dark:text-white mb-2">Stripe</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-300 mb-2">
                Processes payments securely for our subscription services
              </p>
              <a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700 text-sm">
                Stripe Privacy Policy →
              </a>
            </div>
            
            <div className="p-4 bg-neutral-50 dark:bg-neutral-700 rounded-lg">
              <h3 className="font-medium text-neutral-900 dark:text-white mb-2">Supabase</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-300 mb-2">
                Provides our backend infrastructure and authentication
              </p>
              <a href="https://supabase.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700 text-sm">
                Supabase Privacy Policy →
              </a>
            </div>
            
            <div className="p-4 bg-neutral-50 dark:bg-neutral-700 rounded-lg">
              <h3 className="font-medium text-neutral-900 dark:text-white mb-2">Intercom</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-300 mb-2">
                Powers our customer support chat system
              </p>
              <a href="https://www.intercom.com/legal/privacy" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700 text-sm">
                Intercom Privacy Policy →
              </a>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-2xl p-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
              Questions About Our Cookie Policy?
            </h2>
            <p className="text-neutral-600 dark:text-neutral-300 mb-6">
              If you have any questions about how we use cookies or this policy, please contact us.
            </p>
            
            <div className="max-w-md mx-auto bg-white dark:bg-neutral-800 rounded-xl p-6">
              <h3 className="font-semibold text-neutral-900 dark:text-white mb-4">Contact Information</h3>
              <div className="space-y-2 text-sm">
                <div>
                  <strong className="text-neutral-900 dark:text-white">Email:</strong>
                  <p className="text-primary-600">privacy@ceetorial.com</p>
                </div>
                <div>
                  <strong className="text-neutral-900 dark:text-white">Address:</strong>
                  <p className="text-neutral-600 dark:text-neutral-300">123 Tech Street, San Francisco, CA 94105</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default Cookies;