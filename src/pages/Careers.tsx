import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  DollarSign,
  Users,
  Heart,
  Zap,
  Globe,
  Coffee,
  Laptop
} from 'lucide-react';

const Careers: React.FC = () => {
  const jobs = [
    {
      title: 'Senior Full-Stack Developer',
      department: 'Engineering',
      location: 'San Francisco, CA / Remote',
      type: 'Full-time',
      salary: '$120k - $180k',
      description: 'Join our engineering team to build the next generation of interactive learning tools.',
      requirements: [
        '5+ years of full-stack development experience',
        'Proficiency in React, Node.js, and TypeScript',
        'Experience with cloud platforms (AWS, GCP)',
        'Passion for education technology'
      ]
    },
    {
      title: 'Curriculum Designer',
      department: 'Education',
      location: 'Remote',
      type: 'Full-time',
      salary: '$80k - $120k',
      description: 'Design engaging programming curricula that make complex concepts accessible to learners.',
      requirements: [
        'Advanced degree in Computer Science or Education',
        'Experience in curriculum development',
        'Strong programming background in multiple languages',
        'Understanding of pedagogical principles'
      ]
    },
    {
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'San Francisco, CA / Remote',
      type: 'Full-time',
      salary: '$110k - $160k',
      description: 'Scale our infrastructure to support millions of learners worldwide.',
      requirements: [
        '3+ years of DevOps experience',
        'Expertise in Kubernetes, Docker, and CI/CD',
        'Experience with monitoring and observability tools',
        'Strong automation and scripting skills'
      ]
    },
    {
      title: 'UX/UI Designer',
      department: 'Design',
      location: 'San Francisco, CA / Remote',
      type: 'Full-time',
      salary: '$90k - $140k',
      description: 'Create intuitive and beautiful learning experiences for our global community.',
      requirements: [
        '4+ years of UX/UI design experience',
        'Proficiency in Figma, Sketch, or similar tools',
        'Experience with design systems',
        'Portfolio demonstrating educational or complex product design'
      ]
    },
    {
      title: 'Content Marketing Manager',
      department: 'Marketing',
      location: 'Remote',
      type: 'Full-time',
      salary: '$70k - $100k',
      description: 'Lead our content strategy to reach and engage developers worldwide.',
      requirements: [
        '3+ years of content marketing experience',
        'Strong writing and communication skills',
        'Understanding of developer communities',
        'Experience with SEO and content analytics'
      ]
    },
    {
      title: 'Data Scientist',
      department: 'Product',
      location: 'San Francisco, CA / Remote',
      type: 'Full-time',
      salary: '$130k - $180k',
      description: 'Use data to improve learning outcomes and personalize the educational experience.',
      requirements: [
        'PhD or Masters in Data Science, Statistics, or related field',
        'Experience with Python, R, and machine learning',
        'Strong statistical analysis skills',
        'Experience in educational technology preferred'
      ]
    }
  ];

  const benefits = [
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health, dental, and vision insurance plus wellness stipend'
    },
    {
      icon: Laptop,
      title: 'Remote-First',
      description: 'Work from anywhere with flexible hours and home office setup allowance'
    },
    {
      icon: Zap,
      title: 'Learning Budget',
      description: '$2,000 annual learning and development budget for courses, conferences, and books'
    },
    {
      icon: Coffee,
      title: 'Unlimited PTO',
      description: 'Take the time you need to recharge with our unlimited vacation policy'
    },
    {
      icon: Users,
      title: 'Equity Package',
      description: 'Competitive equity package so you can share in our success'
    },
    {
      icon: Globe,
      title: 'Global Team',
      description: 'Work with talented people from around the world in an inclusive environment'
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900">
      <Navbar variant="app" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex p-4 bg-primary-100 dark:bg-primary-900 rounded-full mb-6">
            <Briefcase className="h-8 w-8 text-primary-600" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white mb-6">
            Join Our Mission
          </h1>
          <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
            Help us make programming education accessible to everyone. Join a team of passionate educators, 
            engineers, and designers building the future of learning.
          </p>
        </div>

        {/* Culture Section */}
        <div className="bg-white dark:bg-neutral-800 rounded-2xl p-8 mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-6">Why Ceetorial?</h2>
              <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-6">
                We're not just building a product – we're creating a movement. Every day, we help thousands of people 
                learn programming skills that can change their lives and careers.
              </p>
              <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-6">
                Our team is diverse, remote-first, and united by a shared passion for education and technology. 
                We believe in work-life balance, continuous learning, and making a positive impact on the world.
              </p>
              <div className="flex items-center space-x-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-600">50K+</div>
                  <div className="text-sm text-neutral-500 dark:text-neutral-400">Learners Impacted</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-600">25+</div>
                  <div className="text-sm text-neutral-500 dark:text-neutral-400">Team Members</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-600">15+</div>
                  <div className="text-sm text-neutral-500 dark:text-neutral-400">Countries</div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Team collaboration"
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-neutral-900 dark:text-white text-center mb-12">Benefits & Perks</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white dark:bg-neutral-800 rounded-xl p-6">
                <div className="inline-flex p-3 bg-primary-100 dark:bg-primary-900 rounded-xl mb-4">
                  <benefit.icon className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-3">{benefit.title}</h3>
                <p className="text-neutral-600 dark:text-neutral-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Open Positions */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-neutral-900 dark:text-white text-center mb-12">Open Positions</h2>
          <div className="space-y-6">
            {jobs.map((job, index) => (
              <div key={index} className="bg-white dark:bg-neutral-800 rounded-xl p-8 border border-neutral-200 dark:border-neutral-700">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-2">{job.title}</h3>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-600 dark:text-neutral-300">
                      <div className="flex items-center space-x-1">
                        <Briefcase className="h-4 w-4" />
                        <span>{job.department}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{job.type}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <DollarSign className="h-4 w-4" />
                        <span>{job.salary}</span>
                      </div>
                    </div>
                  </div>
                  <button className="mt-4 lg:mt-0 px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-semibold">
                    Apply Now
                  </button>
                </div>
                
                <p className="text-neutral-600 dark:text-neutral-300 mb-6">{job.description}</p>
                
                <div>
                  <h4 className="font-semibold text-neutral-900 dark:text-white mb-3">Requirements:</h4>
                  <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-300 space-y-1">
                    {job.requirements.map((req, reqIndex) => (
                      <li key={reqIndex}>{req}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Application Process */}
        <div className="bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-2xl p-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-6">Our Hiring Process</h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-8 max-w-3xl mx-auto">
              We believe in a fair, transparent hiring process that respects your time and showcases your skills.
            </p>
            
            <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">1</div>
                <h3 className="font-semibold text-neutral-900 dark:text-white mb-2">Application</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-300">Submit your application and we'll review it within 3 business days</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">2</div>
                <h3 className="font-semibold text-neutral-900 dark:text-white mb-2">Phone Screen</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-300">30-minute conversation about your background and interests</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">3</div>
                <h3 className="font-semibold text-neutral-900 dark:text-white mb-2">Technical Interview</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-300">Role-specific assessment to showcase your skills</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">4</div>
                <h3 className="font-semibold text-neutral-900 dark:text-white mb-2">Team Interview</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-300">Meet the team and learn more about our culture</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default Careers;