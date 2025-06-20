import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Send,
  MessageCircle,
  HelpCircle,
  Building
} from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    category: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Us',
      description: 'Send us a message and we\'ll respond within 24 hours',
      contact: 'support@ceetorial.com',
      action: 'Send Email'
    },
    {
      icon: Phone,
      title: 'Call Us',
      description: 'Speak directly with our support team',
      contact: '+1 (555) 123-4567',
      action: 'Call Now'
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      contact: 'Available 9 AM - 6 PM PST',
      action: 'Start Chat'
    }
  ];

  const offices = [
    {
      city: 'San Francisco',
      address: '123 Tech Street, San Francisco, CA 94105',
      phone: '+1 (555) 123-4567',
      email: 'sf@ceetorial.com'
    },
    {
      city: 'New York',
      address: '456 Innovation Ave, New York, NY 10001',
      phone: '+1 (555) 987-6543',
      email: 'ny@ceetorial.com'
    },
    {
      city: 'London',
      address: '789 Learning Lane, London, UK EC1A 1BB',
      phone: '+44 20 1234 5678',
      email: 'london@ceetorial.com'
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900">
      <Navbar variant="app" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
            Have questions about Ceetorial? Need help with your learning journey? 
            We're here to help you succeed in your programming education.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contactMethods.map((method, index) => (
            <div key={index} className="bg-white dark:bg-neutral-800 rounded-xl p-8 text-center">
              <div className="inline-flex p-4 bg-primary-100 dark:bg-primary-900 rounded-full mb-6">
                <method.icon className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-3">{method.title}</h3>
              <p className="text-neutral-600 dark:text-neutral-300 mb-4">{method.description}</p>
              <p className="font-medium text-neutral-900 dark:text-white mb-6">{method.contact}</p>
              <button className="w-full px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-semibold">
                {method.action}
              </button>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <div className="bg-white dark:bg-neutral-800 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">Send us a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-neutral-700 dark:text-white"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-neutral-700 dark:text-white"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                    Category *
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-neutral-700 dark:text-white"
                  >
                    <option value="">Select a category</option>
                    <option value="general">General Inquiry</option>
                    <option value="technical">Technical Support</option>
                    <option value="billing">Billing & Subscriptions</option>
                    <option value="courses">Courses & Content</option>
                    <option value="partnership">Partnership</option>
                    <option value="press">Press & Media</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-neutral-700 dark:text-white"
                    placeholder="How can we help you?"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-neutral-700 dark:text-white"
                  placeholder="Tell us more about your question or how we can help..."
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-semibold"
              >
                <Send className="h-5 w-5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>

          {/* Office Locations */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">Our Offices</h2>
              <div className="space-y-6">
                {offices.map((office, index) => (
                  <div key={index} className="bg-white dark:bg-neutral-800 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-3">{office.city}</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-start space-x-2">
                        <MapPin className="h-4 w-4 text-neutral-500 mt-0.5" />
                        <span className="text-neutral-600 dark:text-neutral-300">{office.address}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Phone className="h-4 w-4 text-neutral-500" />
                        <span className="text-neutral-600 dark:text-neutral-300">{office.phone}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Mail className="h-4 w-4 text-neutral-500" />
                        <span className="text-neutral-600 dark:text-neutral-300">{office.email}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-neutral-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">Business Hours</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-neutral-500" />
                  <span className="text-neutral-600 dark:text-neutral-300">Monday - Friday: 9:00 AM - 6:00 PM PST</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-neutral-500" />
                  <span className="text-neutral-600 dark:text-neutral-300">Saturday: 10:00 AM - 4:00 PM PST</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-neutral-500" />
                  <span className="text-neutral-600 dark:text-neutral-300">Sunday: Closed</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-xl p-6">
              <div className="flex items-start space-x-3">
                <HelpCircle className="h-6 w-6 text-primary-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-neutral-900 dark:text-white mb-2">Need Immediate Help?</h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-300 mb-3">
                    Check out our Help Center for instant answers to common questions.
                  </p>
                  <button className="text-primary-600 hover:text-primary-700 font-medium text-sm">
                    Visit Help Center →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enterprise Contact */}
        <div className="bg-white dark:bg-neutral-800 rounded-2xl p-8 text-center">
          <div className="inline-flex p-4 bg-purple-100 dark:bg-purple-900 rounded-full mb-6">
            <Building className="h-8 w-8 text-purple-600" />
          </div>
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
            Enterprise Solutions
          </h2>
          <p className="text-neutral-600 dark:text-neutral-300 mb-6 max-w-2xl mx-auto">
            Looking to bring Ceetorial to your organization? Our enterprise team can help you create 
            custom learning solutions for your team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-semibold">
              Contact Enterprise Sales
            </button>
            <button className="px-6 py-3 border border-neutral-300 dark:border-neutral-600 text-neutral-700 dark:text-neutral-300 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-colors font-semibold">
              Schedule a Demo
            </button>
          </div>
        </div>
      </div>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default Contact;