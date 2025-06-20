import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import { 
  BookOpen, 
  Clock, 
  Users, 
  Star,
  Play,
  CheckCircle,
  Award,
  Filter,
  Search
} from 'lucide-react';

const Courses: React.FC = () => {
  const courses = [
    {
      id: 1,
      title: 'C Programming Fundamentals',
      description: 'Master the basics of C programming from variables to advanced memory management.',
      level: 'Beginner',
      duration: '6 weeks',
      lessons: 24,
      students: 12500,
      rating: 4.9,
      price: 'Free',
      image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=400',
      instructor: 'Dr. Sarah Chen',
      topics: ['Variables & Data Types', 'Control Structures', 'Functions', 'Pointers', 'Memory Management'],
      featured: true
    },
    {
      id: 2,
      title: 'Advanced C++ Programming',
      description: 'Deep dive into object-oriented programming, templates, and the Standard Template Library.',
      level: 'Advanced',
      duration: '8 weeks',
      lessons: 32,
      students: 8900,
      rating: 4.8,
      price: 'Pro',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=400',
      instructor: 'Marcus Rodriguez',
      topics: ['OOP Concepts', 'Templates', 'STL', 'Smart Pointers', 'Modern C++']
    },
    {
      id: 3,
      title: 'Rust Systems Programming',
      description: 'Learn memory-safe systems programming with Rust\'s ownership model and zero-cost abstractions.',
      level: 'Intermediate',
      duration: '10 weeks',
      lessons: 28,
      students: 6200,
      rating: 4.9,
      price: 'Pro',
      image: 'https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&w=400',
      instructor: 'Emily Watson',
      topics: ['Ownership', 'Borrowing', 'Lifetimes', 'Concurrency', 'Error Handling']
    },
    {
      id: 4,
      title: 'Go Concurrency Patterns',
      description: 'Master concurrent programming in Go with goroutines, channels, and advanced patterns.',
      level: 'Intermediate',
      duration: '6 weeks',
      lessons: 20,
      students: 5400,
      rating: 4.7,
      price: 'Pro',
      image: 'https://images.pexels.com/photos/3861975/pexels-photo-3861975.jpeg?auto=compress&cs=tinysrgb&w=400',
      instructor: 'Alex Kim',
      topics: ['Goroutines', 'Channels', 'Select Statement', 'Worker Pools', 'Context Package']
    },
    {
      id: 5,
      title: 'Python for Systems Programming',
      description: 'Use Python for system administration, automation, and low-level programming tasks.',
      level: 'Beginner',
      duration: '7 weeks',
      lessons: 26,
      students: 9800,
      rating: 4.6,
      price: 'Pro',
      image: 'https://images.pexels.com/photos/3861978/pexels-photo-3861978.jpeg?auto=compress&cs=tinysrgb&w=400',
      instructor: 'Lisa Zhang',
      topics: ['File Operations', 'Process Management', 'Network Programming', 'Automation', 'Testing']
    },
    {
      id: 6,
      title: 'JavaScript Engine Internals',
      description: 'Understand how JavaScript engines work under the hood and optimize your code accordingly.',
      level: 'Advanced',
      duration: '5 weeks',
      lessons: 18,
      students: 4100,
      rating: 4.8,
      price: 'Pro',
      image: 'https://images.pexels.com/photos/3861981/pexels-photo-3861981.jpeg?auto=compress&cs=tinysrgb&w=400',
      instructor: 'David Park',
      topics: ['V8 Engine', 'Event Loop', 'Memory Management', 'JIT Compilation', 'Performance Optimization']
    
    }
  ];

  const learningPaths = [
    {
      title: 'Systems Programming Track',
      description: 'Master low-level programming with C, C++, and Rust',
      courses: ['C Programming Fundamentals', 'Advanced C++ Programming', 'Rust Systems Programming'],
      duration: '24 weeks',
      level: 'Beginner to Advanced'
    },
    {
      title: 'Modern Languages Track',
      description: 'Learn contemporary programming languages and their unique features',
      courses: ['Go Concurrency Patterns', 'Rust Systems Programming', 'JavaScript Engine Internals'],
      duration: '21 weeks',
      level: 'Intermediate to Advanced'
    },
    {
      title: 'Full Stack Developer Track',
      description: 'Complete path from systems programming to web development',
      courses: ['C Programming Fundamentals', 'Python for Systems Programming', 'JavaScript Engine Internals'],
      duration: '18 weeks',
      level: 'Beginner to Intermediate'
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'Advanced': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      default: return 'bg-neutral-100 text-neutral-800 dark:bg-neutral-700 dark:text-neutral-200';
    }
  };

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900">
      <Navbar variant="app" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex p-4 bg-primary-100 dark:bg-primary-900 rounded-full mb-6">
            <BookOpen className="h-8 w-8 text-primary-600" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white mb-6">
            Programming Courses
          </h1>
          <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
            Master programming languages from C fundamentals to advanced systems programming. 
            Learn through hands-on projects and real-world applications.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-12">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-neutral-400" />
            <input
              type="text"
              placeholder="Search courses..."
              className="w-full pl-10 pr-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-neutral-800 dark:text-white"
            />
          </div>
          <div className="flex gap-2">
            <select className="px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-neutral-800 dark:text-white">
              <option>All Levels</option>
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
            </select>
            <select className="px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-neutral-800 dark:text-white">
              <option>All Languages</option>
              <option>C</option>
              <option>C++</option>
              <option>Rust</option>
              <option>Go</option>
              <option>Python</option>
              <option>JavaScript</option>
            </select>
          </div>
        </div>

        {/* Featured Course */}
        {courses.filter(course => course.featured).map(course => (
          <div key={course.id} className="bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-2xl p-8 mb-16">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center px-3 py-1 bg-primary-600 text-white rounded-full text-sm font-medium mb-4">
                  <Star className="h-4 w-4 mr-1" />
                  Featured Course
                </div>
                <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-4">{course.title}</h2>
                <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-6">{course.description}</p>
                
                <div className="flex flex-wrap items-center gap-4 mb-6">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getLevelColor(course.level)}`}>
                    {course.level}
                  </span>
                  <div className="flex items-center space-x-1 text-neutral-600 dark:text-neutral-300">
                    <Clock className="h-4 w-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-neutral-600 dark:text-neutral-300">
                    <BookOpen className="h-4 w-4" />
                    <span>{course.lessons} lessons</span>
                  </div>
                  <div className="flex items-center space-x-1 text-neutral-600 dark:text-neutral-300">
                    <Users className="h-4 w-4" />
                    <span>{course.students.toLocaleString()} students</span>
                  </div>
                </div>
                
                <button className="flex items-center space-x-2 px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-semibold">
                  <Play className="h-5 w-5" />
                  <span>Start Learning</span>
                </button>
              </div>
              
              <div className="relative">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="rounded-xl shadow-lg w-full h-64 object-cover"
                />
                <div className="absolute top-4 right-4 bg-white dark:bg-neutral-800 rounded-lg p-2">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <span className="font-medium text-neutral-900 dark:text-white">{course.rating}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* All Courses */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-8">All Courses</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.filter(course => !course.featured).map(course => (
              <div key={course.id} className="bg-white dark:bg-neutral-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getLevelColor(course.level)}`}>
                      {course.level}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 bg-white dark:bg-neutral-800 rounded-lg p-2">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span className="font-medium text-neutral-900 dark:text-white text-sm">{course.rating}</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2">{course.title}</h3>
                  <p className="text-neutral-600 dark:text-neutral-300 mb-4 line-clamp-2">{course.description}</p>
                  
                  <div className="flex items-center justify-between text-sm text-neutral-500 dark:text-neutral-400 mb-4">
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <BookOpen className="h-4 w-4" />
                      <span>{course.lessons} lessons</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="h-4 w-4" />
                      <span>{course.students.toLocaleString()}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-primary-600">{course.price}</span>
                    <button className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium">
                      Enroll Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Learning Paths */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-8">Learning Paths</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {learningPaths.map((path, index) => (
              <div key={index} className="bg-white dark:bg-neutral-800 rounded-xl p-8">
                <div className="inline-flex p-3 bg-primary-100 dark:bg-primary-900 rounded-xl mb-4">
                  <Award className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-3">{path.title}</h3>
                <p className="text-neutral-600 dark:text-neutral-300 mb-4">{path.description}</p>
                
                <div className="space-y-2 mb-6">
                  {path.courses.map((courseName, courseIndex) => (
                    <div key={courseIndex} className="flex items-center space-x-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-neutral-700 dark:text-neutral-300">{courseName}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center justify-between text-sm text-neutral-500 dark:text-neutral-400 mb-6">
                  <span>{path.duration}</span>
                  <span>{path.level}</span>
                </div>
                
                <button className="w-full px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-semibold">
                  Start Learning Path
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-white dark:bg-neutral-800 rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-4">
            Ready to Start Your Programming Journey?
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-8 max-w-2xl mx-auto">
            Join thousands of learners who have mastered programming with our comprehensive courses and hands-on approach.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-semibold">
              Start with Free Course
            </button>
            <button className="px-8 py-4 border border-neutral-300 dark:border-neutral-600 text-neutral-700 dark:text-neutral-300 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-colors font-semibold">
              View All Courses
            </button>
          </div>
        </div>
      </div>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default Courses;