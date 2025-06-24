#include <ctime>

extern "C" {
    EMSCRIPTEN_KEEPALIVE
    void seed_rng() {
        srand(time(NULL));  // Or use EM_ASM for JS time
    }
}

// Later in initialization:
int main() {
    seed_rng();
    // ... rest of setup
}