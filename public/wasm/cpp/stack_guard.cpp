#include <emscripten.h>

thread_local int call_depth = 0;
constexpr int MAX_DEPTH = 1000;

class StackGuard {
public:
    StackGuard() {
        if (++call_depth > MAX_DEPTH) {
            EM_ASM({ throw new Error("Stack depth limit exceeded") });
        }
    }
    ~StackGuard() { --call_depth; }
};

// Usage in functions:
void myFunction() {
    StackGuard guard;
    // ... function logic
}