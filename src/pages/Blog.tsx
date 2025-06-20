import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import { 
  FileText, 
  Calendar, 
  User, 
  Clock,
  ArrowRight,
  Search,
  Tag,
  TrendingUp
} from 'lucide-react';

const Blog: React.FC = () => {
  const featuredPost = {
    title: 'The Evolution of Systems Programming: From C to Modern Languages',
    excerpt: 'Explore how systems programming has evolved from the early days of C to modern languages like Rust and Go, and what this means for developers today.',
    author: 'Dr. Sarah Chen',
    date: 'January 10, 2025',
    readTime: '8 min read',
    image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Programming Languages',
    featured: true
  };

  const blogPosts = [
    {
      title: 'Memory Management in C: Best Practices and Common Pitfalls',
      excerpt: 'Learn essential memory management techniques in C programming and avoid common mistakes that lead to memory leaks and segmentation faults.',
      author: 'Marcus Rodriguez',
      date: 'January 8, 2025',
      readTime: '6 min read',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'C Programming'
    },
    {
      title: 'Rust vs C++: Performance Comparison in Real-World Applications',
      excerpt: 'A comprehensive analysis of Rust and C++ performance across different use cases, with benchmarks and practical examples.',
      author: 'Emily Watson',
      date: 'January 5, 2025',
      readTime: '10 min read',
      image: 'https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Performance'
    },
    {
      title: 'Building Concurrent Applications with Go: Patterns and Best Practices',
      excerpt: 'Master Go\'s concurrency model with practical examples of goroutines, channels, and common concurrent programming patterns.',
      author: 'Alex Kim',
      date: 'January 3, 2025',
      readTime: '7 min read',
      image: 'https://images.pexels.com/photos/3861975/pexels-photo-3861975.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Go Programming'
    },
    {
      title: 'Understanding JavaScript Engine Optimization Techniques',
      excerpt: 'Dive deep into how modern JavaScript engines optimize code execution and learn how to write more efficient JavaScript.',
      author: 'David Park',
      date: 'December 30, 2024',
      readTime: '9 min read',
      image: 'https://images.pexels.com/photos/3861978/pexels-photo-3861978.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'JavaScript'
    },
    {
      title: 'The Future of Programming Education: Interactive Learning Platforms',
      excerpt: 'Explore how interactive learning platforms are revolutionizing programming education and making coding more accessible.',
      author: 'Lisa Zhang',
      date: 'December 28, 2024',
      readTime: '5 min read',
      image: 'https://images.pexels.com/photos/3861981/pexels-photo-3861981.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Education'
    },
    {
      title: 'Debugging Techniques Every Programmer Should Know',
      excerpt: 'Essential debugging strategies and tools that will help you identify and fix bugs more efficiently in any programming language.',
      author: 'Michael Chen',
      date: 'December 25, 2024',
      readTime: '8 min read',
      image: 'https://images.pexels.com/photos/3861984/pexels-photo-3861984.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Development Tips'
    }
  ];

  const categories = [
    'All Posts',
    'C Programming',
    'C++',
    'Rust',
    'Go Programming',
    'JavaScript',
    'Python',
    'Performance',
    'Education',
    'Development Tips'
  ];

  const popularTags = [
    'memory-management',
    'concurrency',
    'performance',
    'best-practices',
    'debugging',
    'optimization',
    'systems-programming',
    'web-development'
  ];

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900">
      <Navbar variant="app" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex p-4 bg-primary-100 dark:bg-primary-900 rounded-full mb-6">
            <FileText className="h-8 w-8 text-primary-600" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white mb-6">
            Programming Blog
          </h1>
          <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
            Insights, tutorials, and deep dives into programming languages, best practices, 
            and the latest trends in software development.
          </p>
        </div>

        {/* Search and Categories */}
        <div className="flex flex-col lg:flex-row gap-8 mb-12">
          <div className="lg:w-3/4">
            <div className="relative mb-6">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-neutral-400" />
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-10 pr-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-neutral-800 dark:text-white"
              />
            </div>
            
            <div className="flex flex-wrap gap-2">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    index === 0 
                      ? 'bg-primary-600 text-white' 
                      : 'bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-700'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/4">
            <div className="bg-white dark:bg-neutral-800 rounded-xl p-6">
              <h3 className="font-semibold text-neutral-900 dark:text-white mb-4">Popular Tags</h3>
              <div className="flex flex-wrap gap-2">
                {popularTags.map((tag, index) => (
                  <button
                    key={index}
                    className="flex items-center space-x-1 px-3 py-1 bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 rounded-full text-sm hover:bg-neutral-200 dark:hover:bg-neutral-600 transition-colors"
                  >
                    <Tag className="h-3 w-3" />
                    <span>{tag}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Featured Post */}
        <div className="bg-white dark:bg-neutral-800 rounded-2xl overflow-hidden shadow-lg mb-16">
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="relative">
              <img 
                src={featuredPost.image} 
                alt={featuredPost.title}
                className="w-full h-64 lg:h-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-primary-600 text-white rounded-full text-sm font-medium">
                  Featured
                </span>
              </div>
            </div>
            
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="flex items-center space-x-2 text-sm text-primary-600 mb-3">
                <span>{featuredPost.category}</span>
              </div>
              
              <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-4">
                {featuredPost.title}
              </h2>
              
              <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-6">
                {featuredPost.excerpt}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4 text-sm text-neutral-500 dark:text-neutral-400">
                  <div className="flex items-center space-x-1">
                    <User className="h-4 w-4" />
                    <span>{featuredPost.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{featuredPost.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                </div>
                
                <button className="flex items-center space-x-1 text-primary-600 hover:text-primary-700 font-medium">
                  <span>Read More</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {blogPosts.map((post, index) => (
            <article key={index} className="bg-white dark:bg-neutral-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-3 line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-neutral-600 dark:text-neutral-300 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-neutral-500 dark:text-neutral-400 mb-4">
                  <div className="flex items-center space-x-1">
                    <User className="h-4 w-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-neutral-500 dark:text-neutral-400">{post.date}</span>
                  <button className="flex items-center space-x-1 text-primary-600 hover:text-primary-700 font-medium">
                    <span>Read More</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-2xl p-8 text-center">
          <div className="inline-flex p-4 bg-primary-100 dark:bg-primary-900 rounded-full mb-6">
            <TrendingUp className="h-8 w-8 text-primary-600" />
          </div>
          <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-4">
            Stay Updated with Programming Insights
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and get the latest programming tutorials, industry insights, 
            and coding best practices delivered to your inbox.
          </p>
          
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-neutral-800 dark:text-white"
            />
            <button className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-semibold">
              Subscribe
            </button>
          </div>
          
          <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-4">
            No spam, unsubscribe at any time. We respect your privacy.
          </p>
        </div>
      </div>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default Blog;