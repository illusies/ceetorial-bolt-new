import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import { GitCompare, Copy, Play, ArrowRight } from 'lucide-react';

const Compare: React.FC = () => {
  const [selectedLanguages, setSelectedLanguages] = React.useState(['c', 'cpp']);
  const [selectedConcept, setSelectedConcept] = React.useState('hello-world');

  const languages = [
    { id: 'c', name: 'C', color: 'bg-blue-500', textColor: 'text-blue-600' },
    { id: 'cpp', name: 'C++', color: 'bg-purple-500', textColor: 'text-purple-600' },
    { id: 'rust', name: 'Rust', color: 'bg-orange-500', textColor: 'text-orange-600' },
    { id: 'go', name: 'Go', color: 'bg-cyan-500', textColor: 'text-cyan-600' },
    { id: 'python', name: 'Python', color: 'bg-green-500', textColor: 'text-green-600' },
    { id: 'javascript', name: 'JavaScript', color: 'bg-yellow-500', textColor: 'text-yellow-600' },
  ];

  const concepts = [
    { id: 'hello-world', name: 'Hello World' },
    { id: 'variables', name: 'Variables' },
    { id: 'functions', name: 'Functions' },
    { id: 'loops', name: 'Loops' },
    { id: 'arrays', name: 'Arrays' },
    { id: 'structs', name: 'Structures/Classes' },
  ];

  const codeExamples = {
    'hello-world': {
      c: `#include <stdio.h>

int main() {
    printf("Hello, World!\\n");
    return 0;
}`,
      cpp: `#include <iostream>

int main() {
    std::cout << "Hello, World!" << std::endl;
    return 0;
}`,
      rust: `fn main() {
    println!("Hello, World!");
}`,
      go: `package main

import "fmt"

func main() {
    fmt.Println("Hello, World!")
}`,
      python: `def main():
    print("Hello, World!")

if __name__ == "__main__":
    main()`,
      javascript: `function main() {
    console.log("Hello, World!");
}

main();`,
    },
    variables: {
      c: `#include <stdio.h>

int main() {
    int age = 25;
    float height = 5.9;
    char grade = 'A';
    
    printf("Age: %d\\n", age);
    printf("Height: %.1f\\n", height);
    printf("Grade: %c\\n", grade);
    
    return 0;
}`,
      cpp: `#include <iostream>
#include <string>

int main() {
    int age = 25;
    double height = 5.9;
    char grade = 'A';
    std::string name = "John";
    
    std::cout << "Name: " << name << std::endl;
    std::cout << "Age: " << age << std::endl;
    std::cout << "Height: " << height << std::endl;
    std::cout << "Grade: " << grade << std::endl;
    
    return 0;
}`,
      rust: `fn main() {
    let age: i32 = 25;
    let height: f64 = 5.9;
    let grade: char = 'A';
    let name: &str = "John";
    
    println!("Name: {}", name);
    println!("Age: {}", age);
    println!("Height: {:.1}", height);
    println!("Grade: {}", grade);
}`,
    },
  };

  const toggleLanguage = (langId: string) => {
    if (selectedLanguages.includes(langId)) {
      if (selectedLanguages.length > 1) {
        setSelectedLanguages(selectedLanguages.filter(id => id !== langId));
      }
    } else if (selectedLanguages.length < 3) {
      setSelectedLanguages([...selectedLanguages, langId]);
    }
  };

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900">
      <Navbar variant="app" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <GitCompare className="h-8 w-8 text-primary-600" />
            <h1 className="text-3xl font-bold text-neutral-900 dark:text-white">Language Comparison</h1>
          </div>
          <p className="text-neutral-600 dark:text-neutral-300">
            Compare syntax and concepts across different programming languages to understand their similarities and differences.
          </p>
        </div>

        {/* Language Selection */}
        <div className="bg-white dark:bg-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-700 p-6 mb-8">
          <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">Select Languages to Compare</h2>
          <div className="flex flex-wrap gap-3">
            {languages.map((lang) => (
              <button
                key={lang.id}
                onClick={() => toggleLanguage(lang.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg border-2 transition-all ${
                  selectedLanguages.includes(lang.id)
                    ? `${lang.color} text-white border-transparent`
                    : 'bg-white dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 border-neutral-300 dark:border-neutral-600 hover:border-neutral-400 dark:hover:border-neutral-500'
                }`}
              >
                <span className="font-medium">{lang.name}</span>
                {selectedLanguages.includes(lang.id) && (
                  <span className="text-xs bg-white/20 px-2 py-1 rounded">
                    {selectedLanguages.indexOf(lang.id) + 1}
                  </span>
                )}
              </button>
            ))}
          </div>
          <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-2">
            Select 1-3 languages to compare. Currently selected: {selectedLanguages.length}/3
          </p>
        </div>

        {/* Concept Selection */}
        <div className="bg-white dark:bg-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-700 p-6 mb-8">
          <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">Choose a Concept</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {concepts.map((concept) => (
              <button
                key={concept.id}
                onClick={() => setSelectedConcept(concept.id)}
                className={`p-3 rounded-lg border-2 text-sm font-medium transition-all ${
                  selectedConcept === concept.id
                    ? 'bg-primary-600 text-white border-primary-600'
                    : 'bg-white dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 border-neutral-300 dark:border-neutral-600 hover:border-primary-300 dark:hover:border-primary-500'
                }`}
              >
                {concept.name}
              </button>
            ))}
          </div>
        </div>

        {/* Code Comparison */}
        <div className="grid gap-6" style={{ gridTemplateColumns: `repeat(${selectedLanguages.length}, 1fr)` }}>
          {selectedLanguages.map((langId) => {
            const lang = languages.find(l => l.id === langId)!;
            const code = codeExamples[selectedConcept as keyof typeof codeExamples]?.[langId as keyof typeof codeExamples['hello-world']] || '// Code example not available';
            
            return (
              <div key={langId} className="bg-white dark:bg-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-700 overflow-hidden">
                {/* Header */}
                <div className={`${lang.color} p-4 text-white`}>
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">{lang.name}</h3>
                    <div className="flex items-center space-x-2">
                      <button className="p-1 hover:bg-white/20 rounded">
                        <Copy className="h-4 w-4" />
                      </button>
                      <button className="p-1 hover:bg-white/20 rounded">
                        <Play className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Code */}
                <div className="bg-neutral-900 p-4">
                  <pre className="text-sm text-neutral-300 font-mono overflow-x-auto">
                    <code>{code}</code>
                  </pre>
                </div>

                {/* Info */}
                <div className="p-4">
                  <div className="text-sm text-neutral-600 dark:text-neutral-300">
                    {langId === 'c' && 'Classic C approach with explicit type declarations and manual memory management.'}
                    {langId === 'cpp' && 'Object-oriented evolution with namespaces and improved I/O.'}
                    {langId === 'rust' && 'Memory-safe systems programming with zero-cost abstractions.'}
                    {langId === 'go' && 'Simple, concurrent programming with garbage collection.'}
                    {langId === 'python' && 'High-level, readable syntax with dynamic typing.'}
                    {langId === 'javascript' && 'Dynamic, event-driven language for web development.'}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Learning Path Suggestion */}
        <div className="mt-12 bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
            Ready to dive deeper?
          </h3>
          <p className="text-neutral-600 dark:text-neutral-300 mb-6 max-w-2xl mx-auto">
            Understanding these differences is crucial for choosing the right language for your project. 
            Start with our structured learning paths to master each language.
          </p>
          <Link 
            to="/courses"
            className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
          >
            Explore Learning Paths
            <ArrowRight className="h-5 w-5 ml-2" />
          </Link>
        </div>
      </div>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default Compare;