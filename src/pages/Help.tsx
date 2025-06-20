import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import { 
  LifeBuoy, 
  Book, 
  MessageCircle, 
  Video,
  FileText,
  Search,
  ArrowRight,
  Mail,
  Phone,
  Clock
} from 'lucide-react';

const Help: React.FC = () => {
  const helpCategories = [
    {
      icon: Book,
      title: 'Getting Started',
      description: 'Learn the basics of using Ceetorial',
      articles: [
        'Creating your first account',
        'Navigating the dashboard',
        'Starting your first course',
        'Using the code editor'
      ]
    },
    {
      icon: Video,
      title: 'Courses & Learning',
      description: 'Everything about our courses and learning features',
      articles: [
        'Course structure and progression',
        'Understanding difficulty levels',
        'Tracking your progress',
        'Earning certificates'
      ]
    },
    {
      icon: MessageCircle,
      title: 'Account & Billing',
      description: 'Manage your account and subscription',
      articles: [
        'Updating your profile',
        'Changing your subscription',
        'Payment and billing issues',
        'Canceling your account'
      ]
    },
    {
      icon: FileText,
      title: 'Technical Issues',
      description: 'Troubleshooting and technical support',
      articles: [
        'Code editor not working',
        'Browser compatibility',
        'Performance issues',
        'Mobile app problems'
      ]
    }
  ];

  const popularArticles = [
    {
      title: 'How to get started with C programming on Ceetorial',
      views: '12.5k views',
      category: 'Getting Started'
    },
    {
      title: 'Understanding the difference between C and C++',
      views: '8.2k views',
      category: 'Courses'
    },
    {
      title: 'Troubleshooting code compilation errors',
      views: '6.8k views',
      category: 'Technical'
    },
    {
      title: 'How to upgrade to Pro subscription',
      views: '5.4k views',
      category: 'Billing'
    },
    {
      title: 'Using the interactive debugger',
      views: '4.9k views',
      category: 'Features'
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900">
      <Navbar variant="app" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex p-4 bg-primary-100 dark:bg-primary-900 rounded-full mb-6">
            <LifeBuoy className="h-8 w-8 text-primary-600" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white mb-6">
            Help Center
          </h1>
          <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
            Find answers, get support, and learn how to make the most of your Ceetorial experience.
          </p>
        </div>

        {/* Search */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-6 w-6 text-neutral-400" />
            <input
              type="text"
              placeholder="Search for help articles, tutorials, and guides..."
              className="w-full pl-12 pr-4 py-4 text-lg border border-neutral-300 dark:border-neutral-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-neutral-800 dark:text-white"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
              Search
            </button>
          </div>
        </div>

        {/* Help Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {helpCategories.map((category, index) => (
            <div key={index} className="bg-white dark:bg-neutral-800 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="inline-flex p-3 bg-primary-100 dark:bg-primary-900 rounded-xl mb-4">
                <category.icon className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-3">{category.title}</h3>
              <p className="text-neutral-600 dark:text-neutral-300 mb-4">{category.description}</p>
              <ul className="space-y-2">
                {category.articles.map((article, articleIndex) => (
                  <li key={articleIndex}>
                    <button className="text-sm text-primary-600 hover:text-primary-700 flex items-center space-x-1">
                      <span>{article}</span>
                      <ArrowRight className="h-3 w-3" />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Popular Articles */}
          <div className="lg:col-span-2 bg-white dark:bg-neutral-800 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">Popular Articles</h2>
            <div className="space-y-4">
              {popularArticles.map((article, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-neutral-50 dark:bg-neutral-700 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-600 transition-colors cursor-pointer">
                  <div>
                    <h3 className="font-medium text-neutral-900 dark:text-white mb-1">{article.title}</h3>
                    <div className="flex items-center space-x-3 text-sm text-neutral-500 dark:text-neutral-400">
                      <span>{article.views}</span>
                      <span>•</span>
                      <span>{article.category}</span>
                    </div>
                  </div>
                  <ArrowRight className="h-5 w-5 text-neutral-400" />
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="space-y-6">
            <div className="bg-white dark:bg-neutral-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full flex items-center space-x-3 p-3 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 rounded-lg hover:bg-primary-100 dark:hover:bg-primary-900/30 transition-colors">
                  <MessageCircle className="h-5 w-5" />
                  <span>Start Live Chat</span>
                </button>
                <button className="w-full flex items-center space-x-3 p-3 bg-neutral-50 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-600 transition-colors">
                  <Mail className="h-5 w-5" />
                  <span>Email Support</span>
                </button>
                <button className="w-full flex items-center space-x-3 p-3 bg-neutral-50 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-600 transition-colors">
                  <Video className="h-5 w-5" />
                  <span>Video Tutorials</span>
                </button>
              </div>
            </div>

            <div className="bg-white dark:bg-neutral-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">Support Hours</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-neutral-500" />
                  <span className="text-neutral-600 dark:text-neutral-300">Monday - Friday: 9 AM - 6 PM PST</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-neutral-500" />
                  <span className="text-neutral-600 dark:text-neutral-300">Saturday: 10 AM - 4 PM PST</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-neutral-500" />
                  <span className="text-neutral-600 dark:text-neutral-300">Sunday: Closed</span>
                </div>
              </div>
              <div className="mt-4 p-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                <p className="text-sm text-green-800 dark:text-green-200">
                  <strong>Pro subscribers</strong> get priority support with faster response times!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Support */}
        <div className="bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-2xl p-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-6">Still Need Help?</h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-8 max-w-2xl mx-auto">
              Our support team is here to help you succeed. Get personalized assistance with your learning journey.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white dark:bg-neutral-800 rounded-xl p-6 text-center">
                <div className="inline-flex p-3 bg-blue-100 dark:bg-blue-900 rounded-full mb-4">
                  <MessageCircle className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-neutral-900 dark:text-white mb-2">Live Chat</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 mb-4">
                  Get instant help from our support team
                </p>
                <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  Start Chat
                </button>
              </div>
              
              <div className="bg-white dark:bg-neutral-800 rounded-xl p-6 text-center">
                <div className="inline-flex p-3 bg-green-100 dark:bg-green-900 rounded-full mb-4">
                  <Mail className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-neutral-900 dark:text-white mb-2">Email Support</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 mb-4">
                  Send us a detailed message
                </p>
                <button className="w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                  Send Email
                </button>
              </div>
              
              <div className="bg-white dark:bg-neutral-800 rounded-xl p-6 text-center">
                <div className="inline-flex p-3 bg-purple-100 dark:bg-purple-900 rounded-full mb-4">
                  <Phone className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="font-semibold text-neutral-900 dark:text-white mb-2">Phone Support</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 mb-4">
                  Talk to our experts directly
                </p>
                <button className="w-full px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                  Call Now
                </button>
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

export default Help;