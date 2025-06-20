import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import { 
  Newspaper, 
  Download, 
  Image, 
  FileText,
  Award,
  Calendar,
  ExternalLink,
  Mail
} from 'lucide-react';

const Press: React.FC = () => {
  const pressReleases = [
    {
      title: 'Ceetorial Raises $10M Series A to Expand Programming Education Platform',
      date: 'December 15, 2024',
      excerpt: 'Leading programming education platform secures funding to add new languages and AI-powered learning features.',
      link: '#'
    },
    {
      title: 'Ceetorial Reaches 50,000 Active Learners Milestone',
      date: 'November 8, 2024',
      excerpt: 'Platform celebrates significant growth in global programming education community.',
      link: '#'
    },
    {
      title: 'New Partnership with Major Universities to Enhance CS Curriculum',
      date: 'October 22, 2024',
      excerpt: 'Ceetorial partners with leading universities to integrate interactive programming courses.',
      link: '#'
    }
  ];

  const mediaKit = [
    {
      title: 'Company Logo Pack',
      description: 'High-resolution logos in various formats (PNG, SVG, EPS)',
      icon: Image,
      size: '2.3 MB'
    },
    {
      title: 'Brand Guidelines',
      description: 'Complete brand guidelines including colors, typography, and usage rules',
      icon: FileText,
      size: '1.8 MB'
    },
    {
      title: 'Product Screenshots',
      description: 'High-quality screenshots of our platform and features',
      icon: Image,
      size: '5.2 MB'
    },
    {
      title: 'Executive Photos',
      description: 'Professional headshots of our leadership team',
      icon: Image,
      size: '3.1 MB'
    },
    {
      title: 'Company Fact Sheet',
      description: 'Key statistics, milestones, and company information',
      icon: FileText,
      size: '0.5 MB'
    }
  ];

  const awards = [
    {
      title: 'Best EdTech Platform 2024',
      organization: 'TechCrunch Education Awards',
      date: 'November 2024'
    },
    {
      title: 'Innovation in Programming Education',
      organization: 'Developer Education Summit',
      date: 'September 2024'
    },
    {
      title: 'Top 10 Startups to Watch',
      organization: 'VentureBeat',
      date: 'August 2024'
    }
  ];

  const coverage = [
    {
      outlet: 'TechCrunch',
      title: 'How Ceetorial is Revolutionizing Programming Education',
      date: 'December 2024',
      link: '#'
    },
    {
      outlet: 'VentureBeat',
      title: 'The Future of Interactive Learning: A Deep Dive into Ceetorial',
      date: 'November 2024',
      link: '#'
    },
    {
      outlet: 'EdTech Magazine',
      title: 'Making C Programming Accessible: The Ceetorial Story',
      date: 'October 2024',
      link: '#'
    },
    {
      outlet: 'Developer Weekly',
      title: 'Platform Review: Ceetorial Brings Hands-On Learning to Programming',
      date: 'September 2024',
      link: '#'
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900">
      <Navbar variant="app" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex p-4 bg-primary-100 dark:bg-primary-900 rounded-full mb-6">
            <Newspaper className="h-8 w-8 text-primary-600" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white mb-6">
            Press Kit
          </h1>
          <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
            Resources for journalists, bloggers, and media professionals covering Ceetorial and the future of programming education.
          </p>
        </div>

        {/* Quick Facts */}
        <div className="bg-white dark:bg-neutral-800 rounded-2xl p-8 mb-16">
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-8 text-center">Company Overview</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">2024</div>
              <div className="text-sm text-neutral-500 dark:text-neutral-400">Founded</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">50K+</div>
              <div className="text-sm text-neutral-500 dark:text-neutral-400">Active Learners</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">12</div>
              <div className="text-sm text-neutral-500 dark:text-neutral-400">Programming Languages</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">150+</div>
              <div className="text-sm text-neutral-500 dark:text-neutral-400">Countries</div>
            </div>
          </div>
          
          <div className="mt-8 p-6 bg-neutral-50 dark:bg-neutral-700 rounded-xl">
            <h3 className="font-semibold text-neutral-900 dark:text-white mb-3">Mission Statement</h3>
            <p className="text-neutral-600 dark:text-neutral-300">
              Ceetorial is dedicated to making programming education accessible, engaging, and effective for learners worldwide. 
              We bridge the gap between theoretical computer science education and practical, hands-on programming skills through 
              interactive learning experiences and comprehensive language comparisons.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Media Kit Downloads */}
          <div className="bg-white dark:bg-neutral-800 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">Media Kit Downloads</h2>
            <div className="space-y-4">
              {mediaKit.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-neutral-50 dark:bg-neutral-700 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-primary-100 dark:bg-primary-900 rounded-lg">
                      <item.icon className="h-5 w-5 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-neutral-900 dark:text-white">{item.title}</h3>
                      <p className="text-sm text-neutral-600 dark:text-neutral-300">{item.description}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <button className="flex items-center space-x-1 text-primary-600 hover:text-primary-700 font-medium">
                      <Download className="h-4 w-4" />
                      <span className="text-sm">{item.size}</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
              <p className="text-sm text-blue-800 dark:text-blue-200">
                <strong>Usage Guidelines:</strong> Please refer to our brand guidelines when using Ceetorial assets. 
                For custom requests or questions, contact our media team.
              </p>
            </div>
          </div>

          {/* Awards & Recognition */}
          <div className="bg-white dark:bg-neutral-800 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">Awards & Recognition</h2>
            <div className="space-y-4">
              {awards.map((award, index) => (
                <div key={index} className="flex items-start space-x-3 p-4 bg-neutral-50 dark:bg-neutral-700 rounded-lg">
                  <div className="p-2 bg-yellow-100 dark:bg-yellow-900 rounded-lg">
                    <Award className="h-5 w-5 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-neutral-900 dark:text-white">{award.title}</h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-300">{award.organization}</p>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">{award.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Press Releases */}
        <div className="bg-white dark:bg-neutral-800 rounded-2xl p-8 mb-16">
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">Recent Press Releases</h2>
          <div className="space-y-6">
            {pressReleases.map((release, index) => (
              <div key={index} className="border-b border-neutral-200 dark:border-neutral-700 pb-6 last:border-b-0">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2">{release.title}</h3>
                    <div className="flex items-center space-x-2 text-sm text-neutral-500 dark:text-neutral-400 mb-3">
                      <Calendar className="h-4 w-4" />
                      <span>{release.date}</span>
                    </div>
                    <p className="text-neutral-600 dark:text-neutral-300">{release.excerpt}</p>
                  </div>
                  <button className="ml-4 flex items-center space-x-1 text-primary-600 hover:text-primary-700 font-medium">
                    <span>Read More</span>
                    <ExternalLink className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Media Coverage */}
        <div className="bg-white dark:bg-neutral-800 rounded-2xl p-8 mb-16">
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">Recent Media Coverage</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {coverage.map((article, index) => (
              <div key={index} className="p-4 bg-neutral-50 dark:bg-neutral-700 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-primary-600">{article.outlet}</span>
                  <span className="text-xs text-neutral-500 dark:text-neutral-400">{article.date}</span>
                </div>
                <h3 className="font-medium text-neutral-900 dark:text-white mb-2">{article.title}</h3>
                <button className="flex items-center space-x-1 text-sm text-primary-600 hover:text-primary-700">
                  <span>Read Article</span>
                  <ExternalLink className="h-3 w-3" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-2xl p-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-6">Media Contact</h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-8">
              For press inquiries, interview requests, or additional information, please contact our media team.
            </p>
            
            <div className="max-w-md mx-auto bg-white dark:bg-neutral-800 rounded-xl p-6">
              <div className="flex items-center justify-center mb-4">
                <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-full">
                  <Mail className="h-6 w-6 text-primary-600" />
                </div>
              </div>
              <h3 className="font-semibold text-neutral-900 dark:text-white mb-2">Sarah Chen</h3>
              <p className="text-neutral-600 dark:text-neutral-300 mb-1">Head of Communications</p>
              <p className="text-primary-600 font-medium">press@ceetorial.com</p>
              <p className="text-neutral-600 dark:text-neutral-300 text-sm mt-2">
                Response time: Within 24 hours
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

export default Press;