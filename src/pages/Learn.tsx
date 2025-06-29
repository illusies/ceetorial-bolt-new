import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useSearchParams } from 'react-router-dom';
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
  ArrowRight,
  AlertCircle,
  Clock,
  Trophy
} from 'lucide-react';
import { courses, getLessonById, getNextLesson, getPreviousLesson } from '../data/lessons';
import { useProgress } from '../hooks/useProgress';

const Learn: React.FC = () => {
  const { language } = useParams<{ language: string }>();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { getCourseProgress, startCourse, updateCurrentLesson, completeLesson, isLessonCompleted } = useProgress();
  
  const [isCodeRunning, setIsCodeRunning] = useState(false);
  const [output, setOutput] = useState('');
  const [executionTime, setExecutionTime] = useState<number | null>(null);
  const [hasError, setHasError] = useState(false);
  const [lessonStartTime] = useState(Date.now());

  // Find the course and current lesson
  const course = courses.find(c => c.id === `${language}-programming` || c.name.toLowerCase().includes(language || ''));
  const courseProgress = course ? getCourseProgress(course.id) : undefined;
  
  // Determine current lesson
  let currentLessonId: string;
  const challengeParam = searchParams.get('challenge');
  
  if (challengeParam === 'daily') {
    // For daily challenge, start with a random lesson
    currentLessonId = course?.lessons[Math.floor(Math.random() * Math.min(5, course.lessons.length))]?.id || course?.lessons[0]?.id || '';
  } else {
    currentLessonId = courseProgress?.currentLessonId || course?.lessons[0]?.id || '';
  }

  const currentLesson = course ? getLessonById(course.id, currentLessonId) : undefined;
  const nextLesson = course ? getNextLesson(course.id, currentLessonId) : undefined;
  const previousLesson = course ? getPreviousLesson(course.id, currentLessonId) : undefined;

  useEffect(() => {
    if (course && !courseProgress) {
      startCourse(course.id, course.lessons[0].id);
    }
  }, [course, courseProgress, startCourse]);

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

  const runCode = async () => {
    if (!currentLesson) return;
    
    setIsCodeRunning(true);
    setHasError(false);
    setOutput('Compiling and executing...');
    setExecutionTime(null);
    
    try {
      const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
      const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
      
      if (!supabaseUrl) {
        // Fallback to mock execution for demo
        setTimeout(() => {
          setOutput(`\x1b[33m[Demo Mode]\x1b[0m\n${currentLesson.expectedOutput}`);
          setExecutionTime(1250);
          setIsCodeRunning(false);
        }, 1500);
        return;
      }

      const response = await fetch(`${supabaseUrl}/functions/v1/execute-c`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${supabaseAnonKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code: currentLesson.code }),
      });

      const result = await response.json();
      
      if (!response.ok) {
        throw new Error(result.error || 'Execution failed');
      }

      if (result.error) {
        setOutput(`\x1b[31m[Compilation Error]\x1b[0m\n${result.error}`);
        setHasError(true);
      } else {
        setOutput(result.output || currentLesson.expectedOutput);
      }
      
      setExecutionTime(result.executionTime || null);

    } catch (error) {
      console.error('Code execution error:', error);
      setOutput(`\x1b[31m[Execution Error]\x1b[0m\n${error instanceof Error ? error.message : 'Failed to execute code'}`);
      setHasError(true);
    } finally {
      setIsCodeRunning(false);
    }
  };

  const handleLessonSelect = (lessonId: string) => {
    if (course) {
      updateCurrentLesson(course.id, lessonId);
      navigate(`/learn/${language}?lesson=${lessonId}`);
    }
  };

  const handleNext = () => {
    if (nextLesson && course) {
      // Mark current lesson as completed
      const timeSpent = Math.round((Date.now() - lessonStartTime) / 60000); // Convert to minutes
      completeLesson(course.id, currentLessonId, timeSpent);
      
      updateCurrentLesson(course.id, nextLesson.id);
      navigate(`/learn/${language}?lesson=${nextLesson.id}`);
    }
  };

  const handlePrevious = () => {
    if (previousLesson && course) {
      updateCurrentLesson(course.id, previousLesson.id);
      navigate(`/learn/${language}?lesson=${previousLesson.id}`);
    }
  };

  if (!course || !currentLesson) {
    return (
      <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900">
        <Navbar variant="app" />
        <div className="flex items-center justify-center h-96">
          <div className="text-center">
            <AlertCircle className="h-16 w-16 text-neutral-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-2">Course Not Found</h2>
            <p className="text-neutral-600 dark:text-neutral-300">The requested course could not be found.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900">
      <Navbar variant="app" />
      
      <div className="flex h-screen">
        {/* Sidebar - Lesson Navigation */}
        <div className="w-80 bg-white dark:bg-neutral-800 border-r border-neutral-200 dark:border-neutral-700 flex flex-col">
          <div className="p-6 border-b border-neutral-200 dark:border-neutral-700">
            <div className="flex items-center space-x-3 mb-4">
              <div className={`w-12 h-12 rounded-lg ${currentLang.color} flex items-center justify-center text-white font-mono font-bold text-lg`}>
                {language?.toUpperCase().slice(0, 2)}
              </div>
              <div>
                <h2 className="font-semibold text-lg text-neutral-900 dark:text-white">{currentLang.name}</h2>
                <p className="text-sm text-neutral-500 dark:text-neutral-400">{course.name}</p>
              </div>
            </div>
            
            {/* Progress */}
            <div className="mb-4">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-neutral-600 dark:text-neutral-300">Progress</span>
                <span className="font-medium text-neutral-900 dark:text-white">
                  {courseProgress?.lessonsCompleted.length || 0}/{course.totalLessons}
                </span>
              </div>
              <div className="w-full bg-neutral-200 dark:bg-neutral-700 rounded-full h-2">
                <div 
                  className={`h-2 rounded-full ${currentLang.color}`} 
                  style={{ width: `${((courseProgress?.lessonsCompleted.length || 0) / course.totalLessons) * 100}%` }}
                ></div>
              </div>
            </div>

            {challengeParam === 'daily' && (
              <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-3 mb-4">
                <div className="flex items-center space-x-2">
                  <Trophy className="h-4 w-4 text-yellow-600" />
                  <span className="text-sm font-medium text-yellow-800 dark:text-yellow-200">Daily Challenge</span>
                </div>
                <p className="text-xs text-yellow-700 dark:text-yellow-300 mt-1">
                  Complete this lesson to earn bonus points!
                </p>
              </div>
            )}
          </div>

          {/* Lesson List */}
          <div className="flex-1 overflow-y-auto p-4">
            <div className="space-y-2">
              {course.lessons.slice(0, 10).map((lesson, index) => {
                const isCompleted = isLessonCompleted(course.id, lesson.id);
                const isCurrent = lesson.id === currentLessonId;
                
                return (
                  <button
                    key={lesson.id}
                    onClick={() => handleLessonSelect(lesson.id)}
                    className={`w-full flex items-center space-x-3 p-3 rounded-lg text-left transition-colors ${
                      isCurrent 
                        ? `${currentLang.bgColor} ${currentLang.textColor} dark:bg-opacity-20` 
                        : 'hover:bg-neutral-100 dark:hover:bg-neutral-700'
                    }`}
                  >
                    {isCompleted ? (
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    ) : (
                      <Circle className="h-5 w-5 text-neutral-400" />
                    )}
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <span className={`text-sm font-medium ${isCurrent ? 'text-current' : 'text-neutral-700 dark:text-neutral-300'}`}>
                          {index + 1}. {lesson.title}
                        </span>
                        <div className="flex items-center space-x-1 text-xs text-neutral-500 dark:text-neutral-400">
                          <Clock className="h-3 w-3" />
                          <span>{lesson.estimatedTime}m</span>
                        </div>
                      </div>
                      <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                        {lesson.difficulty}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="p-4 border-t border-neutral-200 dark:border-neutral-700">
            <div className="flex space-x-2">
              <button 
                onClick={handlePrevious}
                disabled={!previousLesson}
                className="flex-1 flex items-center justify-center space-x-2 py-2 px-4 border border-neutral-300 dark:border-neutral-600 rounded-lg text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Previous</span>
              </button>
              <button 
                onClick={handleNext}
                disabled={!nextLesson}
                className={`flex-1 flex items-center justify-center space-x-2 py-2 px-4 ${currentLang.color} text-white rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed`}
              >
                <span>Next</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Content Header */}
          <div className="bg-white dark:bg-neutral-800 border-b border-neutral-200 dark:border-neutral-700 p-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-neutral-900 dark:text-white mb-2">
                  {currentLesson.title}
                </h1>
                <p className="text-neutral-600 dark:text-neutral-300">
                  {currentLesson.description}
                </p>
                <div className="flex items-center space-x-4 mt-3 text-sm text-neutral-500 dark:text-neutral-400">
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{currentLesson.estimatedTime} minutes</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Target className="h-4 w-4" />
                    <span>{currentLesson.difficulty}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Book className="h-4 w-4" />
                    <span>{currentLesson.concepts.join(', ')}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button className="p-2 text-neutral-600 dark:text-neutral-300 hover:text-primary-600 transition-colors">
                  <Book className="h-5 w-5" />
                </button>
                <button className="p-2 text-neutral-600 dark:text-neutral-300 hover:text-primary-600 transition-colors">
                  <Award className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Content Area */}
          <div className="flex-1 grid grid-cols-2 gap-0">
            {/* Theory/Explanation */}
            <div className="bg-white dark:bg-neutral-800 p-6 overflow-y-auto">
              <div className="prose prose-neutral dark:prose-invert max-w-none">
                <div dangerouslySetInnerHTML={{ __html: currentLesson.content.replace(/\n/g, '<br>').replace(/```c\n([\s\S]*?)\n```/g, '<pre class="bg-neutral-900 text-neutral-100 p-4 rounded-lg overflow-x-auto"><code>$1</code></pre>') }} />
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
                  <span className="text-neutral-400 text-sm font-mono">lesson_{currentLesson.id}.c</span>
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
                  <code>{currentLesson.code}</code>
                </pre>
              </div>

              {/* Output Area */}
              <div className="border-t border-neutral-800 p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-neutral-400 text-sm font-medium">Output</span>
                  <div className="flex items-center space-x-3">
                    {executionTime && (
                      <span className="text-neutral-500 text-xs">
                        {executionTime}ms
                      </span>
                    )}
                    <div className="flex items-center space-x-1">
                      <div className={`w-2 h-2 rounded-full ${
                        isCodeRunning ? 'bg-yellow-500' : hasError ? 'bg-red-500' : 'bg-green-500'
                      }`}></div>
                      <span className={`text-xs ${
                        isCodeRunning ? 'text-yellow-400' : hasError ? 'text-red-400' : 'text-green-400'
                      }`}>
                        {isCodeRunning ? 'Running' : hasError ? 'Error' : 'Ready'}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="bg-neutral-800 rounded p-3 font-mono text-sm min-h-[100px]">
                  {isCodeRunning ? (
                    <div className="text-yellow-400 flex items-center space-x-2">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-yellow-400"></div>
                      <span>Compiling and executing...</span>
                    </div>
                  ) : (
                    <div className={hasError ? 'text-red-400' : 'text-green-400'}>
                      <pre className="whitespace-pre-wrap">{output || 'Click "Run" to execute the code'}</pre>
                    </div>
                  )}
                </div>
                
                {hasError && (
                  <div className="mt-2 flex items-start space-x-2 text-xs text-red-400">
                    <AlertCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                    <span>Check your code for syntax errors and try again.</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Learn;