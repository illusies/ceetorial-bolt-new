import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import { 
  Users, 
  MessageCircle, 
  Trophy, 
  Calendar,
  Star,
  Code,
  Heart,
  Zap,
  ArrowRight,
  User,
  Clock
} from 'lucide-react';

const Community: React.FC = () => {
  const communityStats = [
    { label: 'Active Members', value: '50K+', icon: Users },
    { label: 'Daily Discussions', value: '1.2K', icon: MessageCircle },
    { label: 'Code Solutions Shared', value: '25K+', icon: Code },
    { label: 'Community Events', value: '150+', icon: Calendar }
  ];

  const recentDiscussions = [
    {
      title: 'Best practices for memory management in C',
      author: 'Sarah Chen',
      replies: 23,
      time: '2 hours ago',
      category: 'C Programming',
      avatar: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=100'
    },
    {
      title: 'Transitioning from C++ to Rust: What to expect?',
      author: 'Marcus Rodriguez',
      replies: 18,
      time: '4 hours ago',
      category: 'Language Comparison',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100'
    },
    {
      title: 'Weekly Challenge: Implement a Binary Search Tree',
      author: 'Community Team',
      replies: 45,
      time: '1 day ago',
      category: 'Challenges',
      avatar: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=100'
    },
    {
      title: 'Debugging techniques for beginners',
      author: 'Alex Kim',
      replies: 31,
      time: '2 days ago',
      category: 'Tips & Tricks',
      avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=100'
    }
  ];

  const upcomingEvents = [
    {
      title: 'C Programming Fundamentals Workshop',
      date: 'Jan 15, 2025',
      time: '2:00 PM PST',
      attendees: 156,
      type: 'Workshop'
    },
    {
      title: 'Monthly Code Review Session',
      date: 'Jan 20, 2025',
      time: '11:00 AM PST',
      attendees: 89,
      type: 'Code Review'
    },
    {
      title: 'Rust vs C++ Performance Comparison',
      date: 'Jan 25, 2025',
      time: '3:00 PM PST',
      attendees: 203,
      type: 'Discussion'
    }
  ];

  const topContributors = [
    {
      name: 'Emily Watson',
      points: 2450,
      badge: 'Expert Mentor',
      avatar: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=100'
    },
    {
      name: 'David Park',
      points: 1890,
      badge: 'Code Master',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100'
    },
    {
      name: 'Lisa Zhang',
      points: 1650,
      badge: 'Helper',
      avatar: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=100'
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900">
      <Navbar variant="app" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex p-4 bg-primary-100 dark:bg-primary-900 rounded-full mb-6">
            <Users className="h-8 w-8 text-primary-600" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white mb-6">
            Join Our Community
          </h1>
          <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
            Connect with fellow programmers, share knowledge, get help, and grow together in our supportive learning community.
          </p>
        </div>

        {/* Community Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {communityStats.map((stat, index) => (
            <div key={index} className="bg-white dark:bg-neutral-800 rounded-xl p-6 text-center">
              <div className="inline-flex p-3 bg-primary-100 dark:bg-primary-900 rounded-xl mb-4">
                <stat.icon className="h-6 w-6 text-primary-600" />
              </div>
              <div className="text-3xl font-bold text-neutral-900 dark:text-white mb-2">{stat.value}</div>
              <div className="text-neutral-600 dark:text-neutral-300">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Recent Discussions */}
          <div className="lg:col-span-2 bg-white dark:bg-neutral-800 rounded-xl p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">Recent Discussions</h2>
              <button className="text-primary-600 hover:text-primary-700 font-medium flex items-center space-x-1">
                <span>View All</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
            
            <div className="space-y-4">
              {recentDiscussions.map((discussion, index) => (
                <div key={index} className="p-4 bg-neutral-50 dark:bg-neutral-700 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-600 transition-colors cursor-pointer">
                  <div className="flex items-start space-x-4">
                    <img 
                      src={discussion.avatar} 
                      alt={discussion.author}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="font-medium text-neutral-900 dark:text-white mb-1">{discussion.title}</h3>
                      <div className="flex items-center space-x-4 text-sm text-neutral-500 dark:text-neutral-400">
                        <span>by {discussion.author}</span>
                        <span>•</span>
                        <span>{discussion.category}</span>
                        <span>•</span>
                        <span>{discussion.replies} replies</span>
                        <span>•</span>
                        <span>{discussion.time}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Top Contributors */}
          <div className="bg-white dark:bg-neutral-800 rounded-xl p-8">
            <h2 className="text-xl font-bold text-neutral-900 dark:text-white mb-6">Top Contributors</h2>
            <div className="space-y-4">
              {topContributors.map((contributor, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="relative">
                    <img 
                      src={contributor.avatar} 
                      alt={contributor.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">{index + 1}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-neutral-900 dark:text-white">{contributor.name}</h3>
                    <div className="flex items-center space-x-2 text-sm">
                      <span className="text-primary-600">{contributor.badge}</span>
                      <span className="text-neutral-500 dark:text-neutral-400">•</span>
                      <span className="text-neutral-500 dark:text-neutral-400">{contributor.points} points</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Community Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white dark:bg-neutral-800 rounded-xl p-8 text-center">
            <div className="inline-flex p-4 bg-blue-100 dark:bg-blue-900 rounded-full mb-6">
              <MessageCircle className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">Discussion Forums</h3>
            <p className="text-neutral-600 dark:text-neutral-300 mb-6">
              Ask questions, share knowledge, and engage in meaningful discussions about programming concepts and best practices.
            </p>
            <button className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold">
              Join Discussions
            </button>
          </div>

          <div className="bg-white dark:bg-neutral-800 rounded-xl p-8 text-center">
            <div className="inline-flex p-4 bg-green-100 dark:bg-green-900 rounded-full mb-6">
              <Trophy className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">Coding Challenges</h3>
            <p className="text-neutral-600 dark:text-neutral-300 mb-6">
              Participate in weekly coding challenges, compete with peers, and improve your problem-solving skills.
            </p>
            <button className="w-full px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold">
              View Challenges
            </button>
          </div>

          <div className="bg-white dark:bg-neutral-800 rounded-xl p-8 text-center">
            <div className="inline-flex p-4 bg-purple-100 dark:bg-purple-900 rounded-full mb-6">
              <Calendar className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">Live Events</h3>
            <p className="text-neutral-600 dark:text-neutral-300 mb-6">
              Attend workshops, webinars, and live coding sessions hosted by industry experts and community leaders.
            </p>
            <button className="w-full px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-semibold">
              See Events
            </button>
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="bg-white dark:bg-neutral-800 rounded-xl p-8 mb-16">
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">Upcoming Events</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="p-6 bg-neutral-50 dark:bg-neutral-700 rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium">
                    {event.type}
                  </span>
                  <div className="flex items-center space-x-1 text-sm text-neutral-500 dark:text-neutral-400">
                    <Users className="h-4 w-4" />
                    <span>{event.attendees}</span>
                  </div>
                </div>
                <h3 className="font-semibold text-neutral-900 dark:text-white mb-2">{event.title}</h3>
                <div className="flex items-center space-x-4 text-sm text-neutral-600 dark:text-neutral-300 mb-4">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{event.time}</span>
                  </div>
                </div>
                <button className="w-full px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium">
                  Register
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Community Guidelines */}
        <div className="bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-4">Community Guidelines</h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
              Our community thrives on respect, collaboration, and shared learning. Here's how we maintain a positive environment for everyone.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="inline-flex p-3 bg-green-100 dark:bg-green-900 rounded-full mb-4">
                <Heart className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-neutral-900 dark:text-white mb-2">Be Respectful</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-300">
                Treat all community members with kindness and respect, regardless of their skill level or background.
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex p-3 bg-blue-100 dark:bg-blue-900 rounded-full mb-4">
                <Zap className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-neutral-900 dark:text-white mb-2">Share Knowledge</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-300">
                Help others learn by sharing your knowledge, experiences, and constructive feedback.
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex p-3 bg-purple-100 dark:bg-purple-900 rounded-full mb-4">
                <Star className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-neutral-900 dark:text-white mb-2">Stay On Topic</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-300">
                Keep discussions relevant to programming, learning, and the Ceetorial platform.
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

export default Community;