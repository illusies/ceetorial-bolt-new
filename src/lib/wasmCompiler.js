// Add to C++ compilation flags
-fstack-usage -Wstack-usage=4096

// Instrumentation in code
#define MAX_STACK_DEPTH 1000
static int callDepth = 0;

struct StackGuard {
    StackGuard() { 
        if (++callDepth > MAX_STACK_DEPTH) 
            throw std::runtime_error("Stack depth limit exceeded");
    }
    ~StackGuard() { --callDepth; }
};

// Usage in functions
void criticalFunction() {
    StackGuard guard;
    // Function logic
}