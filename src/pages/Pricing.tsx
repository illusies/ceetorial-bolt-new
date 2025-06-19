import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import AuthModal from '../components/AuthModal';
import { Check, Star, Zap, Crown, Loader2, Mail, Phone, Building } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import { useSubscription } from '../hooks/useSubscription';
import { products } from '../stripe-config';

const Pricing: React.FC = () => {
  const { user } = useAuth();
  const { subscription } = useSubscription();
  const [loading, setLoading] = useState<string | null>(null);
  const [authModal, setAuthModal] = useState<{ isOpen: boolean; mode: 'login' | 'signup' }>({
    isOpen: false,
    mode: 'signup'
  });
  const [showContactSales, setShowContactSales] = useState(false);
  const [showFreeTierActivated, setShowFreeTierActivated] = useState(false);

  const openAuthModal = (mode: 'login' | 'signup') => {
    setAuthModal({ isOpen: true, mode });
  };

  const closeAuthModal = () => {
    setAuthModal({ isOpen: false, mode: 'signup' });
  };

  const handleFreeTierClick = () => {
    if (user) {
      // User is already logged in, show activation message
      setShowFreeTierActivated(true);
      setTimeout(() => setShowFreeTierActivated(false), 3000);
    } else {
      // User not logged in, show signup modal
      openAuthModal('signup');
    }
  };

  const handleContactSales = () => {
    setShowContactSales(true);
  };

  const handlePurchase = async (priceId: string, mode: 'payment' | 'subscription') => {
    if (!user) {
      // Redirect to sign up if not authenticated
      openAuthModal('signup');
      return;
    }

    setLoading(priceId);

    try {
      const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/stripe-checkout`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          price_id: priceId,
          success_url: `${window.location.origin}/success`,
          cancel_url: `${window.location.origin}/pricing`,
          mode,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to create checkout session');
      }

      // Redirect to Stripe Checkout
      window.location.href = data.url;
    } catch (error: any) {
      console.error('Checkout error:', error);
      alert('Failed to start checkout process. Please try again.');
    } finally {
      setLoading(null);
    }
  };

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
      ],
      buttonText: 'Get Started Free',
      onClick: handleFreeTierClick
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
      priceId: products.find(p => p.name.includes('Pro'))?.priceId,
      mode: products.find(p => p.name.includes('Pro'))?.mode || 'subscription',
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
      ],
      buttonText: 'Start Pro Plan'
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
      ],
      buttonText: 'Contact Sales',
      onClick: handleContactSales
    }
  ];

  // Contact Sales Modal
  const ContactSalesModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-neutral-800 rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="p-8">
          <div className="text-center mb-8">
            <div className="inline-flex p-4 bg-purple-100 dark:bg-purple-900 rounded-full mb-4">
              <Building className="h-8 w-8 text-purple-600" />
            </div>
            <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-2">
              Enterprise Solutions
            </h2>
            <p className="text-neutral-600 dark:text-neutral-300">
              Let's discuss how Ceetorial can transform your team's learning experience
            </p>
          </div>

          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                  First Name *
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-neutral-700 dark:text-white"
                  placeholder="John"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                  Last Name *
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-neutral-700 dark:text-white"
                  placeholder="Doe"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                Work Email *
              </label>
              <input
                type="email"
                required
                className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-neutral-700 dark:text-white"
                placeholder="john@company.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                Company Name *
              </label>
              <input
                type="text"
                required
                className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-neutral-700 dark:text-white"
                placeholder="Acme Corporation"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-neutral-700 dark:text-white"
                  placeholder="+1 (555) 123-4567"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                  Team Size *
                </label>
                <select
                  required
                  className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-neutral-700 dark:text-white"
                >
                  <option value="">Select team size</option>
                  <option value="1-10">1-10 people</option>
                  <option value="11-50">11-50 people</option>
                  <option value="51-200">51-200 people</option>
                  <option value="201-1000">201-1000 people</option>
                  <option value="1000+">1000+ people</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                Tell us about your needs
              </label>
              <textarea
                rows={4}
                className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-neutral-700 dark:text-white"
                placeholder="What programming languages is your team interested in? What are your learning goals?"
              />
            </div>

            <div className="flex items-center space-x-3">
              <input
                type="checkbox"
                id="marketing-consent"
                className="w-4 h-4 text-purple-600 bg-neutral-100 border-neutral-300 rounded focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-neutral-800 focus:ring-2 dark:bg-neutral-700 dark:border-neutral-600"
              />
              <label htmlFor="marketing-consent" className="text-sm text-neutral-600 dark:text-neutral-300">
                I agree to receive marketing communications from Ceetorial
              </label>
            </div>

            <div className="flex space-x-4">
              <button
                type="button"
                onClick={() => setShowContactSales(false)}
                className="flex-1 px-6 py-3 border border-neutral-300 dark:border-neutral-600 text-neutral-700 dark:text-neutral-300 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-semibold"
              >
                Request Demo
              </button>
            </div>
          </form>

          <div className="mt-8 pt-6 border-t border-neutral-200 dark:border-neutral-700">
            <div className="grid md:grid-cols-2 gap-6 text-center">
              <div>
                <Mail className="h-6 w-6 text-purple-600 mx-auto mb-2" />
                <p className="text-sm font-medium text-neutral-900 dark:text-white">Email Us</p>
                <p className="text-sm text-neutral-600 dark:text-neutral-300">enterprise@ceetorial.com</p>
              </div>
              <div>
                <Phone className="h-6 w-6 text-purple-600 mx-auto mb-2" />
                <p className="text-sm font-medium text-neutral-900 dark:text-white">Call Us</p>
                <p className="text-sm text-neutral-600 dark:text-neutral-300">+1 (555) 123-4567</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Free Tier Activated Modal
  const FreeTierActivatedModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-neutral-800 rounded-2xl shadow-2xl p-8 max-w-md w-full text-center">
        <div className="inline-flex p-4 bg-secondary-100 dark:bg-secondary-900 rounded-full mb-4">
          <Check className="h-8 w-8 text-secondary-600" />
        </div>
        <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-2">
          Free Tier Activated!
        </h2>
        <p className="text-neutral-600 dark:text-neutral-300 mb-6">
          You're all set to start learning C programming with our free tier. 
          Access your dashboard to begin your coding journey!
        </p>
        <button
          onClick={() => setShowFreeTierActivated(false)}
          className="w-full px-6 py-3 bg-secondary-600 text-white rounded-lg hover:bg-secondary-700 transition-colors font-semibold"
        >
          Go to Dashboard
        </button>
      </div>
    </div>
  );

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
          {subscription && (
            <div className="mt-4 inline-flex items-center px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-medium">
              Current Plan: {subscription.subscription_status === 'active' ? 'Pro' : 'Free'}
            </div>
          )}
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
                onClick={() => {
                  if (plan.onClick) {
                    plan.onClick();
                  } else if (plan.priceId && plan.mode) {
                    handlePurchase(plan.priceId, plan.mode);
                  }
                }}
                disabled={loading === plan.priceId}
                className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2 ${
                  plan.popular
                    ? 'bg-primary-600 text-white hover:bg-primary-700 hover:scale-105'
                    : 'bg-neutral-100 dark:bg-neutral-700 text-neutral-900 dark:text-white hover:bg-neutral-200 dark:hover:bg-neutral-600'
                }`}
              >
                {loading === plan.priceId ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    <span>Processing...</span>
                  </>
                ) : (
                  <span>{plan.buttonText}</span>
                )}
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
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-300 mb-3">
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

      {/* Modals */}
      <AuthModal
        isOpen={authModal.isOpen}
        onClose={closeAuthModal}
        mode={authModal.mode}
        onModeChange={(mode) => setAuthModal({ isOpen: true, mode })}
      />

      {showContactSales && <ContactSalesModal />}
      {showFreeTierActivated && <FreeTierActivatedModal />}
    </div>
  );
};

export default Pricing;