import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import { 
  Flame, 
  CheckCircle, 
  Lock, 
  Play, 
  Trophy, 
  Clock,
  Star,
  Target,
  Code,
  Calendar,
  Award,
  TrendingUp
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useAuth } from '../hooks/useAuth';

interface DailyChallenge {
  id: string;
  title: string;
  description: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  language: string;
  points: number;
  timeLimit: number; // in minutes
  code: string;
  expectedOutput: string;
  hints: string[];
}

const DailyChallenge: React.FC = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [challenge, setChallenge] = useState<DailyChallenge | null>(null);
  const [completed, setCompleted] = useState(false);
  const [countdown, setCountdown] = useState<string>('');
  const [starting, setStarting] = useState(false);
  const [streak, setStreak] = useState<number>(0);

  // Mock daily challenges
  const dailyChallenges: DailyChallenge[] = [
    {
      id: 'daily-001',
      title: 'Array Sum Calculator',
      description: 'Write a C program that calculates the sum of all elements in an array of integers.',
      difficulty: 'Beginner',
      language: 'C',
      points: 50,
      timeLimit: 30,
      code: `#include <stdio.h>

int main() {
    int arr[] = {1, 2, 3, 4, 5};
    int size = 5;
    int sum = 0;
    
    // Your code here: Calculate the sum of array elements
    
    printf("Sum: %d\\n", sum);
    return 0;
}`,
      expectedOutput: 'Sum: 15',
      hints: [
        'Use a for loop to iterate through the array',
        'Add each element to the sum variable',
        'Remember that array indexing starts at 0'
      ]
    },
    {
      id: 'daily-002',
      title: 'Palindrome Checker',
      description: 'Create a function that checks if a given string is a palindrome (reads the same forwards and backwards).',
      difficulty: 'Intermediate',
      language: 'C',
      points: 75,
      timeLimit: 45,
      code: `#include <stdio.h>
#include <string.h>
#include <ctype.h>

int isPalindrome(char str[]) {
    // Your code here: Check if string is palindrome
    return 0; // Return 1 if palindrome, 0 if not
}

int main() {
    char word[] = "racecar";
    
    if (isPalindrome(word)) {
        printf("%s is a palindrome\\n", word);
    } else {
        printf("%s is not a palindrome\\n", word);
    }
    
    return 0;
}`,
      expectedOutput: 'racecar is a palindrome',
      hints: [
        'Compare characters from both ends moving inward',
        'Use strlen() to get the string length',
        'Consider using tolower() for case-insensitive comparison'
      ]
    },
    {
      id: 'daily-003',
      title: 'Fibonacci Sequence',
      description: 'Generate the first n numbers in the Fibonacci sequence using recursion.',
      difficulty: 'Advanced',
      language: 'C',
      points: 100,
      timeLimit: 60,
      code: `#include <stdio.h>

int fibonacci(int n) {
    // Your code here: Implement recursive Fibonacci
    return 0;
}

int main() {
    int n = 10;
    
    printf("First %d Fibonacci numbers:\\n", n);
    for (int i = 0; i < n; i++) {
        printf("%d ", fibonacci(i));
    }
    printf("\\n");
    
    return 0;
}`,
      expectedOutput: 'First 10 Fibonacci numbers:\n0 1 1 2 3 5 8 13 21 34',
      hints: [
        'Base cases: fibonacci(0) = 0, fibonacci(1) = 1',
        'Recursive case: fibonacci(n) = fibonacci(n-1) + fibonacci(n-2)',
        'Consider memoization for optimization'
      ]
    }
  ];

  useEffect(() => {
    const fetchChallenge = async () => {
      // Simulate API call
      setTimeout(() => {
        const today = new Date().getDay(); // Use day of week to cycle challenges
        const todaysChallenge = dailyChallenges[today % dailyChallenges.length];
        setChallenge(todaysChallenge);
        
        // Check if user completed today's challenge (mock)
        const completedToday = localStorage.getItem(`challenge_${todaysChallenge.id}_${user?.id}`);
        setCompleted(!!completedToday);
        
        // Get user streak (mock)
        const userStreak = localStorage.getItem(`streak_${user?.id}`);
        setStreak(userStreak ? parseInt(userStreak) : 0);
        
        setLoading(false);
      }, 1000);
    };

    fetchChallenge();
    
    // Update countdown every second
    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  }, [user]);

  const updateCountdown = () => {
    const now = new Date();
    const tomorrow = new Date();
    tomorrow.setHours(24, 0, 0, 0);
    const diff = tomorrow.getTime() - now.getTime();
    
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    setCountdown(`${hours}h ${minutes}m ${seconds}s`);
  };

  const handleStart = async () => {
    if (!user) {
      // Redirect to login if not authenticated
      navigate('/');
      return;
    }

    if (!challenge) return;

    setStarting(true);
    
    // Simulate starting the challenge
    setTimeout(() => {
      navigate(`/learn/c?challenge=daily&challengeId=${challenge.id}`);
      setStarting(false);
    }, 1000);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'Advanced': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      default: return 'bg-neutral-100 text-neutral-800 dark:bg-neutral-700 dark:text-neutral-200';
    }
  };

  const getStreakBadge = (streakCount: number) => {
    if (streakCount >= 30) return { name: 'Diamond', color: 'text-purple-600', icon: '💎' };
    if (streakCount >= 14) return { name: 'Gold', color: 'text-yellow-600', icon: '🥇' };
    if (streakCount >= 7) return { name: 'Silver', color: 'text-gray-600', icon: '🥈' };
    if (streakCount >= 3) return { name: 'Bronze', color: 'text-orange-600', icon: '🥉' };
    return null;
  };

  const streakBadge = getStreakBadge(streak);

  if (loading) {
    return (
      <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900">
        <Navbar variant="app" />
        <div className="flex items-center justify-center h-96">
          <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary-600 mx-auto mb-4"></div>
            <p className="text-neutral-600 dark:text-neutral-300">Loading today's challenge...</p>
          </div>
        </div>
      </div>
    );
  }

  if (!challenge) {
    return (
      <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900">
        <Navbar variant="app" />
        <div className="flex items-center justify-center h-96">
          <div className="text-center">
            <Target className="h-16 w-16 text-neutral-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-2">No Challenge Available</h2>
            <p className="text-neutral-600 dark:text-neutral-300">Please check back later for today's challenge.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900">
      <Navbar variant="app" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex p-4 bg-primary-100 dark:bg-primary-900 rounded-full mb-6">
            <Target className="h-8 w-8 text-primary-600" />
          </div>
          <h1 className="text-4xl font-bold text-neutral-900 dark:text-white mb-4">
            Daily Challenge
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-300">
            Test your programming skills with our daily coding challenge
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {/* Streak */}
          <motion.div 
            className="bg-white dark:bg-neutral-800 rounded-xl p-6 text-center border border-neutral-200 dark:border-neutral-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center space-x-2 text-orange-500 mb-2">
              <Flame className="h-6 w-6" />
              <span className="text-2xl font-bold">{streak}</span>
            </div>
            <p className="text-neutral-600 dark:text-neutral-300 font-medium">Day Streak</p>
            {streakBadge && (
              <div className="mt-2">
                <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${streakBadge.color} bg-opacity-10`}>
                  {streakBadge.icon} {streakBadge.name} Badge
                </span>
              </div>
            )}
          </motion.div>

          {/* Points */}
          <motion.div 
            className="bg-white dark:bg-neutral-800 rounded-xl p-6 text-center border border-neutral-200 dark:border-neutral-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flex items-center justify-center space-x-2 text-yellow-500 mb-2">
              <Star className="h-6 w-6" />
              <span className="text-2xl font-bold">{challenge.points}</span>
            </div>
            <p className="text-neutral-600 dark:text-neutral-300 font-medium">Points Available</p>
          </motion.div>

          {/* Time Limit */}
          <motion.div 
            className="bg-white dark:bg-neutral-800 rounded-xl p-6 text-center border border-neutral-200 dark:border-neutral-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center justify-center space-x-2 text-blue-500 mb-2">
              <Clock className="h-6 w-6" />
              <span className="text-2xl font-bold">{challenge.timeLimit}</span>
            </div>
            <p className="text-neutral-600 dark:text-neutral-300 font-medium">Minutes</p>
          </motion.div>
        </div>

        {/* Main Challenge Card */}
        <motion.div 
          className="bg-white dark:bg-neutral-800 rounded-2xl border border-neutral-200 dark:border-neutral-700 overflow-hidden shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="p-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-xl">
                  <Code className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">{challenge.title}</h2>
                  <div className="flex items-center space-x-3 mt-1">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(challenge.difficulty)}`}>
                      {challenge.difficulty}
                    </span>
                    <span className="text-sm text-neutral-500 dark:text-neutral-400">{challenge.language}</span>
                  </div>
                </div>
              </div>
              
              {completed && (
                <div className="flex items-center space-x-2 text-green-600">
                  <CheckCircle className="h-6 w-6" />
                  <span className="font-medium">Completed</span>
                </div>
              )}
            </div>

            <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-6">
              {challenge.description}
            </p>

            {/* Code Preview */}
            <div className="bg-neutral-900 rounded-lg p-4 mb-6">
              <div className="flex items-center justify-between mb-3">
                <span className="text-neutral-400 text-sm font-mono">challenge.c</span>
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
              </div>
              <pre className="text-sm text-neutral-300 font-mono overflow-x-auto">
                <code>{challenge.code.substring(0, 200)}...</code>
              </pre>
            </div>

            {/* Hints */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-3">Hints:</h3>
              <ul className="space-y-2">
                {challenge.hints.map((hint, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <span className="text-primary-600 font-bold">•</span>
                    <span className="text-neutral-600 dark:text-neutral-300">{hint}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action Button */}
            <div className="text-center">
              {completed ? (
                <div className="space-y-4">
                  <div className="flex items-center justify-center space-x-2 text-green-600 text-lg font-medium">
                    <CheckCircle className="h-6 w-6" />
                    <span>Challenge Completed!</span>
                  </div>
                  <button 
                    onClick={() => navigate('/learn/c')}
                    className="px-6 py-3 bg-neutral-600 text-white rounded-lg hover:bg-neutral-700 transition-colors font-semibold"
                  >
                    Continue Learning
                  </button>
                </div>
              ) : (
                <button 
                  onClick={handleStart}
                  disabled={starting}
                  className="px-8 py-4 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2 mx-auto"
                >
                  {starting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Starting...</span>
                    </>
                  ) : (
                    <>
                      <Play className="h-5 w-5" />
                      <span>Start Challenge</span>
                    </>
                  )}
                </button>
              )}
            </div>
          </div>
        </motion.div>

        {/* Countdown Timer */}
        <motion.div 
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-neutral-100 dark:bg-neutral-800 rounded-lg">
            <Calendar className="h-4 w-4 text-neutral-500" />
            <span className="text-sm text-neutral-600 dark:text-neutral-300">
              Next challenge in {countdown}
            </span>
          </div>
        </motion.div>

        {/* Additional Info */}
        <motion.div 
          className="mt-12 grid md:grid-cols-2 gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="bg-white dark:bg-neutral-800 rounded-xl p-6 border border-neutral-200 dark:border-neutral-700">
            <div className="flex items-center space-x-3 mb-4">
              <Trophy className="h-6 w-6 text-yellow-500" />
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">How It Works</h3>
            </div>
            <ul className="space-y-2 text-neutral-600 dark:text-neutral-300">
              <li>• New challenge available every day at midnight</li>
              <li>• Complete within the time limit to earn points</li>
              <li>• Maintain your streak for bonus rewards</li>
              <li>• Challenges increase in difficulty throughout the week</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-neutral-800 rounded-xl p-6 border border-neutral-200 dark:border-neutral-700">
            <div className="flex items-center space-x-3 mb-4">
              <TrendingUp className="h-6 w-6 text-green-500" />
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">Streak Rewards</h3>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-neutral-600 dark:text-neutral-300">3 days</span>
                <span className="text-orange-600">🥉 Bronze Badge</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-neutral-600 dark:text-neutral-300">7 days</span>
                <span className="text-gray-600">🥈 Silver Badge</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-neutral-600 dark:text-neutral-300">14 days</span>
                <span className="text-yellow-600">🥇 Gold Badge</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-neutral-600 dark:text-neutral-300">30 days</span>
                <span className="text-purple-600">💎 Diamond Badge</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default DailyChallenge;