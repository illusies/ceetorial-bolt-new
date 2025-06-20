import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import { Shield, Eye, Lock, Database, Users, Globe } from 'lucide-react';

const Privacy: React.FC = () => {
  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900">
      <Navbar variant="app" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex p-4 bg-primary-100 dark:bg-primary-900 rounded-full mb-6">
            <Shield className="h-8 w-8 text-primary-600" />
          </div>
          <h1 className="text-4xl font-bold text-neutral-900 dark:text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-300">
            Last updated: January 1, 2025
          </p>
        </div>

        {/* Quick Overview */}
        <div className="bg-white dark:bg-neutral-800 rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-6">Privacy at a Glance</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="inline-flex p-3 bg-green-100 dark:bg-green-900 rounded-full mb-3">
                <Lock className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-neutral-900 dark:text-white mb-2">Data Protection</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-300">
                We use industry-standard encryption to protect your personal information.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex p-3 bg-blue-100 dark:bg-blue-900 rounded-full mb-3">
                <Eye className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-neutral-900 dark:text-white mb-2">Transparency</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-300">
                We're clear about what data we collect and how we use it.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex p-3 bg-purple-100 dark:bg-purple-900 rounded-full mb-3">
                <Users className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-neutral-900 dark:text-white mb-2">Your Control</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-300">
                You have full control over your data and can delete it anytime.
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white dark:bg-neutral-800 rounded-2xl p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-4">1. Information We Collect</h2>
            
            <h3 className="text-lg font-medium text-neutral-900 dark:text-white mb-3">Personal Information</h3>
            <p className="text-neutral-600 dark:text-neutral-300 mb-4">
              When you create an account, we collect:
            </p>
            <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-300 space-y-2 mb-6">
              <li>Name and email address</li>
              <li>Profile information you choose to provide</li>
              <li>Payment information (processed securely by Stripe)</li>
            </ul>

            <h3 className="text-lg font-medium text-neutral-900 dark:text-white mb-3">Learning Data</h3>
            <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-300 space-y-2 mb-6">
              <li>Course progress and completion status</li>
              <li>Code submissions and exercise solutions</li>
              <li>Quiz and assessment results</li>
              <li>Time spent on different activities</li>
            </ul>

            <h3 className="text-lg font-medium text-neutral-900 dark:text-white mb-3">Technical Information</h3>
            <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-300 space-y-2 mb-4">
              <li>IP address and browser information</li>
              <li>Device type and operating system</li>
              <li>Usage patterns and feature interactions</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-4">2. How We Use Your Information</h2>
            <p className="text-neutral-600 dark:text-neutral-300 mb-4">
              We use your information to:
            </p>
            <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-300 space-y-2 mb-4">
              <li>Provide and improve our educational services</li>
              <li>Personalize your learning experience</li>
              <li>Track your progress and provide feedback</li>
              <li>Send important updates about your account</li>
              <li>Provide customer support</li>
              <li>Analyze usage patterns to improve our platform</li>
              <li>Prevent fraud and ensure platform security</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-4">3. Information Sharing</h2>
            <p className="text-neutral-600 dark:text-neutral-300 mb-4">
              We do not sell your personal information. We may share your information only in these limited circumstances:
            </p>
            <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-300 space-y-2 mb-4">
              <li><strong>Service Providers:</strong> With trusted partners who help us operate our platform (e.g., Stripe for payments)</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
              <li><strong>Business Transfers:</strong> In the event of a merger or acquisition</li>
              <li><strong>With Your Consent:</strong> When you explicitly agree to share information</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-4">4. Data Security</h2>
            <p className="text-neutral-600 dark:text-neutral-300 mb-4">
              We implement robust security measures to protect your information:
            </p>
            <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-300 space-y-2 mb-4">
              <li>SSL/TLS encryption for data transmission</li>
              <li>Encrypted storage of sensitive information</li>
              <li>Regular security audits and updates</li>
              <li>Access controls and authentication</li>
              <li>Secure payment processing through Stripe</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-4">5. Your Rights and Choices</h2>
            <p className="text-neutral-600 dark:text-neutral-300 mb-4">
              You have the following rights regarding your personal information:
            </p>
            <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-300 space-y-2 mb-4">
              <li><strong>Access:</strong> Request a copy of your personal data</li>
              <li><strong>Correction:</strong> Update or correct inaccurate information</li>
              <li><strong>Deletion:</strong> Request deletion of your account and data</li>
              <li><strong>Portability:</strong> Export your learning data</li>
              <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-4">6. Cookies and Tracking</h2>
            <p className="text-neutral-600 dark:text-neutral-300 mb-4">
              We use cookies and similar technologies to:
            </p>
            <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-300 space-y-2 mb-4">
              <li>Remember your preferences and settings</li>
              <li>Analyze how you use our platform</li>
              <li>Provide personalized content</li>
              <li>Ensure platform security</li>
            </ul>
            <p className="text-neutral-600 dark:text-neutral-300 mb-4">
              You can control cookies through your browser settings, but some features may not work properly if cookies are disabled.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-4">7. Children's Privacy</h2>
            <p className="text-neutral-600 dark:text-neutral-300 mb-4">
              Our service is not intended for children under 13. We do not knowingly collect personal information from children under 13. 
              If we become aware that we have collected such information, we will delete it promptly.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-4">8. International Data Transfers</h2>
            <p className="text-neutral-600 dark:text-neutral-300 mb-4">
              Your information may be transferred to and processed in countries other than your own. 
              We ensure appropriate safeguards are in place to protect your data during such transfers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-4">9. Changes to This Policy</h2>
            <p className="text-neutral-600 dark:text-neutral-300 mb-4">
              We may update this privacy policy from time to time. We will notify you of any material changes 
              via email or through our platform. Your continued use of our service after such changes constitutes acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-4">10. Contact Us</h2>
            <p className="text-neutral-600 dark:text-neutral-300 mb-4">
              If you have any questions about this privacy policy or our data practices, please contact us:
            </p>
            <div className="bg-neutral-50 dark:bg-neutral-700 rounded-lg p-4">
              <p className="text-neutral-900 dark:text-white font-medium">Privacy Team</p>
              <p className="text-neutral-600 dark:text-neutral-300">Email: privacy@ceetorial.com</p>
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

export default Privacy;