import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import { Eye, Keyboard, Volume2, Users, CheckCircle, Mail } from 'lucide-react';

const Accessibility: React.FC = () => {
  const features = [
    {
      icon: Eye,
      title: 'Visual Accessibility',
      description: 'High contrast themes, scalable fonts, and screen reader compatibility',
      items: [
        'WCAG 2.1 AA compliant color contrast ratios',
        'Scalable text up to 200% without loss of functionality',
        'Dark and light theme options',
        'Alternative text for all images and graphics',
        'Clear visual focus indicators'
      ]
    },
    {
      icon: Keyboard,
      title: 'Keyboard Navigation',
      description: 'Full keyboard accessibility for all interactive elements',
      items: [
        'Tab navigation through all interactive elements',
        'Skip links to main content areas',
        'Keyboard shortcuts for common actions',
        'Logical tab order throughout the interface',
        'No keyboard traps'
      ]
    },
    {
      icon: Volume2,
      title: 'Audio & Media',
      description: 'Accessible audio content and media controls',
      items: [
        'Captions for all video content',
        'Audio descriptions where applicable',
        'Transcript availability for audio content',
        'Accessible media player controls',
        'Volume control and mute options'
      ]
    },
    {
      icon: Users,
      title: 'Cognitive Accessibility',
      description: 'Clear navigation and content structure for all users',
      items: [
        'Consistent navigation and layout',
        'Clear headings and content structure',
        'Simple, jargon-free language',
        'Error prevention and clear error messages',
        'Sufficient time limits with extensions available'
      ]
    }
  ];

  const guidelines = [
    {
      standard: 'WCAG 2.1 Level AA',
      description: 'We follow Web Content Accessibility Guidelines 2.1 at Level AA compliance',
      status: 'Compliant'
    },
    {
      standard: 'Section 508',
      description: 'Our platform meets Section 508 standards for federal accessibility',
      status: 'Compliant'
    },
    {
      standard: 'ADA Compliance',
      description: 'We strive to meet Americans with Disabilities Act requirements',
      status: 'Ongoing'
    },
    {
      standard: 'EN 301 549',
      description: 'European standard for accessibility of ICT products and services',
      status: 'Compliant'
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900">
      <Navbar variant="app" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex p-4 bg-primary-100 dark:bg-primary-900 rounded-full mb-6">
            <Eye className="h-8 w-8 text-primary-600" />
          </div>
          <h1 className="text-4xl font-bold text-neutral-900 dark:text-white mb-4">
            Accessibility Statement
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-300">
            Our commitment to making programming education accessible to everyone
          </p>
        </div>

        {/* Commitment Statement */}
        <div className="bg-white dark:bg-neutral-800 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-4">Our Commitment</h2>
          <p className="text-neutral-600 dark:text-neutral-300 mb-6">
            At Ceetorial, we believe that programming education should be accessible to everyone, regardless of their abilities or disabilities. 
            We are committed to ensuring that our platform provides an inclusive learning experience for all users.
          </p>
          <p className="text-neutral-600 dark:text-neutral-300 mb-6">
            We continuously work to improve the accessibility of our platform and strive to meet or exceed international accessibility standards. 
            Our goal is to create an environment where every learner can successfully engage with our programming courses and resources.
          </p>
          <div className="bg-primary-50 dark:bg-primary-900/20 border border-primary-200 dark:border-primary-800 rounded-lg p-4">
            <p className="text-primary-800 dark:text-primary-200 font-medium">
              We welcome feedback on the accessibility of our platform and are committed to addressing any barriers that may exist.
            </p>
          </div>
        </div>

        {/* Accessibility Features */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-8 text-center">
            Accessibility Features
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white dark:bg-neutral-800 rounded-xl p-8">
                <div className="inline-flex p-3 bg-primary-100 dark:bg-primary-900 rounded-xl mb-4">
                  <feature.icon className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-3">{feature.title}</h3>
                <p className="text-neutral-600 dark:text-neutral-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-neutral-600 dark:text-neutral-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Standards Compliance */}
        <div className="bg-white dark:bg-neutral-800 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-6">Standards Compliance</h2>
          <div className="space-y-4">
            {guidelines.map((guideline, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-neutral-50 dark:bg-neutral-700 rounded-lg">
                <div>
                  <h3 className="font-medium text-neutral-900 dark:text-white">{guideline.standard}</h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-300">{guideline.description}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  guideline.status === 'Compliant' 
                    ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                    : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                }`}>
                  {guideline.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Assistive Technologies */}
        <div className="bg-white dark:bg-neutral-800 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-6">Supported Assistive Technologies</h2>
          <p className="text-neutral-600 dark:text-neutral-300 mb-6">
            Our platform has been tested with and supports the following assistive technologies:
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-neutral-900 dark:text-white mb-3">Screen Readers</h3>
              <ul className="space-y-2 text-neutral-600 dark:text-neutral-300">
                <li>• NVDA (Windows)</li>
                <li>• JAWS (Windows)</li>
                <li>• VoiceOver (macOS/iOS)</li>
                <li>• TalkBack (Android)</li>
                <li>• Orca (Linux)</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-neutral-900 dark:text-white mb-3">Other Tools</h3>
              <ul className="space-y-2 text-neutral-600 dark:text-neutral-300">
                <li>• Voice recognition software</li>
                <li>• Switch navigation devices</li>
                <li>• Eye-tracking systems</li>
                <li>• Magnification software</li>
                <li>• Alternative keyboards</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Browser Support */}
        <div className="bg-white dark:bg-neutral-800 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-6">Browser Support</h2>
          <p className="text-neutral-600 dark:text-neutral-300 mb-6">
            For the best accessibility experience, we recommend using the latest versions of:
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-neutral-900 dark:text-white mb-3">Desktop Browsers</h3>
              <ul className="space-y-2 text-neutral-600 dark:text-neutral-300">
                <li>• Chrome (latest 2 versions)</li>
                <li>• Firefox (latest 2 versions)</li>
                <li>• Safari (latest 2 versions)</li>
                <li>• Edge (latest 2 versions)</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-neutral-900 dark:text-white mb-3">Mobile Browsers</h3>
              <ul className="space-y-2 text-neutral-600 dark:text-neutral-300">
                <li>• Safari on iOS (latest 2 versions)</li>
                <li>• Chrome on Android (latest 2 versions)</li>
                <li>• Samsung Internet (latest version)</li>
                <li>• Firefox Mobile (latest version)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Feedback and Contact */}
        <div className="bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-2xl p-8">
          <div className="text-center">
            <div className="inline-flex p-4 bg-primary-100 dark:bg-primary-900 rounded-full mb-6">
              <Mail className="h-8 w-8 text-primary-600" />
            </div>
            <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-4">
              Accessibility Feedback
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-8 max-w-2xl mx-auto">
              We value your feedback on the accessibility of our platform. If you encounter any barriers 
              or have suggestions for improvement, please let us know.
            </p>
            
            <div className="max-w-md mx-auto bg-white dark:bg-neutral-800 rounded-xl p-6">
              <h3 className="font-semibold text-neutral-900 dark:text-white mb-4">Contact Our Accessibility Team</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <strong className="text-neutral-900 dark:text-white">Email:</strong>
                  <p className="text-primary-600">accessibility@ceetorial.com</p>
                </div>
                <div>
                  <strong className="text-neutral-900 dark:text-white">Response Time:</strong>
                  <p className="text-neutral-600 dark:text-neutral-300">Within 2 business days</p>
                </div>
                <div>
                  <strong className="text-neutral-900 dark:text-white">Phone:</strong>
                  <p className="text-neutral-600 dark:text-neutral-300">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>
            
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-6">
              This accessibility statement was last updated on January 1, 2025
            </p>
          </div>
        </div>
      </div>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default Accessibility;