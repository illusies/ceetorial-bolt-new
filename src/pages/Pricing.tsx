import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import { Check, Star, Zap, Crown } from 'lucide-react';

const Pricing: React.FC = () => {
  const plans = [
    {
      name: 'Free',
      price: '$0',
      period: 'forever',
      description: 'Perfect for getting started with C programming',
      icon: Star,
      color: 'text-secondary-600',
      bgColor: 'bg-secondary-50',
      borderColor: 'border-secondary-200',
      features: [
        'Access to C fundamentals course',
        'Basic code editor',
        '5 practice challenges per month',
        'Community forum access',
        'Progress tracking',
        'Mobile responsive learning'
      ],
      limitations: [
        'Limited to C language only',
        'No advanced features',
        'Community support only'
      ]
    },
    {
      name: 'Pro',
      price: '$19',
      period: 'per month',
      description: 'Unlock all languages and advanced features',
      icon: Zap,
      color: 'text-primary-600',
      bgColor: 'bg-primary-50',
      borderColor: 'border-primary-200',
      popular: true,
      features: [
        'All programming languages (C, C++, Rust, Go, Python, etc.)',
        'Advanced code editor with IntelliSense',
        'Unlimited practice challenges',
        'Side-by-side language comparisons',
        'Interactive debugging tools',
        'Personalized learning paths',
        'Priority community support',
        'Downloadable certificates',
        'Offline content access',
        'Advanced progress analytics'
      ]
    },
    {
      name: 'Enterprise',
      price: '$99',
      period: 'per month',
      description: 'For teams and organizations',
      icon: Crown,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
      features: [
        'Everything in Pro',
        'Team management dashboard',
        'Custom learning paths',
        'Advanced analytics and reporting',
        'SSO integration',
        'Dedicated account manager',
        'Custom branding options',
        'API access',
        'Priority technical support',
        'Training sessions for teams'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900">
      <Navbar variant="landing" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white mb-6">
            Choose Your Learning Path
          </h1>
          <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
            Start free and upgrade as you grow. All plans include our core learning features 
            with different levels of access and support.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white dark:bg-neutral-800 rounded-2xl border-2 ${plan.borderColor} p-8 ${
                plan.popular ? 'ring-4 ring-primary-100 dark:ring-primary-900 scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <div className={`inline-flex p-3 rounded-xl ${plan.bgColor} mb-4`}>
                  <plan.icon className={`h-8 w-8 ${plan.color}`} />
                </div>
                <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-2">{plan.name}</h3>
                <p className="text-neutral-600 dark:text-neutral-300 mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-neutral-900 dark:text-white">{plan.price}</span>
                  <span className="text-neutral-600 dark:text-neutral-300 ml-2">/{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-secondary-600 mt-0.5 flex-shrink-0" />
                    <span className="text-neutral-700 dark:text-neutral-300">{feature}</span>
                  </li>
                ))}
              </ul>

              {plan.limitations && (
                <div className="mb-8">
                  <h4 className="text-sm font-medium text-neutral-500 dark:text-neutral-400 mb-3">Limitations:</h4>
                  <ul className="space-y-2">
                    {plan.limitations.map((limitation, limitIndex) => (
                      <li key={limitIndex} className="text-sm text-neutral-500 dark:text-neutral-400">
                        • {limitation}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <button
                className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-primary-600 text-white hover:bg-primary-700 hover:scale-105'
                    : 'bg-neutral-100 dark:bg-neutral-700 text-neutral-900 dark:text-white hover:bg-neutral-200 dark:hover:bg-neutral-600'
                }`}
              >
                {plan.name === 'Free' ? 'Get Started Free' : `Start ${plan.name} Plan`}
              </button>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="bg-white dark:bg-neutral-800 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-neutral-900 dark:text-white text-center mb-8">
            Frequently Asked Questions
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-3">
                Can I switch plans anytime?
              </h3>
              <p className="text-neutral-600 dark:text-neutral-300">
                Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately, 
                and we'll prorate any billing differences.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-3">
                Is there a free trial for Pro?
              </h3>
              <p className="text-neutral-600 dark:text-neutral-300">
                We offer a 14-day free trial for the Pro plan. No credit card required to start, 
                and you can cancel anytime during the trial period.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-3">
                What payment methods do you accept?
              </h3>
              <p className="text-neutral-600 dark:text-neutral-300">
                We accept all major credit cards, PayPal, and bank transfers for Enterprise plans. 
                All payments are processed securely through Stripe.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-3">
                Do you offer student discounts?
              </h3>
              <p className="text-neutral-600 dark:text-neutral-300">
                Yes! Students with a valid .edu email address can get 50% off the Pro plan. 
                Contact us with your student ID for verification.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default Pricing;