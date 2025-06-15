import React from 'react';
import Navbar from '../components/Navbar';
import BackToTop from '../components/BackToTop';
import { 
  User, 
  MapPin, 
  Globe, 
  Calendar,
  Award,
  Code,
  TrendingUp,
  BookOpen,
  Target,
  Star
} from 'lucide-react';

const Profile: React.FC = () => {
  const achievements = [
    { name: 'C Fundamentals', icon: '🎯', date: '2024-01-15', description: 'Completed C basics course' },
    { name: 'First Program', icon: '🚀', date: '2024-01-10', description: 'Wrote your first Hello World' },
    { name: 'Pointer Master', icon: '👆', date: '2024-01-20', description: 'Mastered pointer concepts' },
    { name: '7-Day Streak', icon: '🔥', date: '2024-01-25', description: 'Learned for 7 consecutive days' },
    { name: 'Code Reviewer', icon: '👀', date: '2024-01-30', description: 'Helped 5 community members' },
    { name: 'Multi-Language', icon: '🌐', date: '2024-02-05', description: 'Started learning C++' }
  ];

  const stats = [
    { label: 'Languages Learning', value: '3', icon: Code, color: 'text-primary-600' },
    { label: 'Courses Completed', value: '12', icon: BookOpen, color: 'text-secondary-600' },
    { label: 'Challenges Solved', value: '47', icon: Target, color: 'text-accent-600' },
    { label: 'Study Streak', value: '15 days', icon: TrendingUp, color: 'text-purple-600' }
  ];

  const recentActivity = [
    { type: 'course', title: 'Completed "Advanced Pointers" lesson', time: '2 hours ago', icon: BookOpen },
    { type: 'challenge', title: 'Solved "Binary Tree Traversal" challenge', time: '1 day ago', icon: Target },
    { type: 'achievement', title: 'Earned "Pointer Master" badge', time: '2 days ago', icon: Award },
    { type: 'community', title: 'Helped a user with memory allocation', time: '3 days ago', icon: User }
  ];

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900">
      <Navbar variant="app" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Profile Header */}
        <div className="bg-white dark:bg-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-700 p-8 mb-8">
          <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
            <div className="w-24 h-24 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center">
              <User className="h-12 w-12 text-primary-600" />
            </div>
            
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-neutral-900 dark:text-white mb-2">John Doe</h1>
              <p className="text-neutral-600 dark:text-neutral-300 mb-4">
                Passionate C programmer learning new languages and exploring systems programming.
              </p>
              
              <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-500 dark:text-neutral-400">
                <div className="flex items-center space-x-1">
                  <MapPin className="h-4 w-4" />
                  <span>San Francisco, CA</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Globe className="h-4 w-4" />
                  <a href="https://johndoe.dev" className="text-primary-600 hover:text-primary-700">
                    johndoe.dev
                  </a>
                </div>
                <div className="flex items-center space-x-1">
                  <Calendar className="h-4 w-4" />
                  <span>Joined January 2024</span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <div className="text-center">
                <div className="text-2xl font-bold text-neutral-900 dark:text-white">1,247</div>
                <div className="text-sm text-neutral-500 dark:text-neutral-400">XP Points</div>
              </div>
              <div className="w-px h-12 bg-neutral-200 dark:bg-neutral-700 mx-4"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-neutral-900 dark:text-white">Level 8</div>
                <div className="text-sm text-neutral-500 dark:text-neutral-400">Intermediate</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white dark:bg-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-700 p-6 text-center">
                  <stat.icon className={`h-8 w-8 ${stat.color} mx-auto mb-3`} />
                  <div className="text-2xl font-bold text-neutral-900 dark:text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-neutral-500 dark:text-neutral-400">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Recent Activity */}
            <div className="bg-white dark:bg-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-700 p-8">
              <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-6">Recent Activity</h2>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 bg-neutral-50 dark:bg-neutral-700 rounded-lg">
                    <div className="p-2 bg-primary-100 dark:bg-primary-900 rounded-lg">
                      <activity.icon className="h-5 w-5 text-primary-600" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-neutral-900 dark:text-white">{activity.title}</p>
                      <p className="text-sm text-neutral-500 dark:text-neutral-400">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Achievements */}
            <div className="bg-white dark:bg-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-700 p-8">
              <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-6">Achievements</h2>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-neutral-50 dark:bg-neutral-700 rounded-lg">
                    <div className="text-2xl">{achievement.icon}</div>
                    <div className="flex-1">
                      <h3 className="font-medium text-neutral-900 dark:text-white">{achievement.name}</h3>
                      <p className="text-sm text-neutral-500 dark:text-neutral-400">{achievement.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Learning Progress */}
            <div className="bg-white dark:bg-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-700 p-8">
              <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-6">Learning Progress</h2>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">C Programming</span>
                    <span className="text-sm text-neutral-500 dark:text-neutral-400">85%</span>
                  </div>
                  <div className="w-full bg-neutral-200 dark:bg-neutral-700 rounded-full h-2">
                    <div className="bg-primary-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">C++</span>
                    <span className="text-sm text-neutral-500 dark:text-neutral-400">45%</span>
                  </div>
                  <div className="w-full bg-neutral-200 dark:bg-neutral-700 rounded-full h-2">
                    <div className="bg-purple-600 h-2 rounded-full" style={{ width: '45%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Rust</span>
                    <span className="text-sm text-neutral-500 dark:text-neutral-400">20%</span>
                  </div>
                  <div className="w-full bg-neutral-200 dark:bg-neutral-700 rounded-full h-2">
                    <div className="bg-orange-600 h-2 rounded-full" style={{ width: '20%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BackToTop />
    </div>
  );
};

export default Profile;