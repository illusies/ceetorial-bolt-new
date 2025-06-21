import React from 'react';
import { Link } from 'react-router-dom';
import { Code, Facebook, Instagram, Linkedin, Twitter, MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2 font-bold text-xl text-white mb-4">
              <Code className="h-8 w-8 text-primary-400" />
              <span>Ceetorial</span>
            </Link>
            <p className="text-neutral-300 mb-6 leading-relaxed">
              Master C programming and beyond with our interactive learning platform. 
              From fundamentals to advanced concepts, we make programming accessible to everyone.
            </p>
            
            {/* Social Media Links */}
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com/ceetorial" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-neutral-800 rounded-lg hover:bg-primary-600 transition-colors"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://instagram.com/ceetorial" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-neutral-800 rounded-lg hover:bg-primary-600 transition-colors"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://linkedin.com/company/ceetorial" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-neutral-800 rounded-lg hover:bg-primary-600 transition-colors"
                aria-label="Follow us on LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://twitter.com/ceetorial" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-neutral-800 rounded-lg hover:bg-primary-600 transition-colors"
                aria-label="Follow us on Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="https://discord.gg/ceetorial" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-neutral-800 rounded-lg hover:bg-primary-600 transition-colors"
                aria-label="Join our Discord community"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Learning Section */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Learning</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/courses" className="text-neutral-300 hover:text-primary-400 transition-colors">
                  Courses
                </Link>
              </li>
              <li>
                <Link to="/compare" className="text-neutral-300 hover:text-primary-400 transition-colors">
                  Language Comparison
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-neutral-300 hover:text-primary-400 transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Section */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Support</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/faq" className="text-neutral-300 hover:text-primary-400 transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/help" className="text-neutral-300 hover:text-primary-400 transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-neutral-300 hover:text-primary-400 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/community" className="text-neutral-300 hover:text-primary-400 transition-colors">
                  Community
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Section */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-neutral-300 hover:text-primary-400 transition-colors">
                  About Ceetorial
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-neutral-300 hover:text-primary-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-neutral-300 hover:text-primary-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-neutral-300 hover:text-primary-400 transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/press" className="text-neutral-300 hover:text-primary-400 transition-colors">
                  Press Kit
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-neutral-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-neutral-400 text-sm mb-4 md:mb-0">
              © 2025 Ceetorial. All rights reserved. Designed by Cyberfield Services.
            </div>
            <div className="flex items-center space-x-6 text-sm text-neutral-400">
              <Link to="/sitemap" className="hover:text-primary-400 transition-colors">
                Sitemap
              </Link>
              <Link to="/accessibility" className="hover:text-primary-400 transition-colors">
                Accessibility
              </Link>
              <Link to="/cookies" className="hover:text-primary-400 transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;