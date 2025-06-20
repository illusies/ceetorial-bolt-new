import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import { 
  Code, 
  Users, 
  Target, 
  Award,
  Heart,
  Globe,
  Lightbulb,
  Rocket
} from 'lucide-react';

const About: React.FC = () => {
  const team = [
    {
      name: 'Sarah Chen',
      role: 'CEO & Co-Founder',
      bio: 'Former Google engineer with 15+ years in systems programming. Passionate about making programming education accessible.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Marcus Rodriguez',
      role: 'CTO & Co-Founder',
      bio: 'Ex-Microsoft architect specializing in compiler design and programming language theory.',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Dr. Emily Watson',
      role: 'Head of Education',
      bio: 'Former Stanford CS professor with expertise in pedagogical approaches to programming education.',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Alex Kim',
      role: 'Lead Developer',
      bio: 'Full-stack engineer passionate about creating intuitive learning experiences and interactive tools.',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
  ];

  const values = [
    {
      icon: Target,
      title: 'Excellence in Education',
      description: 'We believe in providing the highest quality programming education that prepares learners for real-world challenges.',
    },
    {
      icon: Users,
      title: 'Community First',
      description: 'Learning is better together. We foster a supportive community where everyone can grow and succeed.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We continuously innovate our teaching methods and tools to make programming more accessible and engaging.',
    },
    {
      icon: Heart,
      title: 'Passion for Code',
      description: 'We love programming and want to share that passion with learners around the world.',
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900">
      <Navbar variant="app" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white mb-6">
            About Ceetorial
          </h1>
          <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
            We're on a mission to make programming education accessible, engaging, and effective for learners worldwide.
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-white dark:bg-neutral-800 rounded-2xl p-8 mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-6">Our Mission</h2>
              <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-6">
                At Ceetorial, we believe that programming should be accessible to everyone. Our platform bridges the gap 
                between traditional computer science education and practical, hands-on learning.
              </p>
              <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-6">
                We started with C programming because it's the foundation of modern computing, but we've expanded to cover 
                the entire spectrum of programming languages that shape our digital world.
              </p>
              <div className="flex items-center space-x-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600">50K+</div>
                  <div className="text-sm text-neutral-500 dark:text-neutral-400">Active Learners</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600">12</div>
                  <div className="text-sm text-neutral-500 dark:text-neutral-400">Languages</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600">95%</div>
                  <div className="text-sm text-neutral-500 dark:text-neutral-400">Success Rate</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Team collaboration"
                className="rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary-600 text-white p-4 rounded-xl">
                <Rocket className="h-8 w-8" />
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-neutral-900 dark:text-white text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white dark:bg-neutral-800 rounded-xl p-6 text-center">
                <div className="inline-flex p-3 bg-primary-100 dark:bg-primary-900 rounded-xl mb-4">
                  <value.icon className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-3">{value.title}</h3>
                <p className="text-neutral-600 dark:text-neutral-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-neutral-900 dark:text-white text-center mb-12">Meet Our Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white dark:bg-neutral-800 rounded-xl p-6 text-center">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-1">{member.name}</h3>
                <p className="text-primary-600 font-medium mb-3">{member.role}</p>
                <p className="text-sm text-neutral-600 dark:text-neutral-300">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Story Section */}
        <div className="bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-2xl p-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-6">Our Story</h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-6">
              Ceetorial was born from a simple observation: traditional programming education often focuses on theory 
              without enough practical application. Our founders, having taught and worked in the industry for decades, 
              saw the need for a platform that bridges this gap.
            </p>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-6">
              Starting with C programming - the language that powers everything from operating systems to embedded devices - 
              we've built an interactive learning experience that shows not just how to code, but why certain approaches work 
              and how different languages solve similar problems.
            </p>
            <p className="text-lg text-neutral-600 dark:text-neutral-300">
              Today, Ceetorial serves learners from over 150 countries, helping them master programming languages and 
              build the skills they need for successful careers in technology.
            </p>
          </div>
        </div>
      </div>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default About;