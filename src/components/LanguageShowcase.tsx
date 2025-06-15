import React from 'react';
import { ExternalLink } from 'lucide-react';

const LanguageShowcase: React.FC = () => {
  const languages = [
    {
      name: 'C',
      description: 'The foundation of systems programming',
      color: 'bg-blue-600',
      textColor: 'text-blue-600',
      bgColor: 'bg-blue-50',
      code: `#include <stdio.h>

int main() {
    printf("Hello, World!\\n");
    return 0;
}`,
      features: ['Memory Management', 'Pointers', 'System Calls', 'Performance'],
    },
    {
      name: 'C++',
      description: 'Object-oriented evolution of C',
      color: 'bg-purple-600',
      textColor: 'text-purple-600',
      bgColor: 'bg-purple-50',
      code: `#include <iostream>

class HelloWorld {
public:
    void greet() {
        std::cout << "Hello, World!" << std::endl;
    }
};`,
      features: ['OOP', 'Templates', 'STL', 'RAII'],
    },
    {
      name: 'Rust',
      description: 'Memory-safe systems programming',
      color: 'bg-orange-600',
      textColor: 'text-orange-600',
      bgColor: 'bg-orange-50',
      code: `fn main() {
    let greeting = "Hello, World!";
    println!("{}", greeting);
    
    // Memory safety guaranteed!
}`,
      features: ['Memory Safety', 'Zero-cost Abstractions', 'Concurrency', 'Performance'],
    },
    {
      name: 'Go',
      description: 'Simplicity meets concurrency',
      color: 'bg-cyan-600',
      textColor: 'text-cyan-600',
      bgColor: 'bg-cyan-50',
      code: `package main

import "fmt"

func main() {
    fmt.Println("Hello, World!")
    
    // Simple and efficient
}`,
      features: ['Goroutines', 'Channels', 'Simple Syntax', 'Fast Compilation'],
    },
    {
      name: 'Python',
      description: 'Readable and versatile',
      color: 'bg-green-600',
      textColor: 'text-green-600',
      bgColor: 'bg-green-50',
      code: `def main():
    print("Hello, World!")
    
    # Pythonic and clean

if __name__ == "__main__":
    main()`,
      features: ['Readable Syntax', 'Rich Libraries', 'Rapid Development', 'Versatility'],
    },
    {
      name: 'JavaScript',
      description: 'The language of the web',
      color: 'bg-yellow-600',
      textColor: 'text-yellow-600',
      bgColor: 'bg-yellow-50',
      code: `function greet() {
    console.log("Hello, World!");
}

greet();

// Dynamic and flexible`,
      features: ['Event-driven', 'Asynchronous', 'Web Development', 'Dynamic Typing'],
    },
    {
      name: 'Java',
      description: 'Write once, run anywhere',
      color: 'bg-red-600',
      textColor: 'text-red-600',
      bgColor: 'bg-red-50',
      code: `public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`,
      features: ['Platform Independent', 'Object-Oriented', 'Enterprise Ready', 'Strong Typing'],
    },
    {
      name: 'Swift',
      description: 'Modern language for Apple platforms',
      color: 'bg-indigo-600',
      textColor: 'text-indigo-600',
      bgColor: 'bg-indigo-50',
      code: `import Foundation

func greetWorld() {
    print("Hello, World!")
}

greetWorld()`,
      features: ['Type Safety', 'Performance', 'Modern Syntax', 'iOS Development'],
    },
    {
      name: 'Kotlin',
      description: 'Modern JVM language',
      color: 'bg-pink-600',
      textColor: 'text-pink-600',
      bgColor: 'bg-pink-50',
      code: `fun main() {
    println("Hello, World!")
    
    // Concise and expressive
}`,
      features: ['Interoperable', 'Null Safety', 'Concise', 'Android Development'],
    },
  ];

  return (
    <section id="languages" className="py-20 bg-neutral-50 dark:bg-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-neutral-900 dark:text-white mb-4">
            Master Multiple Languages
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
            Learn how concepts evolve across different programming languages. 
            Understand the relationships and differences between C and its descendants.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {languages.map((lang, index) => (
            <div
              key={index}
              className="bg-white dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-700 overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              {/* Header */}
              <div className={`${lang.bgColor} dark:bg-opacity-20 p-6 border-b border-neutral-200 dark:border-neutral-700`}>
                <div className="flex items-center justify-between mb-2">
                  <h3 className={`text-2xl font-bold ${lang.textColor}`}>{lang.name}</h3>
                  <ExternalLink className={`h-5 w-5 ${lang.textColor}`} />
                </div>
                <p className="text-neutral-600 dark:text-neutral-300">{lang.description}</p>
              </div>

              {/* Code Sample */}
              <div className="p-4 bg-neutral-900">
                <pre className="text-sm text-neutral-300 font-mono overflow-x-auto">
                  <code>{lang.code}</code>
                </pre>
              </div>

              {/* Features */}
              <div className="p-6">
                <h4 className="font-semibold text-neutral-900 dark:text-white mb-3">Key Features:</h4>
                <div className="flex flex-wrap gap-2">
                  {lang.features.map((feature, featureIndex) => (
                    <span
                      key={featureIndex}
                      className={`px-3 py-1 ${lang.bgColor} dark:bg-opacity-20 ${lang.textColor} text-sm rounded-full font-medium`}
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LanguageShowcase;