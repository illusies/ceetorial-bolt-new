import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import { HelpCircle, ChevronDown, ChevronUp, Search } from 'lucide-react';

const FAQ: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      category: 'Getting Started',
      questions: [
        {
          question: 'What is Ceetorial and how does it work?',
          answer: 'Ceetorial is an interactive programming education platform that teaches C programming and other languages through hands-on coding exercises, side-by-side language comparisons, and real-world projects. Our platform features an integrated code editor, instant feedback, and personalized learning paths.'
        },
        {
          question: 'Do I need any programming experience to start?',
          answer: 'No! Ceetorial is designed for learners of all levels. Our C fundamentals course starts from the very basics, assuming no prior programming knowledge. We guide you through concepts step-by-step with plenty of practice exercises.'
        },
        {
          question: 'What programming languages can I learn?',
          answer: 'We currently offer courses in C, C++, Rust, Go, Python, JavaScript, Java, Swift, Kotlin, C#, Carbon, Objective-C, and Mojo. Our platform specializes in showing how concepts translate between different languages.'
        },
        {
          question: 'How is Ceetorial different from other coding platforms?',
          answer: 'Ceetorial focuses on comparative learning, showing how the same concepts work across different programming languages. We also emphasize systems programming fundamentals starting with C, which gives you a deeper understanding of how computers work.'
        }
      ]
    },
    {
      category: 'Courses & Learning',
      questions: [
        {
          question: 'How long does it take to complete a course?',
          answer: 'Course duration varies by language and your pace. Our C fundamentals course typically takes 4-6 weeks with 1-2 hours of study per day. Advanced courses may take 8-12 weeks. You can learn at your own pace with no time pressure.'
        },
        {
          question: 'Can I download course materials for offline study?',
          answer: 'Pro subscribers can download course materials, code examples, and reference guides for offline study. Free users have access to online materials only.'
        },
        {
          question: 'Do you provide certificates upon completion?',
          answer: 'Yes! Pro subscribers receive downloadable certificates upon completing courses. These certificates include verification codes and can be shared on LinkedIn or included in your portfolio.'
        },
        {
          question: 'Can I track my learning progress?',
          answer: 'Absolutely! Our platform tracks your progress through each course, shows completion percentages, time spent learning, and achievements earned. You can view detailed analytics in your dashboard.'
        }
      ]
    },
    {
      category: 'Subscription & Billing',
      questions: [
        {
          question: 'What\'s included in the free plan?',
          answer: 'The free plan includes access to C fundamentals, basic code editor, 5 practice challenges per month, community forum access, and progress tracking. It\'s perfect for getting started with programming.'
        },
        {
          question: 'What additional features do I get with Pro?',
          answer: 'Pro subscribers get access to all programming languages, unlimited practice challenges, advanced code editor with IntelliSense, side-by-side comparisons, debugging tools, personalized learning paths, priority support, and downloadable certificates.'
        },
        {
          question: 'Can I cancel my subscription anytime?',
          answer: 'Yes, you can cancel your subscription at any time from your account settings. Your access will continue until the end of your current billing period, and you won\'t be charged again.'
        },
        {
          question: 'Do you offer student discounts?',
          answer: 'Yes! Students with a valid .edu email address can get 50% off the Pro plan. Contact our support team with your student ID for verification and discount application.'
        },
        {
          question: 'What payment methods do you accept?',
          answer: 'We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for Enterprise plans. All payments are processed securely through Stripe.'
        }
      ]
    },
    {
      category: 'Technical Support',
      questions: [
        {
          question: 'The code editor isn\'t working properly. What should I do?',
          answer: 'First, try refreshing your browser and clearing your cache. Make sure you\'re using a supported browser (Chrome, Firefox, Safari, Edge). If the problem persists, contact our support team with details about your browser and operating system.'
        },
        {
          question: 'Can I use Ceetorial on mobile devices?',
          answer: 'Yes! Ceetorial is fully responsive and works on tablets and smartphones. However, for the best coding experience, we recommend using a desktop or laptop with a physical keyboard.'
        },
        {
          question: 'My code runs locally but not on Ceetorial. Why?',
          answer: 'Our online compiler has some limitations compared to local development environments. Make sure you\'re not using platform-specific libraries or features. If you believe there\'s an issue with our compiler, please report it to our support team.'
        },
        {
          question: 'How do I reset my password?',
          answer: 'Click the "Forgot Password" link on the login page and enter your email address. We\'ll send you a password reset link. If you don\'t receive the email within a few minutes, check your spam folder.'
        }
      ]
    },
    {
      category: 'Community & Support',
      questions: [
        {
          question: 'How can I get help when I\'m stuck on a problem?',
          answer: 'You can ask questions in our community forum, where other learners and instructors can help. Pro subscribers also get priority email support. We also have extensive documentation and code examples for reference.'
        },
        {
          question: 'Can I contribute to course content or suggest improvements?',
          answer: 'We welcome feedback and suggestions! You can submit ideas through our feedback form or community forum. Experienced developers can also apply to become community moderators or content contributors.'
        },
        {
          question: 'Is there a way to connect with other learners?',
          answer: 'Yes! Our community forum allows you to connect with other learners, share projects, ask questions, and participate in coding challenges. We also host virtual meetups and study groups.'
        },
        {
          question: 'How quickly do you respond to support requests?',
          answer: 'Free users typically receive responses within 48-72 hours. Pro subscribers get priority support with responses within 24 hours. Enterprise customers have dedicated support with even faster response times.'
        }
      ]
    }
  ];

  const filteredFAQs = faqs.map(category => ({
    ...category,
    questions: category.questions.filter(
      q => q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
           q.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900">
      <Navbar variant="app" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex p-4 bg-primary-100 dark:bg-primary-900 rounded-full mb-6">
            <HelpCircle className="h-8 w-8 text-primary-600" />
          </div>
          <h1 className="text-4xl font-bold text-neutral-900 dark:text-white mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-300">
            Find answers to common questions about Ceetorial, our courses, and platform features.
          </p>
        </div>

        {/* Search */}
        <div className="relative mb-8">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-neutral-400" />
          <input
            type="text"
            placeholder="Search FAQs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-neutral-800 dark:text-white"
          />
        </div>

        {/* FAQ Categories */}
        <div className="space-y-8">
          {filteredFAQs.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white dark:bg-neutral-800 rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-6">
                {category.category}
              </h2>
              
              <div className="space-y-4">
                {category.questions.map((faq, faqIndex) => {
                  const globalIndex = categoryIndex * 100 + faqIndex;
                  const isOpen = openItems.includes(globalIndex);
                  
                  return (
                    <div key={faqIndex} className="border border-neutral-200 dark:border-neutral-700 rounded-lg">
                      <button
                        onClick={() => toggleItem(globalIndex)}
                        className="w-full flex items-center justify-between p-4 text-left hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-colors"
                      >
                        <span className="font-medium text-neutral-900 dark:text-white pr-4">
                          {faq.question}
                        </span>
                        {isOpen ? (
                          <ChevronUp className="h-5 w-5 text-neutral-500 flex-shrink-0" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-neutral-500 flex-shrink-0" />
                        )}
                      </button>
                      
                      {isOpen && (
                        <div className="px-4 pb-4">
                          <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Contact Support */}
        <div className="mt-12 bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
            Still have questions?
          </h2>
          <p className="text-neutral-600 dark:text-neutral-300 mb-6">
            Can't find what you're looking for? Our support team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-semibold">
              Contact Support
            </button>
            <button className="px-6 py-3 border border-neutral-300 dark:border-neutral-600 text-neutral-700 dark:text-neutral-300 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-colors font-semibold">
              Join Community Forum
            </button>
          </div>
        </div>
      </div>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default FAQ;