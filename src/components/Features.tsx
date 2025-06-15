import React from 'react';
import { 
  Code, 
  GitCompare, 
  Play, 
  Trophy, 
  Users, 
  Smartphone,
  Zap,
  BookOpen,
  Target
} from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: Code,
      title: 'Interactive Code Editor',
      description: 'Write, compile, and run code directly in your browser with syntax highlighting and intelligent autocomplete.',
      color: 'text-primary-600',
      bgColor: 'bg-primary-50',
    },
    {
      icon: GitCompare,
      title: 'Side-by-Side Comparisons',
      description: 'Compare syntax and concepts across C, C++, Rust, Go, Python, and more to understand language evolution.',
      color: 'text-secondary-600',
      bgColor: 'bg-secondary-50',
    },
    {
      icon: Play,
      title: 'Hands-on Challenges',
      description: 'Practice with real coding challenges that adapt to your skill level and provide instant feedback.',
      color: 'text-accent-600',
      bgColor: 'bg-accent-50',
    },
    {
      icon: Trophy,
      title: 'Gamified Learning',
      description: 'Earn points, unlock achievements, and track your progress as you master each language.',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50',
    },
    {
      icon: Users,
      title: 'Community Learning',
      description: 'Join discussions, share solutions, and learn from other developers in our active community.',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
    },
    {
      icon: Smartphone,
      title: 'Mobile Responsive',
      description: 'Learn anywhere, anytime with our fully responsive design that works on all devices.',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-medium mb-4">
            <Zap className="h-4 w-4 mr-2" />
            Powerful Features
          </div>
          <h2 className="text-4xl font-bold text-neutral-900 mb-4">
            Everything You Need to Master Programming
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Our platform combines the best of interactive learning, practical coding, and community support 
            to help you become a confident programmer.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl border border-neutral-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`inline-flex p-3 rounded-xl ${feature.bgColor} mb-4 group-hover:scale-110 transition-transform`}>
                <feature.icon className={`h-6 w-6 ${feature.color}`} />
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">{feature.title}</h3>
              <p className="text-neutral-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Additional Feature Highlights */}
        <div className="mt-20 grid lg:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="inline-flex p-4 bg-primary-100 rounded-full mb-4">
              <Target className="h-8 w-8 text-primary-600" />
            </div>
            <h3 className="text-2xl font-bold text-neutral-900 mb-2">Personalized Learning</h3>
            <p className="text-neutral-600">
              Adaptive curriculum that adjusts to your learning pace and style, ensuring optimal progress.
            </p>
          </div>
          
          <div className="text-center">
            <div className="inline-flex p-4 bg-secondary-100 rounded-full mb-4">
              <BookOpen className="h-8 w-8 text-secondary-600" />
            </div>
            <h3 className="text-2xl font-bold text-neutral-900 mb-2">Comprehensive Content</h3>
            <p className="text-neutral-600">
              From basic syntax to advanced concepts, covering everything you need to know about each language.
            </p>
          </div>
          
          <div className="text-center">
            <div className="inline-flex p-4 bg-accent-100 rounded-full mb-4">
              <Zap className="h-8 w-8 text-accent-600" />
            </div>
            <h3 className="text-2xl font-bold text-neutral-900 mb-2">Instant Feedback</h3>
            <p className="text-neutral-600">
              Get immediate feedback on your code with detailed explanations and optimization suggestions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;