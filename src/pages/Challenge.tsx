import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { 
  Play, 
  Pause, 
  CheckCircle, 
  Clock,
  Target,
  ArrowLeft,
  AlertCircle,
  Trophy,
  Lightbulb,
  Code
} from 'lucide-react';

interface ChallengeData {
  id: string;
  title: string;
  description: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  language: string;
  points: number;
  timeLimit: number;
  code: string;
  expectedOutput: string;
  hints: string[];
  instructions: string;
}

const Challenge: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { challenge, isDaily, timeLimit } = location.state || {};
  
  const [code, setCode] = useState(challenge?.code || '');
  const [output, setOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [executionTime, setExecutionTime] = useState<number | null>(null);
  const [hasError, setHasError] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(timeLimit ? timeLimit * 60 : 0); // Convert minutes to seconds
  const [isCompleted, setIsCompleted] = useState(false);
  const [showHints, setShowHints] = useState(false);

  useEffect(() => {
    if (!challenge) {
      navigate('/daily-challenge');
      return;
    }

    // Start countdown timer
    if (timeRemaining > 0) {
      const timer = setInterval(() => {
        setTimeRemaining(prev => {
          if (prev <= 1) {
            clearInterval(timer);
            handleTimeUp();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [challenge, navigate, timeRemaining]);

  const handleTimeUp = () => {
    alert('Time\'s up! The challenge has ended.');
    navigate('/daily-challenge');
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleCodeChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCode(e.target.value);
    // Reset completion status when code changes
    setIsCompleted(false);
  };

  // Enhanced success detection function
  const checkChallengeCompletion = (output: string, challengeId: string) => {
    const cleanOutput = output.replace(/\x1b\[[0-9;]*m/g, '').trim(); // Remove ANSI color codes
    
    switch (challengeId) {
      case 'daily-001': // Array Sum Calculator
        return cleanOutput.includes('Sum: 15') || cleanOutput.includes('15');
      
      case 'daily-002': // Palindrome Checker
        return cleanOutput.includes('racecar is a palindrome') || 
               (cleanOutput.includes('palindrome') && !cleanOutput.includes('not'));
      
      case 'daily-003': // Fibonacci Sequence
        return cleanOutput.includes('0 1 1 2 3 5 8 13 21 34') ||
               (cleanOutput.includes('0') && cleanOutput.includes('1') && 
                cleanOutput.includes('2') && cleanOutput.includes('3') && 
                cleanOutput.includes('5') && cleanOutput.includes('8'));
      
      default:
        // Generic check - look for expected output
        return cleanOutput.includes(challenge.expectedOutput.trim());
    }
  };

  const runCode = async () => {
    setIsRunning(true);
    setHasError(false);
    setOutput('Compiling and executing...');
    setExecutionTime(null);
    setIsCompleted(false);
    
    try {
      const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
      const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
      
      if (!supabaseUrl) {
        // Enhanced mock execution for demo
        setTimeout(() => {
          let mockOutput = '';
          let isCorrect = false;
          
          // Challenge-specific mock logic
          if (challenge.id === 'daily-001') {
            // Array sum challenge
            if (code.includes('sum += arr[i]') || code.includes('sum = sum + arr[i]') || 
                code.includes('sum+= arr[i]') || code.includes('sum +=arr[i]')) {
              mockOutput = '\x1b[32m[Compilation successful]\x1b[0m\nSum: 15';
              isCorrect = true;
            } else {
              mockOutput = '\x1b[33m[Demo Mode]\x1b[0m\nSum: 0\n\nHint: Make sure you\'re adding each array element to the sum variable.';
            }
          } else if (challenge.id === 'daily-002') {
            // Palindrome challenge
            if (code.includes('return 1') && (code.includes('strlen') || code.includes('length'))) {
              mockOutput = '\x1b[32m[Compilation successful]\x1b[0m\nracecar is a palindrome';
              isCorrect = true;
            } else {
              mockOutput = '\x1b[33m[Demo Mode]\x1b[0m\nracecar is not a palindrome\n\nHint: Compare characters from both ends of the string.';
            }
          } else if (challenge.id === 'daily-003') {
            // Fibonacci challenge
            if (code.includes('fibonacci(n-1)') && code.includes('fibonacci(n-2)')) {
              mockOutput = '\x1b[32m[Compilation successful]\x1b[0m\nFirst 10 Fibonacci numbers:\n0 1 1 2 3 5 8 13 21 34';
              isCorrect = true;
            } else {
              mockOutput = '\x1b[33m[Demo Mode]\x1b[0m\nFirst 10 Fibonacci numbers:\n0 0 0 0 0 0 0 0 0 0\n\nHint: Use recursion with base cases F(0)=0 and F(1)=1.';
            }
          } else {
            // Generic challenge
            mockOutput = '\x1b[33m[Demo Mode]\x1b[0m\nProgram executed. Check your logic and try again.';
          }
          
          setOutput(mockOutput);
          setIsCompleted(isCorrect);
          setExecutionTime(1250);
          setIsRunning(false);
        }, 1500);
        return;
      }

      const response = await fetch(`${supabaseUrl}/functions/v1/execute-c`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${supabaseAnonKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code }),
      });

      const result = await response.json();
      
      if (!response.ok) {
        throw new Error(result.error || 'Execution failed');
      }

      if (result.error) {
        setOutput(`\x1b[31m[Compilation Error]\x1b[0m\n${result.error}`);
        setHasError(true);
        setIsCompleted(false);
      } else {
        const executionOutput = result.output || 'Program executed successfully (no output)';
        setOutput(executionOutput);
        
        // Check if the challenge is completed using enhanced detection
        const completed = checkChallengeCompletion(executionOutput, challenge.id);
        setIsCompleted(completed);
        
        if (!completed) {
          setHasError(false); // Not an error, just incorrect output
        }
      }
      
      setExecutionTime(result.executionTime || null);

    } catch (error) {
      console.error('Code execution error:', error);
      setOutput(`\x1b[31m[Execution Error]\x1b[0m\n${error instanceof Error ? error.message : 'Failed to execute code'}`);
      setHasError(true);
      setIsCompleted(false);
    } finally {
      setIsRunning(false);
    }
  };

  const handleSubmit = () => {
    if (isCompleted) {
      // Save completion status
      localStorage.setItem(`challenge_${challenge.id}_completed`, 'true');
      localStorage.setItem(`challenge_${challenge.id}_${new Date().toDateString()}`, 'true');
      
      // Update streak if it's a daily challenge
      if (isDaily) {
        const currentStreak = parseInt(localStorage.getItem('daily_streak') || '0');
        localStorage.setItem('daily_streak', (currentStreak + 1).toString());
      }
      
      // Show success message and redirect
      alert(`🎉 Congratulations! You've completed the challenge and earned ${challenge.points} points!`);
      navigate('/daily-challenge');
    } else {
      alert('Please make sure your code produces the correct output before submitting. Run your code and check the output matches the expected result.');
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'Advanced': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      default: return 'bg-neutral-100 text-neutral-800 dark:bg-neutral-700 dark:text-neutral-200';
    }
  };

  if (!challenge) {
    return (
      <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900">
        <Navbar variant="app" />
        <div className="flex items-center justify-center h-96">
          <div className="text-center">
            <AlertCircle className="h-16 w-16 text-neutral-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-2">Challenge Not Found</h2>
            <p className="text-neutral-600 dark:text-neutral-300">Please start a challenge from the daily challenge page.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900">
      <Navbar variant="app" />
      
      <div className="flex h-screen">
        {/* Instructions Sidebar */}
        <div className="w-96 bg-white dark:bg-neutral-800 border-r border-neutral-200 dark:border-neutral-700 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="p-6 border-b border-neutral-200 dark:border-neutral-700">
            <button
              onClick={() => navigate('/daily-challenge')}
              className="flex items-center space-x-2 text-neutral-600 dark:text-neutral-300 hover:text-primary-600 transition-colors mb-4"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Daily Challenge</span>
            </button>
            
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 bg-primary-100 dark:bg-primary-900 rounded-lg">
                <Target className="h-5 w-5 text-primary-600" />
              </div>
              <div>
                <h1 className="text-lg font-semibold text-neutral-900 dark:text-white">{challenge.title}</h1>
                <div className="flex items-center space-x-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(challenge.difficulty)}`}>
                    {challenge.difficulty}
                  </span>
                  <span className="text-sm text-neutral-500 dark:text-neutral-400">{challenge.language}</span>
                </div>
              </div>
            </div>

            {/* Timer and Points */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-blue-500" />
                <span className={`font-mono text-lg ${timeRemaining < 300 ? 'text-red-500' : 'text-neutral-900 dark:text-white'}`}>
                  {formatTime(timeRemaining)}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Trophy className="h-4 w-4 text-yellow-500" />
                <span className="font-semibold text-neutral-900 dark:text-white">{challenge.points} pts</span>
              </div>
            </div>

            {/* Completion Status */}
            {isCompleted && (
              <div className="mt-4 p-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-green-800 dark:text-green-200 font-medium">Challenge Completed!</span>
                </div>
                <p className="text-green-700 dark:text-green-300 text-sm mt-1">
                  Great job! Your solution is correct. Click "Submit Solution" below.
                </p>
              </div>
            )}
          </div>

          {/* Instructions Content */}
          <div className="flex-1 overflow-y-auto p-6">
            <div className="prose prose-sm prose-neutral dark:prose-invert max-w-none">
              <div dangerouslySetInnerHTML={{ 
                __html: challenge.instructions
                  .replace(/\n/g, '<br>')
                  .replace(/```c\n([\s\S]*?)\n```/g, '<pre class="bg-neutral-900 text-neutral-100 p-3 rounded-lg overflow-x-auto text-sm"><code>$1</code></pre>')
                  .replace(/`([^`]+)`/g, '<code class="bg-neutral-200 dark:bg-neutral-700 px-1 py-0.5 rounded text-sm">$1</code>')
                  .replace(/^# (.+)$/gm, '<h1 class="text-xl font-bold text-neutral-900 dark:text-white mt-6 mb-3">$1</h1>')
                  .replace(/^## (.+)$/gm, '<h2 class="text-lg font-semibold text-neutral-900 dark:text-white mt-4 mb-2">$1</h2>')
                  .replace(/^### (.+)$/gm, '<h3 class="text-base font-medium text-neutral-900 dark:text-white mt-3 mb-2">$1</h3>')
              }} />
            </div>

            {/* Expected Output */}
            <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
              <h4 className="font-medium text-blue-900 dark:text-blue-100 mb-2">Expected Output:</h4>
              <pre className="text-sm text-blue-800 dark:text-blue-200 font-mono bg-blue-100 dark:bg-blue-900/40 p-2 rounded">
                {challenge.expectedOutput}
              </pre>
            </div>

            {/* Hints Section */}
            <div className="mt-6 pt-6 border-t border-neutral-200 dark:border-neutral-700">
              <button
                onClick={() => setShowHints(!showHints)}
                className="flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-medium mb-3"
              >
                <Lightbulb className="h-4 w-4" />
                <span>{showHints ? 'Hide Hints' : 'Show Hints'}</span>
              </button>
              
              {showHints && (
                <ul className="space-y-2">
                  {challenge.hints.map((hint: string, index: number) => (
                    <li key={index} className="flex items-start space-x-2 text-sm">
                      <span className="text-primary-600 font-bold mt-1">•</span>
                      <span className="text-neutral-600 dark:text-neutral-300">{hint}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <div className="p-6 border-t border-neutral-200 dark:border-neutral-700">
            <button
              onClick={handleSubmit}
              disabled={!isCompleted}
              className={`w-full py-3 px-4 rounded-lg font-semibold transition-all ${
                isCompleted
                  ? 'bg-green-600 text-white hover:bg-green-700 hover:scale-105'
                  : 'bg-neutral-300 dark:bg-neutral-600 text-neutral-500 dark:text-neutral-400 cursor-not-allowed'
              }`}
            >
              {isCompleted ? (
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="h-5 w-5" />
                  <span>Submit Solution</span>
                </div>
              ) : (
                'Complete Challenge First'
              )}
            </button>
            
            {!isCompleted && (
              <p className="text-xs text-neutral-500 dark:text-neutral-400 text-center mt-2">
                Run your code and make sure the output matches the expected result
              </p>
            )}
          </div>
        </div>

        {/* Code Editor */}
        <div className="flex-1 flex flex-col">
          {/* Editor Header */}
          <div className="bg-neutral-900 flex items-center justify-between p-4 border-b border-neutral-800">
            <div className="flex items-center space-x-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <span className="text-neutral-400 text-sm font-mono">challenge.c</span>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={runCode}
                disabled={isRunning}
                className="flex items-center space-x-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {isRunning ? (
                  <Pause className="h-4 w-4" />
                ) : (
                  <Play className="h-4 w-4" />
                )}
                <span>{isRunning ? 'Running...' : 'Run Code'}</span>
              </button>
            </div>
          </div>

          {/* Code Area */}
          <div className="flex-1 bg-neutral-900 p-4 font-mono text-sm overflow-y-auto">
            <textarea
              value={code}
              onChange={handleCodeChange}
              className="w-full h-full bg-transparent text-neutral-100 resize-none focus:outline-none"
              placeholder="Write your code here..."
              spellCheck={false}
            />
          </div>

          {/* Output Area */}
          <div className="h-64 border-t border-neutral-800 bg-neutral-900">
            <div className="flex items-center justify-between p-3 bg-neutral-800 border-b border-neutral-700">
              <span className="text-neutral-300 text-sm font-medium">Output</span>
              <div className="flex items-center space-x-3">
                {executionTime && (
                  <span className="text-neutral-500 text-xs">
                    {executionTime}ms
                  </span>
                )}
                <div className="flex items-center space-x-1">
                  <div className={`w-2 h-2 rounded-full ${
                    isRunning ? 'bg-yellow-500' : hasError ? 'bg-red-500' : isCompleted ? 'bg-green-500' : 'bg-neutral-500'
                  }`}></div>
                  <span className={`text-xs ${
                    isRunning ? 'text-yellow-400' : hasError ? 'text-red-400' : isCompleted ? 'text-green-400' : 'text-neutral-400'
                  }`}>
                    {isRunning ? 'Running' : hasError ? 'Error' : isCompleted ? 'Success' : 'Ready'}
                  </span>
                </div>
              </div>
            </div>
            <div className="p-4 h-full overflow-y-auto">
              {isRunning ? (
                <div className="text-yellow-400 flex items-center space-x-2">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-yellow-400"></div>
                  <span className="font-mono text-sm">Executing...</span>
                </div>
              ) : (
                <pre className={`whitespace-pre-wrap font-mono text-sm ${
                  hasError ? 'text-red-400' : isCompleted ? 'text-green-400' : 'text-neutral-300'
                }`}>
                  {output || 'Run your code to see output...'}
                </pre>
              )}
              
              {hasError && !isRunning && (
                <div className="mt-3 flex items-start space-x-2 text-xs text-red-400">
                  <AlertCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span>Check your code for syntax errors and try again.</span>
                </div>
              )}

              {isCompleted && (
                <div className="mt-3 flex items-start space-x-2 text-xs text-green-400">
                  <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span>Perfect! Your solution produces the correct output. You can now submit your solution.</span>
                </div>
              )}

              {!isCompleted && !hasError && output && !isRunning && (
                <div className="mt-3 flex items-start space-x-2 text-xs text-yellow-400">
                  <AlertCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span>Output doesn't match expected result. Check the expected output in the instructions and try again.</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Challenge;