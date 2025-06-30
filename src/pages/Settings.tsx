import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import BackToTop from '../components/BackToTop';
import { 
  User, 
  Bell, 
  Palette, 
  Code, 
  Globe,
  Save,
  Eye,
  EyeOff,
  Check,
  X,
  Monitor,
  Sun,
  Moon,
  Zap,
  Shield,
  AlertTriangle,
  ArrowRight
} from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import { supabase } from '../lib/supabase';

const Settings: React.FC = () => {
  const { user } = useAuth();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('profile');
  const [showPassword, setShowPassword] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showFirstLoginModal, setShowFirstLoginModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const isFirstLogin = searchParams.get('first-login') === 'true';

  const [settings, setSettings] = useState({
    profile: {
      name: '',
      email: user?.email || '',
      bio: '',
      location: '',
      website: ''
    },
    notifications: {
      emailNotifications: true,
      pushNotifications: false,
      weeklyProgress: true,
      newCourses: true,
      communityUpdates: false
    },
    preferences: {
      theme: 'system',
      language: 'en',
      timezone: 'America/Los_Angeles',
      dateFormat: 'MM/DD/YYYY',
      autoSave: true,
      compactMode: false,
      showHints: true,
      enableSounds: true,
      animationsEnabled: true
    },
    coding: {
      codeTheme: 'dark',
      fontSize: 'medium',
      tabSize: 4,
      wordWrap: true,
      lineNumbers: true,
      autoComplete: true,
      syntaxHighlighting: true,
      bracketMatching: true,
      codeFormatting: 'auto',
      indentationType: 'spaces'
    }
  });

  useEffect(() => {
    if (isFirstLogin) {
      setShowFirstLoginModal(true);
    }
  }, [isFirstLogin]);

  const tabs = [
    { id: 'profile', name: 'Profile', icon: User },
    { id: 'notifications', name: 'Notifications', icon: Bell },
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

  const handleSaveChanges = async () => {
    setLoading(true);
    try {
      // Update user metadata if this is first login
      if (isFirstLogin && user) {
        const { error } = await supabase.auth.updateUser({
          data: {
            name: settings.profile.name,
            bio: settings.profile.bio,
            location: settings.profile.location,
            website: settings.profile.website,
            first_login: false // Mark as no longer first login
          }
        });

        if (error) {
          console.error('Error updating user metadata:', error);
        }
      }

      // Simulate saving other settings
      setShowSuccessModal(true);
      setTimeout(() => {
        setShowSuccessModal(false);
        if (isFirstLogin) {
          // Remove the first-login parameter and redirect to dashboard
          navigate('/dashboard');
        }
      }, 2000);
    } catch (error) {
      console.error('Error saving settings:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSkipForNow = () => {
    setShowFirstLoginModal(false);
    navigate('/dashboard');
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
          placeholder="Enter your full name"
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
          placeholder="Enter your email address"
          className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-neutral-800 dark:text-white"
          disabled
        />
        <p className="text-xs text-neutral-500 mt-1">Email cannot be changed from this page</p>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
          Bio
        </label>
        <textarea
          value={settings.profile.bio}
          onChange={(e) => handleInputChange('profile', 'bio', e.target.value)}
          rows={3}
          placeholder="Tell us about yourself and your programming interests"
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
            placeholder="City, Country"
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
            placeholder="https://yourwebsite.com"
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
            placeholder="Enter new password (leave blank to keep current)"
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

  const renderPreferencesTab = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-3">
          Theme
        </label>
        <div className="grid grid-cols-3 gap-3">
          {[
            { value: 'light', label: 'Light', icon: Sun },
            { value: 'dark', label: 'Dark', icon: Moon },
            { value: 'system', label: 'System', icon: Monitor }
          ].map((theme) => (
            <button
              key={theme.value}
              onClick={() => handleInputChange('preferences', 'theme', theme.value)}
              className={`flex items-center space-x-2 p-3 rounded-lg border-2 transition-all ${
                settings.preferences.theme === theme.value
                  ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20'
                  : 'border-neutral-300 dark:border-neutral-600 hover:border-neutral-400'
              }`}
            >
              <theme.icon className="h-4 w-4" />
              <span className="text-sm font-medium">{theme.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
            Language
          </label>
          <select
            value={settings.preferences.language}
            onChange={(e) => handleInputChange('preferences', 'language', e.target.value)}
            className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-neutral-800 dark:text-white"
          >
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
            <option value="de">German</option>
            <option value="zh">Chinese</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
            Timezone
          </label>
          <select
            value={settings.preferences.timezone}
            onChange={(e) => handleInputChange('preferences', 'timezone', e.target.value)}
            className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-neutral-800 dark:text-white"
          >
            <option value="America/Los_Angeles">Pacific Time</option>
            <option value="America/Denver">Mountain Time</option>
            <option value="America/Chicago">Central Time</option>
            <option value="America/New_York">Eastern Time</option>
            <option value="UTC">UTC</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
          Date Format
        </label>
        <select
          value={settings.preferences.dateFormat}
          onChange={(e) => handleInputChange('preferences', 'dateFormat', e.target.value)}
          className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-neutral-800 dark:text-white"
        >
          <option value="MM/DD/YYYY">MM/DD/YYYY</option>
          <option value="DD/MM/YYYY">DD/MM/YYYY</option>
          <option value="YYYY-MM-DD">YYYY-MM-DD</option>
        </select>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium text-neutral-900 dark:text-white">Interface Options</h3>
        {[
          { key: 'autoSave', label: 'Auto-save progress', description: 'Automatically save your progress as you learn' },
          { key: 'compactMode', label: 'Compact mode', description: 'Use a more compact interface layout' },
          { key: 'showHints', label: 'Show hints', description: 'Display helpful hints during lessons' },
          { key: 'enableSounds', label: 'Enable sounds', description: 'Play sounds for notifications and interactions' },
          { key: 'animationsEnabled', label: 'Enable animations', description: 'Use smooth animations throughout the interface' }
        ].map((option) => (
          <div key={option.key} className="flex items-center justify-between">
            <div>
              <h4 className="text-sm font-medium text-neutral-900 dark:text-white">{option.label}</h4>
              <p className="text-sm text-neutral-500 dark:text-neutral-400">{option.description}</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={settings.preferences[option.key as keyof typeof settings.preferences] as boolean}
                onChange={(e) => handleInputChange('preferences', option.key, e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-neutral-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 rounded-full peer dark:bg-neutral-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-neutral-600 peer-checked:bg-primary-600"></div>
            </label>
          </div>
        ))}
      </div>
    </div>
  );

  const renderCodingTab = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-3">
          Code Editor Theme
        </label>
        <div className="grid grid-cols-2 gap-3">
          {[
            { value: 'dark', label: 'Dark Theme' },
            { value: 'light', label: 'Light Theme' }
          ].map((theme) => (
            <button
              key={theme.value}
              onClick={() => handleInputChange('coding', 'codeTheme', theme.value)}
              className={`p-3 rounded-lg border-2 transition-all ${
                settings.coding.codeTheme === theme.value
                  ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20'
                  : 'border-neutral-300 dark:border-neutral-600 hover:border-neutral-400'
              }`}
            >
              <span className="text-sm font-medium">{theme.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
            Font Size
          </label>
          <select
            value={settings.coding.fontSize}
            onChange={(e) => handleInputChange('coding', 'fontSize', e.target.value)}
            className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-neutral-800 dark:text-white"
          >
            <option value="small">Small (12px)</option>
            <option value="medium">Medium (14px)</option>
            <option value="large">Large (16px)</option>
            <option value="extra-large">Extra Large (18px)</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
            Tab Size
          </label>
          <select
            value={settings.coding.tabSize}
            onChange={(e) => handleInputChange('coding', 'tabSize', parseInt(e.target.value))}
            className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-neutral-800 dark:text-white"
          >
            <option value={2}>2 spaces</option>
            <option value={4}>4 spaces</option>
            <option value={8}>8 spaces</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
          Code Formatting
        </label>
        <select
          value={settings.coding.codeFormatting}
          onChange={(e) => handleInputChange('coding', 'codeFormatting', e.target.value)}
          className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-neutral-800 dark:text-white"
        >
          <option value="auto">Auto-format on save</option>
          <option value="manual">Manual formatting only</option>
          <option value="disabled">Disabled</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-3">
          Indentation Type
        </label>
        <div className="grid grid-cols-2 gap-3">
          {[
            { value: 'spaces', label: 'Spaces' },
            { value: 'tabs', label: 'Tabs' }
          ].map((type) => (
            <button
              key={type.value}
              onClick={() => handleInputChange('coding', 'indentationType', type.value)}
              className={`p-3 rounded-lg border-2 transition-all ${
                settings.coding.indentationType === type.value
                  ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20'
                  : 'border-neutral-300 dark:border-neutral-600 hover:border-neutral-400'
              }`}
            >
              <span className="text-sm font-medium">{type.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium text-neutral-900 dark:text-white">Editor Features</h3>
        {[
          { key: 'wordWrap', label: 'Word wrap', description: 'Wrap long lines of code' },
          { key: 'lineNumbers', label: 'Line numbers', description: 'Show line numbers in the editor' },
          { key: 'autoComplete', label: 'Auto-complete', description: 'Enable intelligent code completion' },
          { key: 'syntaxHighlighting', label: 'Syntax highlighting', description: 'Highlight code syntax with colors' },
          { key: 'bracketMatching', label: 'Bracket matching', description: 'Highlight matching brackets and parentheses' }
        ].map((option) => (
          <div key={option.key} className="flex items-center justify-between">
            <div>
              <h4 className="text-sm font-medium text-neutral-900 dark:text-white">{option.label}</h4>
              <p className="text-sm text-neutral-500 dark:text-neutral-400">{option.description}</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={settings.coding[option.key as keyof typeof settings.coding] as boolean}
                onChange={(e) => handleInputChange('coding', option.key, e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-neutral-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 rounded-full peer dark:bg-neutral-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-neutral-600 peer-checked:bg-primary-600"></div>
            </label>
          </div>
        ))}
      </div>

      <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
        <div className="flex items-start space-x-3">
          <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5" />
          <div>
            <h4 className="font-medium text-yellow-800 dark:text-yellow-200">Security Notice</h4>
            <p className="text-sm text-yellow-700 dark:text-yellow-300 mt-1">
              Code execution happens in a secure sandbox environment. Your code is never stored permanently and cannot access system resources.
            </p>
          </div>
        </div>
      </div>
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
                <button 
                  onClick={handleSaveChanges}
                  disabled={loading}
                  className="flex items-center space-x-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors disabled:opacity-50"
                >
                  <Save className="h-4 w-4" />
                  <span>{loading ? 'Saving...' : 'Save Changes'}</span>
                </button>
              </div>

              {activeTab === 'profile' && renderProfileTab()}
              {activeTab === 'notifications' && renderNotificationsTab()}
              {activeTab === 'preferences' && renderPreferencesTab()}
              {activeTab === 'coding' && renderCodingTab()}
            </div>
          </div>
        </div>
      </div>

      {/* First Login Modal */}
      {showFirstLoginModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-neutral-800 rounded-xl p-8 max-w-md w-full mx-4">
            <div className="text-center">
              <div className="inline-flex p-3 bg-primary-100 dark:bg-primary-900 rounded-full mb-4">
                <User className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2">
                Welcome to Ceetorial! 🎉
              </h3>
              <p className="text-neutral-600 dark:text-neutral-300 mb-6">
                Let's set up your profile to personalize your learning experience. You can always update this later.
              </p>
              <div className="flex space-x-3">
                <button
                  onClick={handleSkipForNow}
                  className="flex-1 px-4 py-2 border border-neutral-300 dark:border-neutral-600 text-neutral-700 dark:text-neutral-300 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-colors"
                >
                  Skip for now
                </button>
                <button
                  onClick={() => setShowFirstLoginModal(false)}
                  className="flex-1 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors flex items-center justify-center space-x-1"
                >
                  <span>Set up profile</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-neutral-800 rounded-xl p-6 max-w-sm w-full mx-4">
            <div className="text-center">
              <div className="inline-flex p-3 bg-green-100 dark:bg-green-900 rounded-full mb-4">
                <Check className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">
                {isFirstLogin ? 'Profile Setup Complete!' : 'Changes Saved Successfully'}
              </h3>
              <p className="text-neutral-600 dark:text-neutral-300 mb-4">
                {isFirstLogin 
                  ? 'Your profile has been set up. Welcome to your learning journey!'
                  : 'Your settings have been updated and saved.'
                }
              </p>
            </div>
          </div>
        </div>
      )}

      <BackToTop />
    </div>
  );
};

export default Settings;