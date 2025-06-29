import React from 'react';
import Navbar from '../components/Navbar';
import LanguageCard from '../components/LanguageCard';
import { 
  TrendingUp, 
  Clock, 
  Award, 
  Target,
  BookOpen,
  Code,
  Users,
  Zap
} from 'lucide-react';
import { useAuth } from '../hooks/useAuth';

const Dashboard: React.FC = () => {
  const { user } = useAuth();

  // Extract first name from user data
  const getFirstName = () => {
    if (!user) return 'Developer';
    
    // Try to get name from user metadata first
    if (user.user_metadata?.name) {
      return user.user_metadata.name.split(' ')[0];
    }
    
    // Try to get name from app metadata
    if (user.app_metadata?.name) {
      return user.app_metadata.name.split(' ')[0];
    }
    
    // Fallback to email username
    if (user.email) {
      return user.email.split('@')[0];
    }
    
    return 'Developer';
  };

  const languages = [
    {
      name: 'C Programming',
      slug: 'c',
      description: 'Master the fundamentals of systems programming with C. Learn memory management, pointers, and low-level concepts.',
      difficulty: 'Beginner' as const,
      progress: 0,
      totalLessons: 24,
      completedLessons: 0,
      color: 'bg-blue-500',
      icon: 'C',
    },
    {
      name: 'C++',
      slug: 'cpp',
      description: 'Build on your C knowledge with object-oriented programming, templates, and the Standard Template Library.',
      difficulty: 'Intermediate' as const,
      progress: 0,
      totalLessons: 32,
      completedLessons: 0,
      color: 'bg-purple-500',
      icon: 'C++',
    },
    {
      name: 'Rust',
      slug: 'rust',
      description: 'Learn memory-safe systems programming with Rust\'s ownership model and zero-cost abstractions.',
      difficulty: 'Advanced' as const,
      progress: 0,
      totalLessons: 28,
      completedLessons: 0,
      color: 'bg-orange-500',
      icon: 'Rs',
    },
    {
      name: 'Go',
      slug: 'go',
      description: 'Discover Google\'s approach to simple, concurrent programming with goroutines and channels.',
      difficulty: 'Intermediate' as const,
      progress: 0,
      totalLessons: 20,
      completedLessons: 0,
      color: 'bg-cyan-500',
      icon: 'Go',
    },
    {
      name: 'Python',
      slug: 'python',
      description: 'Explore high-level programming concepts with Python\'s readable syntax and powerful libraries.',
      difficulty: 'Beginner' as const,
      progress: 0,
      totalLessons: 26,
      completedLessons: 0,
      color: 'bg-green-500',
      icon: 'Py',
    },
    {
      name: 'JavaScript',
      slug: 'javascript',
      description: 'Master web development and asynchronous programming with the language of the internet.',
      difficulty: 'Intermediate' as const,
      progress: 0,
      totalLessons: 30,
      completedLessons: 0,
      color: 'bg-yellow-500',
      icon: 'JS',
    },
  ];

  const stats = [
    {
      label: 'Languages Learning',
      value: '0',
      icon: Code,
      change: 'Start your journey',
      color: 'text-primary-600',
    },
    {
      label: 'Total Progress',
      value: '0%',
      icon: TrendingUp,
      change: 'Begin learning',
      color: 'text-secondary-600',
    },
    {
      label: 'Study Streak',
      value: '0 days',
      icon: Award,
      change: 'Start today!',
      color: 'text-accent-600',
    },
    {
      label: 'Time Invested',
      value: '0h',
      icon: Clock,
      change: 'Time to start',
      color: 'text-purple-600',
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-50">
      <Navbar variant="app" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-neutral-900 mb-2">
            Welcome back, {getFirstName()}! 👋
          </h1>
          <p className="text-neutral-600">
            Continue your programming journey. You're doing great!
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl border border-neutral-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <stat.icon className={`h-8 w-8 ${stat.color}`} />
                <span className="text-2xl font-bold text-neutral-900">{stat.value}</span>
              </div>
              <h3 className="font-medium text-neutral-700 mb-1">{stat.label}</h3>
              <p className="text-sm text-neutral-500">{stat.change}</p>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-xl border border-neutral-200 p-6 mb-8">
          <h2 className="text-xl font-semibold text-neutral-900 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="flex items-center space-x-3 p-4 bg-primary-50 text-primary-700 rounded-lg hover:bg-primary-100 transition-colors">
              <Target className="h-5 w-5" />
              <span className="font-medium">Daily Challenge</span>
            </button>
            <button className="flex items-center space-x-3 p-4 bg-secondary-50 text-secondary-700 rounded-lg hover:bg-secondary-100 transition-colors">
              <BookOpen className="h-5 w-5" />
              <span className="font-medium">Continue Learning</span>
            </button>
            <button className="flex items-center space-x-3 p-4 bg-purple-50 text-purple-700 rounded-lg hover:bg-purple-100 transition-colors">
              <Users className="h-5 w-5" />
              <span className="font-medium">Join Discussion</span>
            </button>
          </div>
        </div>

        {/* Languages Grid */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold text-neutral-900">Your Learning Path</h2>
            <button className="flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-medium">
              <span>View All</span>
              <Zap className="h-4 w-4" />
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {languages.map((language, index) => (
              <LanguageCard key={index} language={language} />
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-xl border border-neutral-200 p-6">
          <h2 className="text-xl font-semibold text-neutral-900 mb-4">Recent Activity</h2>
          <div className="text-center py-8">
            <div className="inline-flex p-4 bg-neutral-100 rounded-full mb-4">
              <BookOpen className="h-8 w-8 text-neutral-400" />
            </div>
            <h3 className="text-lg font-medium text-neutral-900 mb-2">No activity yet</h3>
            <p className="text-neutral-600 mb-4">
              Start learning to see your progress and achievements here.
            </p>
            <button className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-semibold">
              Start Your First Course
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;