export interface Lesson {
  id: string;
  title: string;
  description: string;
  content: string;
  code: string;
  expectedOutput: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  estimatedTime: number; // in minutes
  prerequisites?: string[];
  nextLesson?: string;
  concepts: string[];
}

export interface Course {
  id: string;
  name: string;
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  lessons: Lesson[];
  totalLessons: number;
  estimatedHours: number;
  certificate: {
    name: string;
    description: string;
    requirements: string[];
  };
}

export const cCourse: Course = {
  id: 'c-programming',
  name: 'C Programming Fundamentals',
  description: 'Master the fundamentals of C programming from basic syntax to advanced memory management',
  difficulty: 'beginner',
  totalLessons: 24,
  estimatedHours: 40,
  certificate: {
    name: 'C Programming Fundamentals Certificate',
    description: 'Demonstrates proficiency in C programming fundamentals including variables, functions, pointers, and memory management',
    requirements: [
      'Complete all 24 lessons',
      'Pass all coding exercises',
      'Complete final project',
      'Score 80% or higher on final assessment'
    ]
  },
  lessons: [
    {
      id: 'c-001',
      title: 'Introduction to C Programming',
      description: 'Learn about the history of C, its importance, and write your first program',
      difficulty: 'beginner',
      estimatedTime: 30,
      concepts: ['History of C', 'Compilation process', 'Hello World'],
      content: `
# Introduction to C Programming

Welcome to C programming! C is one of the most influential programming languages ever created. Developed by Dennis Ritchie at Bell Labs in the early 1970s, C has been the foundation for many modern programming languages.

## Why Learn C?

1. **Foundation Language**: Understanding C helps you learn other languages more easily
2. **System Programming**: C is used for operating systems, embedded systems, and system software
3. **Performance**: C provides direct control over hardware and memory
4. **Portability**: C programs can run on virtually any platform

## Your First C Program

Every C program starts with the \`main\` function. Let's write the traditional "Hello, World!" program:

\`\`\`c
#include <stdio.h>

int main() {
    printf("Hello, World!\\n");
    return 0;
}
\`\`\`

### Breaking it down:

- \`#include <stdio.h>\`: Includes the standard input/output library
- \`int main()\`: The main function where program execution begins
- \`printf()\`: Function to print text to the screen
- \`return 0;\`: Indicates successful program completion

## Compilation Process

C is a compiled language, meaning your source code must be translated into machine code before execution:

1. **Preprocessing**: Handle directives like \`#include\`
2. **Compilation**: Convert C code to assembly language
3. **Assembly**: Convert assembly to machine code
4. **Linking**: Combine object files and libraries

Try running the code example to see your first C program in action!
      `,
      code: `#include <stdio.h>

int main() {
    printf("Hello, World!\\n");
    return 0;
}`,
      expectedOutput: 'Hello, World!\n',
      nextLesson: 'c-002'
    },
    {
      id: 'c-002',
      title: 'Variables and Data Types',
      description: 'Learn about different data types in C and how to declare and use variables',
      difficulty: 'beginner',
      estimatedTime: 45,
      prerequisites: ['c-001'],
      concepts: ['Data types', 'Variables', 'Constants', 'Type conversion'],
      content: `
# Variables and Data Types

In C, every variable must be declared with a specific data type before it can be used. This tells the compiler how much memory to allocate and how to interpret the data.

## Basic Data Types

### Integer Types
- \`int\`: Standard integer (usually 32 bits)
- \`short\`: Short integer (usually 16 bits)
- \`long\`: Long integer (usually 64 bits)
- \`char\`: Character (8 bits, can store ASCII values)

### Floating-Point Types
- \`float\`: Single precision (32 bits)
- \`double\`: Double precision (64 bits)

## Variable Declaration

\`\`\`c
int age = 25;
float height = 5.9;
char grade = 'A';
double pi = 3.14159265359;
\`\`\`

## Constants

You can create constants using the \`const\` keyword:

\`\`\`c
const int MAX_STUDENTS = 100;
const float PI = 3.14159;
\`\`\`

## Type Conversion

C allows both implicit and explicit type conversion:

\`\`\`c
int a = 10;
float b = 3.5;
float result = a + b;  // Implicit conversion
int truncated = (int)b;  // Explicit conversion (casting)
\`\`\`

Try the example below to see different data types in action!
      `,
      code: `#include <stdio.h>

int main() {
    // Integer variables
    int age = 25;
    short year = 2024;
    long population = 8000000000L;
    
    // Floating-point variables
    float height = 5.9f;
    double pi = 3.14159265359;
    
    // Character variable
    char grade = 'A';
    
    // Display the variables
    printf("Age: %d\\n", age);
    printf("Year: %hd\\n", year);
    printf("Population: %ld\\n", population);
    printf("Height: %.1f feet\\n", height);
    printf("Pi: %.5f\\n", pi);
    printf("Grade: %c\\n", grade);
    
    // Size of data types
    printf("\\nSize of int: %zu bytes\\n", sizeof(int));
    printf("Size of float: %zu bytes\\n", sizeof(float));
    printf("Size of double: %zu bytes\\n", sizeof(double));
    printf("Size of char: %zu bytes\\n", sizeof(char));
    
    return 0;
}`,
      expectedOutput: `Age: 25
Year: 2024
Population: 8000000000
Height: 5.9 feet
Pi: 3.14159
Grade: A

Size of int: 4 bytes
Size of float: 4 bytes
Size of double: 8 bytes
Size of char: 1 bytes`,
      nextLesson: 'c-003'
    },
    {
      id: 'c-003',
      title: 'Input and Output',
      description: 'Learn how to get input from users and display output using scanf and printf',
      difficulty: 'beginner',
      estimatedTime: 40,
      prerequisites: ['c-002'],
      concepts: ['printf', 'scanf', 'Format specifiers', 'Input validation'],
      content: `
# Input and Output in C

C provides several functions for input and output operations. The most commonly used are \`printf()\` for output and \`scanf()\` for input.

## Output with printf()

\`printf()\` is used to display formatted output. It uses format specifiers to determine how to display different data types:

### Common Format Specifiers:
- \`%d\` or \`%i\`: Integer
- \`%f\`: Float
- \`%lf\`: Double
- \`%c\`: Character
- \`%s\`: String
- \`%x\`: Hexadecimal
- \`%o\`: Octal

### Examples:
\`\`\`c
int num = 42;
float price = 19.99;
printf("Number: %d, Price: $%.2f\\n", num, price);
\`\`\`

## Input with scanf()

\`scanf()\` reads formatted input from the user. It uses the same format specifiers as \`printf()\`.

### Important Notes:
- Use \`&\` (address operator) with variables (except for strings)
- \`scanf()\` stops reading at whitespace for strings
- Always validate input in real programs

### Examples:
\`\`\`c
int age;
float salary;
printf("Enter your age: ");
scanf("%d", &age);
printf("Enter your salary: ");
scanf("%f", &salary);
\`\`\`

## Formatting Output

You can control the formatting of output:

\`\`\`c
printf("%5d\\n", 42);        // Right-aligned in 5 spaces
printf("%-5d\\n", 42);       // Left-aligned in 5 spaces
printf("%.2f\\n", 3.14159);  // 2 decimal places
printf("%08d\\n", 42);       // Pad with zeros
\`\`\`

Try the interactive example below!
      `,
      code: `#include <stdio.h>

int main() {
    int age;
    float height;
    char initial;
    
    // Get user input
    printf("=== Personal Information ===\\n");
    printf("Enter your age: ");
    scanf("%d", &age);
    
    printf("Enter your height in feet: ");
    scanf("%f", &height);
    
    printf("Enter your first initial: ");
    scanf(" %c", &initial);  // Note the space before %c
    
    // Display formatted output
    printf("\\n=== Your Information ===\\n");
    printf("Age: %d years old\\n", age);
    printf("Height: %.1f feet\\n", height);
    printf("Initial: %c\\n", initial);
    
    // Demonstrate formatting
    printf("\\n=== Formatting Examples ===\\n");
    printf("Age in 5 spaces: '%5d'\\n", age);
    printf("Age left-aligned: '%-5d'\\n", age);
    printf("Height with 3 decimals: %.3f\\n", height);
    
    return 0;
}`,
      expectedOutput: `=== Personal Information ===
Enter your age: 25
Enter your height in feet: 5.9
Enter your first initial: J

=== Your Information ===
Age: 25 years old
Height: 5.9 feet
Initial: J

=== Formatting Examples ===
Age in 5 spaces: '   25'
Age left-aligned: '25   '
Height with 3 decimals: 5.900`,
      nextLesson: 'c-004'
    },
    {
      id: 'c-004',
      title: 'Operators and Expressions',
      description: 'Learn about arithmetic, relational, logical, and other operators in C',
      difficulty: 'beginner',
      estimatedTime: 50,
      prerequisites: ['c-003'],
      concepts: ['Arithmetic operators', 'Relational operators', 'Logical operators', 'Assignment operators', 'Operator precedence'],
      content: `
# Operators and Expressions

Operators are symbols that perform operations on variables and values. C provides several types of operators.

## Arithmetic Operators

- \`+\`: Addition
- \`-\`: Subtraction
- \`*\`: Multiplication
- \`/\`: Division
- \`%\`: Modulus (remainder)
- \`++\`: Increment
- \`--\`: Decrement

### Examples:
\`\`\`c
int a = 10, b = 3;
printf("%d + %d = %d\\n", a, b, a + b);  // 13
printf("%d / %d = %d\\n", a, b, a / b);  // 3 (integer division)
printf("%d %% %d = %d\\n", a, b, a % b); // 1 (remainder)
\`\`\`

## Relational Operators

- \`==\`: Equal to
- \`!=\`: Not equal to
- \`>\`: Greater than
- \`<\`: Less than
- \`>=\`: Greater than or equal to
- \`<=\`: Less than or equal to

## Logical Operators

- \`&&\`: Logical AND
- \`||\`: Logical OR
- \`!\`: Logical NOT

### Examples:
\`\`\`c
int x = 5, y = 10;
if (x > 0 && y > 0) {
    printf("Both numbers are positive\\n");
}
\`\`\`

## Assignment Operators

- \`=\`: Simple assignment
- \`+=\`: Add and assign
- \`-=\`: Subtract and assign
- \`*=\`: Multiply and assign
- \`/=\`: Divide and assign
- \`%=\`: Modulus and assign

## Operator Precedence

Operators have different precedence levels:

1. \`()\`: Parentheses (highest)
2. \`++\`, \`--\`: Increment/Decrement
3. \`*\`, \`/\`, \`%\`: Multiplication, Division, Modulus
4. \`+\`, \`-\`: Addition, Subtraction
5. \`<\`, \`<=\`, \`>\`, \`>=\`: Relational
6. \`==\`, \`!=\`: Equality
7. \`&&\`: Logical AND
8. \`||\`: Logical OR
9. \`=\`, \`+=\`, etc.: Assignment (lowest)

Use parentheses to override precedence when needed!
      `,
      code: `#include <stdio.h>

int main() {
    int a = 15, b = 4, c = 3;
    
    printf("=== Arithmetic Operators ===\\n");
    printf("a = %d, b = %d, c = %d\\n\\n", a, b, c);
    
    printf("Addition: %d + %d = %d\\n", a, b, a + b);
    printf("Subtraction: %d - %d = %d\\n", a, b, a - b);
    printf("Multiplication: %d * %d = %d\\n", a, b, a * b);
    printf("Division: %d / %d = %d\\n", a, b, a / b);
    printf("Modulus: %d %% %d = %d\\n", a, b, a % b);
    
    printf("\\n=== Increment/Decrement ===\\n");
    int x = 5;
    printf("x = %d\\n", x);
    printf("x++ = %d (post-increment)\\n", x++);
    printf("x = %d (after post-increment)\\n", x);
    printf("++x = %d (pre-increment)\\n", ++x);
    
    printf("\\n=== Relational Operators ===\\n");
    printf("%d == %d: %d\\n", a, b, a == b);
    printf("%d != %d: %d\\n", a, b, a != b);
    printf("%d > %d: %d\\n", a, b, a > b);
    printf("%d < %d: %d\\n", a, b, a < b);
    
    printf("\\n=== Logical Operators ===\\n");
    printf("(%d > %d) && (%d > %d): %d\\n", a, b, b, c, (a > b) && (b > c));
    printf("(%d < %d) || (%d > %d): %d\\n", a, b, a, c, (a < b) || (a > c));
    printf("!(%d > %d): %d\\n", a, b, !(a > b));
    
    printf("\\n=== Assignment Operators ===\\n");
    int y = 10;
    printf("y = %d\\n", y);
    y += 5;
    printf("After y += 5: %d\\n", y);
    y *= 2;
    printf("After y *= 2: %d\\n", y);
    
    printf("\\n=== Operator Precedence ===\\n");
    int result1 = 2 + 3 * 4;
    int result2 = (2 + 3) * 4;
    printf("2 + 3 * 4 = %d\\n", result1);
    printf("(2 + 3) * 4 = %d\\n", result2);
    
    return 0;
}`,
      expectedOutput: `=== Arithmetic Operators ===
a = 15, b = 4, c = 3

Addition: 15 + 4 = 19
Subtraction: 15 - 4 = 11
Multiplication: 15 * 4 = 60
Division: 15 / 4 = 3
Modulus: 15 % 4 = 3

=== Increment/Decrement ===
x = 5
x++ = 5 (post-increment)
x = 6 (after post-increment)
++x = 7 (pre-increment)

=== Relational Operators ===
15 == 4: 0
15 != 4: 1
15 > 4: 1
15 < 4: 0

=== Logical Operators ===
(15 > 4) && (4 > 3): 1
(15 < 4) || (15 > 3): 1
!(15 > 4): 0

=== Assignment Operators ===
y = 10
After y += 5: 15
After y *= 2: 30

=== Operator Precedence ===
2 + 3 * 4 = 14
(2 + 3) * 4 = 20`,
      nextLesson: 'c-005'
    },
    {
      id: 'c-005',
      title: 'Control Structures - Conditional Statements',
      description: 'Learn how to make decisions in your programs using if, else if, else, and switch statements',
      difficulty: 'beginner',
      estimatedTime: 55,
      prerequisites: ['c-004'],
      concepts: ['if statement', 'else if', 'else', 'switch statement', 'Conditional operator', 'Nested conditions'],
      content: `
# Control Structures - Conditional Statements

Conditional statements allow your program to make decisions and execute different code based on certain conditions.

## The if Statement

The basic syntax of an if statement:

\`\`\`c
if (condition) {
    // Code to execute if condition is true
}
\`\`\`

## if-else Statement

\`\`\`c
if (condition) {
    // Code if condition is true
} else {
    // Code if condition is false
}
\`\`\`

## if-else if-else Chain

\`\`\`c
if (condition1) {
    // Code for condition1
} else if (condition2) {
    // Code for condition2
} else {
    // Code if no conditions are true
}
\`\`\`

## switch Statement

The switch statement is useful when you have multiple possible values for a variable:

\`\`\`c
switch (variable) {
    case value1:
        // Code for value1
        break;
    case value2:
        // Code for value2
        break;
    default:
        // Code if no cases match
        break;
}
\`\`\`

### Important Notes:
- Always use \`break\` to prevent fall-through
- \`default\` case is optional but recommended
- Cases must be constant values

## Conditional (Ternary) Operator

A shorthand for simple if-else statements:

\`\`\`c
result = (condition) ? value_if_true : value_if_false;
\`\`\`

## Nested Conditions

You can nest conditional statements inside each other:

\`\`\`c
if (age >= 18) {
    if (hasLicense) {
        printf("Can drive\\n");
    } else {
        printf("Need a license\\n");
    }
} else {
    printf("Too young to drive\\n");
}
\`\`\`

Try the example below to see conditional statements in action!
      `,
      code: `#include <stdio.h>

int main() {
    int score, choice;
    char grade;
    
    printf("=== Grade Calculator ===\\n");
    printf("Enter your test score (0-100): ");
    scanf("%d", &score);
    
    // if-else if-else chain
    if (score >= 90) {
        grade = 'A';
        printf("Excellent work!\\n");
    } else if (score >= 80) {
        grade = 'B';
        printf("Good job!\\n");
    } else if (score >= 70) {
        grade = 'C';
        printf("Satisfactory.\\n");
    } else if (score >= 60) {
        grade = 'D';
        printf("Needs improvement.\\n");
    } else {
        grade = 'F';
        printf("Please study harder.\\n");
    }
    
    printf("Your grade: %c\\n\\n", grade);
    
    // Nested if statements
    if (score >= 60) {
        if (score >= 90) {
            printf("You qualify for honors!\\n");
        } else {
            printf("You passed the course.\\n");
        }
    } else {
        printf("You need to retake the exam.\\n");
    }
    
    printf("\\n=== Menu System ===\\n");
    printf("1. View grades\\n");
    printf("2. Calculate average\\n");
    printf("3. Exit\\n");
    printf("Enter your choice (1-3): ");
    scanf("%d", &choice);
    
    // switch statement
    switch (choice) {
        case 1:
            printf("Displaying grades...\\n");
            break;
        case 2:
            printf("Calculating average...\\n");
            break;
        case 3:
            printf("Goodbye!\\n");
            break;
        default:
            printf("Invalid choice!\\n");
            break;
    }
    
    // Conditional operator example
    printf("\\n=== Pass/Fail Status ===\\n");
    printf("Status: %s\\n", (score >= 60) ? "PASS" : "FAIL");
    
    // Complex condition
    if (score >= 70 && score <= 100) {
        printf("Score is in the acceptable range.\\n");
    } else if (score < 0 || score > 100) {
        printf("Invalid score entered!\\n");
    } else {
        printf("Score is below acceptable range.\\n");
    }
    
    return 0;
}`,
      expectedOutput: `=== Grade Calculator ===
Enter your test score (0-100): 85
Good job!
Your grade: B

You passed the course.

=== Menu System ===
1. View grades
2. Calculate average
3. Exit
Enter your choice (1-3): 2
Calculating average...

=== Pass/Fail Status ===
Status: PASS
Score is in the acceptable range.`,
      nextLesson: 'c-006'
    }
    // Add more lessons here - this is just the first 5 of 24
  ]
};

export const courses: Course[] = [cCourse];

export function getLessonById(courseId: string, lessonId: string): Lesson | undefined {
  const course = courses.find(c => c.id === courseId);
  return course?.lessons.find(l => l.id === lessonId);
}

export function getNextLesson(courseId: string, currentLessonId: string): Lesson | undefined {
  const course = courses.find(c => c.id === courseId);
  if (!course) return undefined;
  
  const currentIndex = course.lessons.findIndex(l => l.id === currentLessonId);
  if (currentIndex === -1 || currentIndex === course.lessons.length - 1) return undefined;
  
  return course.lessons[currentIndex + 1];
}

export function getPreviousLesson(courseId: string, currentLessonId: string): Lesson | undefined {
  const course = courses.find(c => c.id === courseId);
  if (!course) return undefined;
  
  const currentIndex = course.lessons.findIndex(l => l.id === currentLessonId);
  if (currentIndex <= 0) return undefined;
  
  return course.lessons[currentIndex - 1];
}