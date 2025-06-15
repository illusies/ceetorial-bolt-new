import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { 
  Play, 
  Pause, 
  SkipForward, 
  SkipBack, 
  CheckCircle, 
  Circle,
  Book,
  Code,
  Target,
  Award,
  ArrowLeft,
  ArrowRight
} from 'lucide-react';

const Learn: React.FC = () => {
  const { language } = useParams<{ language: string }>();
  const [isCodeRunning, setIsCodeRunning] = React.useState(false);
  const [currentLesson, setCurrentLesson] = React.useState(0);

  const languageData = {
    c: {
      name: 'C Programming',
      color: 'bg-blue-500',
      textColor: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    cpp: {
      name: 'C++',
      color: 'bg-purple-500',
      textColor: 'text-purple-600',
      bgColor: 'bg-purple-50',
    },
    rust: {
      name: 'Rust',
      color: 'bg-orange-500',
      textColor: 'text-orange-600',
      bgColor: 'bg-orange-50',
    },
  };

  const currentLang = languageData[language as keyof typeof languageData] || languageData.c;

  const lessons = [
    { title: 'Introduction to C', completed: true, current: false },
    { title: 'Variables and Data Types', completed: true, current: false },
    { title: 'Pointers and Memory', completed: false, current: true },
    { title: 'Functions and Scope', completed: false, current: false },
    { title: 'Arrays and Strings', completed: false, current: false },
  ];

  const codeExample = `#include <stdio.h>

int main() {
    // Pointer declaration
    int number = 42;
    int *ptr = &number;
    
    printf("Value: %d\\n", number);
    printf("Address: %p\\n", ptr);
    printf("Value via pointer: %d\\n", *ptr);
    
    return 0;
}`;

  const runCode = () => {
    setIsCodeRunning(true);
    setTimeout(() => setIsCodeRunning(false), 2000);
  };

  return (
    <div className="min-h-screen bg-neutral-50">
      <Navbar variant="app" />
      
      <div className="flex h-screen">
        {/* Sidebar - Lesson Navigation */}
        <div className="w-80 bg-white border-r border-neutral-200 flex flex-col">
          <div className="p-6 border-b border-neutral-200">
            <div className="flex items-center space-x-3 mb-4">
              <div className={`w-10 h-10 ${currentLang.color} rounded-lg flex items-center justify-center text-white font-bold`}>
                {language?.toUpperCase().slice(0, 2)}
              </div>
              <div>
                <h2 className="font-semibold text-lg">{currentLang.name}</h2>
                <p className="text-sm text-neutral-500">Chapter 3: Pointers</p>
              </div>
            </div>
            
            {/* Progress */}
            <div className="mb-4">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-neutral-600">Progress</span>
                <span className="font-medium">40%</span>
              </div>
              <div className="w-full bg-neutral-200 rounded-full h-2">
                <div className={`h-2 rounded-full ${currentLang.color} w-2/5`}></div>
              </div>
            </div>
          </div>

          {/* Lesson List */}
          <div className="flex-1 overflow-y-auto p-4">
            <div className="space-y-2">
              {lessons.map((lesson, index) => (
                <div
                  key={index}
                  className={`flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-colors ${
                    lesson.current 
                      ? `${currentLang.bgColor} ${currentLang.textColor}` 
                      : 'hover:bg-neutral-100'
                  }`}
                  onClick={() => setCurrentLesson(index)}
                >
                  {lesson.completed ? (
                    <CheckCircle className="h-5 w-5 text-secondary-600" />
                  ) : (
                    <Circle className="h-5 w-5 text-neutral-400" />
                  )}
                  <span className={`text-sm font-medium ${lesson.current ? 'text-current' : 'text-neutral-700'}`}>
                    {lesson.title}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="p-4 border-t border-neutral-200">
            <div className="flex space-x-2">
              <button className="flex-1 flex items-center justify-center space-x-2 py-2 px-4 border border-neutral-300 rounded-lg text-neutral-700 hover:bg-neutral-50 transition-colors">
                <ArrowLeft className="h-4 w-4" />
                <span>Previous</span>
              </button>
              <button className={`flex-1 flex items-center justify-center space-x-2 py-2 px-4 ${currentLang.color} text-white rounded-lg hover:opacity-90 transition-opacity`}>
                <span>Next</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Content Header */}
          <div className="bg-white border-b border-neutral-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-neutral-900 mb-2">
                  Pointers and Memory Management
                </h1>
                <p className="text-neutral-600">
                  Learn how to work with memory addresses and pointer arithmetic in C
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <button className="p-2 text-neutral-600 hover:text-primary-600 transition-colors">
                  <Book className="h-5 w-5" />
                </button>
                <button className="p-2 text-neutral-600 hover:text-primary-600 transition-colors">
                  <Target className="h-5 w-5" />
                </button>
                <button className="p-2 text-neutral-600 hover:text-primary-600 transition-colors">
                  <Award className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Content Area */}
          <div className="flex-1 grid grid-cols-2 gap-0">
            {/* Theory/Explanation */}
            <div className="bg-white p-6 overflow-y-auto">
              <div className="prose max-w-none">
                <h3 className="text-xl font-semibold text-neutral-900 mb-4">Understanding Pointers</h3>
                
                <p className="text-neutral-700 mb-4">
                  A pointer is a variable that stores the memory address of another variable. 
                  Pointers are one of the most powerful features in C programming.
                </p>

                <h4 className="text-lg font-medium text-neutral-900 mb-3">Key Concepts:</h4>
                <ul className="space-y-2 text-neutral-700 mb-6">
                  <li className="flex items-start space-x-2">
                    <span className="text-primary-600 font-bold">•</span>
                    <span><strong>Declaration:</strong> <code className="bg-neutral-100 px-1 rounded">int *ptr;</code> declares a pointer to an integer</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary-600 font-bold">•</span>
                    <span><strong>Address operator (&):</strong> Gets the address of a variable</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary-600 font-bold">•</span>
                    <span><strong>Dereference operator (*):</strong> Accesses the value at the address</span>
                  </li>
                </ul>

                <div className="bg-primary-50 border border-primary-200 rounded-lg p-4 mb-6">
                  <h5 className="font-medium text-primary-900 mb-2">💡 Pro Tip</h5>
                  <p className="text-primary-800 text-sm">
                    Think of pointers as street addresses. The address tells you where 
                    to find a house (variable), and dereferencing is like going to that 
                    address to see what's inside.
                  </p>
                </div>

                <h4 className="text-lg font-medium text-neutral-900 mb-3">Common Use Cases:</h4>
                <ul className="space-y-1 text-neutral-700">
                  <li>• Dynamic memory allocation</li>
                  <li>• Passing large data structures efficiently</li>
                  <li>• Creating linked data structures</li>
                  <li>• Function pointers for callbacks</li>
                </ul>
              </div>
            </div>

            {/* Code Editor */}
            <div className="bg-neutral-900 flex flex-col">
              {/* Editor Header */}
              <div className="flex items-center justify-between p-4 border-b border-neutral-800">
                <div className="flex items-center space-x-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-neutral-400 text-sm font-mono">pointers_example.c</span>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={runCode}
                    className={`flex items-center space-x-2 px-4 py-2 ${currentLang.color} text-white rounded-lg hover:opacity-90 transition-opacity`}
                    disabled={isCodeRunning}
                  >
                    {isCodeRunning ? (
                      <Pause className="h-4 w-4" />
                    ) : (
                      <Play className="h-4 w-4" />
                    )}
                    <span>{isCodeRunning ? 'Running...' : 'Run'}</span>
                  </button>
                </div>
              </div>

              {/* Code Area */}
              <div className="flex-1 p-4 font-mono text-sm overflow-y-auto">
                <pre className="text-neutral-300">
                  <code>{codeExample}</code>
                </pre>
              </div>

              {/* Output Area */}
              <div className="border-t border-neutral-800 p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-neutral-400 text-sm font-medium">Output</span>
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-green-400 text-xs">Ready</span>
                  </div>
                </div>
                <div className="bg-neutral-800 rounded p-3 font-mono text-sm">
                  {isCodeRunning ? (
                    <div className="text-yellow-400">Compiling and running...</div>
                  ) : (
                    <div className="text-green-400">
                      <div>Value: 42</div>
                      <div>Address: 0x7fff5c4c2a6c</div>
                      <div>Value via pointer: 42</div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Learn;