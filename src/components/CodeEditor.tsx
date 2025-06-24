import React, { useState } from 'react';
import { Play, Copy, Download, Settings, Maximize2, AlertCircle } from 'lucide-react';

const abortControllerRef = useRef(new AbortController());

interface CodeEditorProps {
  language: string;
  initialCode?: string;
  onCodeChange?: (code: string) => void;
  readOnly?: boolean;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ 
  language, 
  initialCode = '', 
  onCodeChange,
  readOnly = false 
}) => {
  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [executionTime, setExecutionTime] = useState<number | null>(null);
  const [hasError, setHasError] = useState(false);

  const handleCodeChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newCode = e.target.value;
    setCode(newCode);
    onCodeChange?.(newCode);
  };

  const runCode = async () => {
    if (readOnly) return;
    
    setIsRunning(true);
    setHasError(false);
    setOutput('Compiling and executing...');
    setExecutionTime(null);
    
    try {
      const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
      const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
      
      if (!supabaseUrl || language !== 'c') {
        // Fallback to mock execution for demo or non-C languages
        setTimeout(() => {
          setOutput(`\x1b[33m[Demo Mode - ${language.toUpperCase()}]\x1b[0m\nProgram executed successfully.\nExecution time: 0.${Math.floor(Math.random() * 900) + 100}s`);
          setExecutionTime(Math.floor(Math.random() * 1000) + 500);
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
      } else {
        setOutput(result.output || 'Program executed successfully (no output)');
      }
      
      setExecutionTime(result.executionTime || null);

    } catch (error) {
      console.error('Code execution error:', error);
      setOutput(`\x1b[31m[Execution Error]\x1b[0m\n${error instanceof Error ? error.message : 'Failed to execute code'}`);
      setHasError(true);
    } finally {
      setIsRunning(false);
    }
  };

  const copyCode = () => {
    navigator.clipboard.writeText(code);
  };

  const downloadCode = () => {
    const element = document.createElement('a');
    const file = new Blob([code], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = `code.${language}`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  // In execution function
const executeCode = async (code) => {
  // Cancel previous request
  abortControllerRef.current.abort();
  abortControllerRef.current = new AbortController();
  
  try {
    setLoading(true);
    const response = await fetch('/api/execute', {
      method: 'POST',
      body: JSON.stringify({ code }),
      signal: abortControllerRef.current.signal
    });

    if (!response.ok) throw new Error('Request failed');
    
    // Only update state if response is current
    const result = await response.json();
    setOutput(result);
  } catch (err) {
    if (err.name !== 'AbortError') {
      setError(`Execution failed: ${err.message}`);
    }
  } finally {
    setLoading(false);
  }
};

// Cleanup on unmount
useEffect(() => {
  return () => abortControllerRef.current.abort();
}, []);

  return (
    <div className="bg-white dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-700 overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between p-4 bg-neutral-50 dark:bg-neutral-800 border-b border-neutral-200 dark:border-neutral-700">
        <div className="flex items-center space-x-4">
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <span className="text-sm font-mono text-neutral-600 dark:text-neutral-300">
            main.{language}
          </span>
        </div>
        
        <div className="flex items-center space-x-2">
          <button
            onClick={copyCode}
            className="p-2 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700 rounded-lg transition-colors"
            title="Copy code"
          >
            <Copy className="h-4 w-4" />
          </button>
          <button
            onClick={downloadCode}
            className="p-2 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700 rounded-lg transition-colors"
            title="Download code"
          >
            <Download className="h-4 w-4" />
          </button>
          <button className="p-2 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700 rounded-lg transition-colors">
            <Settings className="h-4 w-4" />
          </button>
          <button className="p-2 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700 rounded-lg transition-colors">
            <Maximize2 className="h-4 w-4" />
          </button>
          <button
            onClick={runCode}
            disabled={isRunning || readOnly}
            className="flex items-center space-x-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <Play className="h-4 w-4" />
            <span>{isRunning ? 'Running...' : 'Run'}</span>
          </button>
        </div>
      </div>

      {/* Code Area */}
      <div className="flex">
        <div className="flex-1">
          <textarea
            value={code}
            onChange={handleCodeChange}
            readOnly={readOnly}
            className="w-full h-96 p-4 font-mono text-sm bg-neutral-900 text-neutral-100 resize-none focus:outline-none"
            placeholder={`Write your ${language} code here...`}
            spellCheck={false}
          />
        </div>
        
        {/* Output Panel */}
        <div className="w-1/3 border-l border-neutral-200 dark:border-neutral-700">
          <div className="flex items-center justify-between p-3 bg-neutral-50 dark:bg-neutral-800 border-b border-neutral-200 dark:border-neutral-700">
            <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Output</span>
            <div className="flex items-center space-x-3">
              {executionTime && (
                <span className="text-neutral-500 text-xs">
                  {executionTime}ms
                </span>
              )}
              <div className="flex items-center space-x-1">
                <div className={`w-2 h-2 rounded-full ${
                  isRunning ? 'bg-yellow-500' : hasError ? 'bg-red-500' : 'bg-green-500'
                }`}></div>
                <span className={`text-xs ${
                  isRunning ? 'text-yellow-600' : hasError ? 'text-red-600' : 'text-green-600'
                }`}>
                  {isRunning ? 'Running' : hasError ? 'Error' : 'Ready'}
                </span>
              </div>
            </div>
          </div>
          <div className="p-4 h-96 overflow-y-auto bg-neutral-900">
            {isRunning ? (
              <div className="text-yellow-400 flex items-center space-x-2">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-yellow-400"></div>
                <span className="font-mono text-sm">Executing...</span>
              </div>
            ) : (
              <pre className={`whitespace-pre-wrap font-mono text-sm ${hasError ? 'text-red-400' : 'text-green-400'}`}>
                {output || 'Run your code to see output...'}
              </pre>
            )}
            
            {hasError && !isRunning && (
              <div className="mt-3 flex items-start space-x-2 text-xs text-red-400">
                <AlertCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Check your code for syntax errors and try again.</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeEditor;