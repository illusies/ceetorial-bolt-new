import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import { FileText, Shield, AlertCircle } from 'lucide-react';

const Terms: React.FC = () => {
  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900">
      <Navbar variant="app" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex p-4 bg-primary-100 dark:bg-primary-900 rounded-full mb-6">
            <FileText className="h-8 w-8 text-primary-600" />
          </div>
          <h1 className="text-4xl font-bold text-neutral-900 dark:text-white mb-4">
            Terms of Service
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-300">
            Last updated: January 1, 2025
          </p>
        </div>

        {/* Content */}
        <div className="bg-white dark:bg-neutral-800 rounded-2xl p-8 space-y-8">
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5" />
              <div>
                <h3 className="font-semibold text-blue-900 dark:text-blue-100">Important Notice</h3>
                <p className="text-blue-800 dark:text-blue-200 text-sm mt-1">
                  Please read these terms carefully before using our service. By accessing Ceetorial, you agree to be bound by these terms.
                </p>
              </div>
            </div>
          </div>

          <section>
            <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-4">1. Acceptance of Terms</h2>
            <p className="text-neutral-600 dark:text-neutral-300 mb-4">
              By accessing and using Ceetorial ("the Service"), you accept and agree to be bound by the terms and provision of this agreement. 
              If you do not agree to abide by the above, please do not use this service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-4">2. Description of Service</h2>
            <p className="text-neutral-600 dark:text-neutral-300 mb-4">
              Ceetorial is an online programming education platform that provides interactive courses, coding challenges, 
              and learning resources for various programming languages including C, C++, Rust, Go, Python, and others.
            </p>
            <p className="text-neutral-600 dark:text-neutral-300 mb-4">
              The Service includes both free and paid content, interactive code editors, progress tracking, 
              and community features to enhance the learning experience.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-4">3. User Accounts</h2>
            <p className="text-neutral-600 dark:text-neutral-300 mb-4">
              To access certain features of the Service, you must create an account. You are responsible for:
            </p>
            <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-300 space-y-2 mb-4">
              <li>Maintaining the confidentiality of your account credentials</li>
              <li>All activities that occur under your account</li>
              <li>Providing accurate and complete information</li>
              <li>Notifying us immediately of any unauthorized use</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-4">4. Subscription and Payment</h2>
            <p className="text-neutral-600 dark:text-neutral-300 mb-4">
              Paid subscriptions provide access to premium features and content. By subscribing, you agree to:
            </p>
            <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-300 space-y-2 mb-4">
              <li>Pay all applicable fees as described on our pricing page</li>
              <li>Automatic renewal unless cancelled before the renewal date</li>
              <li>Our refund policy as outlined in section 5</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-4">5. Refund Policy</h2>
            <p className="text-neutral-600 dark:text-neutral-300 mb-4">
              We offer a 14-day money-back guarantee for new subscribers. Refunds are processed within 5-10 business days. 
              To request a refund, contact our support team at support@ceetorial.com.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-4">6. Acceptable Use</h2>
            <p className="text-neutral-600 dark:text-neutral-300 mb-4">
              You agree not to use the Service to:
            </p>
            <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-300 space-y-2 mb-4">
              <li>Violate any applicable laws or regulations</li>
              <li>Share account credentials with others</li>
              <li>Attempt to reverse engineer or hack the platform</li>
              <li>Upload malicious code or content</li>
              <li>Harass or abuse other users</li>
              <li>Use the service for commercial purposes without permission</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-4">7. Intellectual Property</h2>
            <p className="text-neutral-600 dark:text-neutral-300 mb-4">
              All content on Ceetorial, including courses, exercises, text, graphics, logos, and software, 
              is the property of Ceetorial or its licensors and is protected by copyright and other intellectual property laws.
            </p>
            <p className="text-neutral-600 dark:text-neutral-300 mb-4">
              You retain ownership of any code you write using our platform, but grant us a license to use it for 
              educational and platform improvement purposes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-4">8. Privacy</h2>
            <p className="text-neutral-600 dark:text-neutral-300 mb-4">
              Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the Service, 
              to understand our practices.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-4">9. Limitation of Liability</h2>
            <p className="text-neutral-600 dark:text-neutral-300 mb-4">
              Ceetorial shall not be liable for any indirect, incidental, special, consequential, or punitive damages, 
              including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-4">10. Termination</h2>
            <p className="text-neutral-600 dark:text-neutral-300 mb-4">
              We may terminate or suspend your account and access to the Service immediately, without prior notice, 
              for conduct that we believe violates these Terms or is harmful to other users, us, or third parties.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-4">11. Changes to Terms</h2>
            <p className="text-neutral-600 dark:text-neutral-300 mb-4">
              We reserve the right to modify these terms at any time. We will notify users of significant changes 
              via email or through the platform. Continued use of the Service after changes constitutes acceptance of the new terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-4">12. Contact Information</h2>
            <p className="text-neutral-600 dark:text-neutral-300 mb-4">
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <div className="bg-neutral-50 dark:bg-neutral-700 rounded-lg p-4">
              <p className="text-neutral-900 dark:text-white font-medium">Ceetorial</p>
              <p className="text-neutral-600 dark:text-neutral-300">Email: legal@ceetorial.com</p>
              <p className="text-neutral-600 dark:text-neutral-300">Address: 123 Tech Street, San Francisco, CA 94105</p>
            </div>
          </section>
        </div>
      </div>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default Terms;