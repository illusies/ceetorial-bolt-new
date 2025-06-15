import React, { useState } from 'react';
import { Play, Copy, Download, Settings, Maximize2 } from 'lucide-react';

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

  const handleCodeChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newCode = e.target.value;
    setCode(newCode);
    onCodeChange?.(newCode);
  };

  const runCode = async () => {
    setIsRunning(true);
    setOutput('Compiling and running...');
    
    // Simulate code execution
    setTimeout(() => {
      setOutput(`Hello, Ceetorial!\nProgram executed successfully.\nExecution time: 0.023s`);
      setIsRunning(false);
    }, 1500);
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
          <div className="p-3 bg-neutral-50 dark:bg-neutral-800 border-b border-neutral-200 dark:border-neutral-700">
            <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Output</span>
          </div>
          <div className="p-4 h-96 overflow-y-auto bg-neutral-900 text-green-400 font-mono text-sm">
            <pre className="whitespace-pre-wrap">{output || 'Run your code to see output...'}</pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeEditor;