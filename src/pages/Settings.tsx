import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import BackToTop from '../components/BackToTop';
import { 
  User, 
  Bell, 
  Shield, 
  Palette, 
  Code, 
  Globe,
  Save,
  Eye,
  EyeOff
} from 'lucide-react';

const Settings: React.FC = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [showPassword, setShowPassword] = useState(false);
  const [settings, setSettings] = useState({
    profile: {
      name: 'John Doe',
      email: 'john.doe@example.com',
      bio: 'Passionate C programmer learning new languages',
      location: 'San Francisco, CA',
      website: 'https://johndoe.dev'
    },
    notifications: {
      emailNotifications: true,
      pushNotifications: false,
      weeklyProgress: true,
      newCourses: true,
      communityUpdates: false
    },
    privacy: {
      profileVisibility: 'public',
      showProgress: true,
      showAchievements: true,
      allowMessages: true
    },
    preferences: {
      theme: 'system',
      language: 'en',
      codeTheme: 'dark',
      fontSize: 'medium',
      autoSave: true
    }
  });

  const tabs = [
    { id: 'profile', name: 'Profile', icon: User },
    { id: 'notifications', name: 'Notifications', icon: Bell },
    { id: 'privacy', name: 'Privacy', icon: Shield },
    { id: 'preferences', name: 'Preferences', icon: Palette },
    { id: 'coding', name: 'Coding', icon: Code }
  ];

  const handleInputChange = (section: string, field: string, value: any) => {
    setSettings(prev => ({
      ...prev,
      [section]: {
        ...prev[section as keyof typeof prev],
        [field]: value
      }
    }));
  };

  const renderProfileTab = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
          Full Name
        </label>
        <input
          type="text"
          value={settings.profile.name}
          onChange={(e) => handleInputChange('profile', 'name', e.target.value)}
          className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-neutral-800 dark:text-white"
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
          Email Address
        </label>
        <input
          type="email"
          value={settings.profile.email}
          onChange={(e) => handleInputChange('profile', 'email', e.target.value)}
          className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-neutral-800 dark:text-white"
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
          Bio
        </label>
        <textarea
          value={settings.profile.bio}
          onChange={(e) => handleInputChange('profile', 'bio', e.target.value)}
          rows={3}
          className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-neutral-800 dark:text-white"
        />
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
            Location
          </label>
          <input
            type="text"
            value={settings.profile.location}
            onChange={(e) => handleInputChange('profile', 'location', e.target.value)}
            className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-neutral-800 dark:text-white"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
            Website
          </label>
          <input
            type="url"
            value={settings.profile.website}
            onChange={(e) => handleInputChange('profile', 'website', e.target.value)}
            className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-neutral-800 dark:text-white"
          />
        </div>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
          Change Password
        </label>
        <div className="relative">
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Enter new password"
            className="w-full px-4 py-3 pr-12 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-neutral-800 dark:text-white"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-neutral-400 hover:text-neutral-600"
          >
            {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
          </button>
        </div>
      </div>
    </div>
  );

  const renderNotificationsTab = () => (
    <div className="space-y-6">
      {Object.entries(settings.notifications).map(([key, value]) => (
        <div key={key} className="flex items-center justify-between">
          <div>
            <h3 className="text-sm font-medium text-neutral-900 dark:text-white">
              {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
            </h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              {key === 'emailNotifications' && 'Receive email notifications for important updates'}
              {key === 'pushNotifications' && 'Get push notifications on your device'}
              {key === 'weeklyProgress' && 'Weekly summary of your learning progress'}
              {key === 'newCourses' && 'Notifications about new courses and content'}
              {key === 'communityUpdates' && 'Updates from the Ceetorial community'}
            </p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={value}
              onChange={(e) => handleInputChange('notifications', key, e.target.checked)}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-neutral-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 rounded-full peer dark:bg-neutral-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-neutral-600 peer-checked:bg-primary-600"></div>
          </label>
        </div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900">
      <Navbar variant="app" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-neutral-900 dark:text-white mb-2">Settings</h1>
          <p className="text-neutral-600 dark:text-neutral-300">
            Manage your account settings and preferences
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <nav className="space-y-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                    activeTab === tab.id
                      ? 'bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300'
                      : 'text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800'
                  }`}
                >
                  <tab.icon className="h-5 w-5" />
                  <span className="font-medium">{tab.name}</span>
                </button>
              ))}
            </nav>
          </div>

          {/* Content */}
          <div className="lg:col-span-3">
            <div className="bg-white dark:bg-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-700 p-8">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white">
                  {tabs.find(tab => tab.id === activeTab)?.name}
                </h2>
                <button className="flex items-center space-x-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
                  <Save className="h-4 w-4" />
                  <span>Save Changes</span>
                </button>
              </div>

              {activeTab === 'profile' && renderProfileTab()}
              {activeTab === 'notifications' && renderNotificationsTab()}
              {/* Add other tab content as needed */}
            </div>
          </div>
        </div>
      </div>

      <BackToTop />
    </div>
  );
};

export default Settings;