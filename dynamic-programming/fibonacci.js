// Dynamic programming is an optimization technique used to solve complex problems by breaking them down into simpler subproblems. It is particularly useful for problems that exhibit overlapping subproblems and optimal substructure properties.

// The Fibonacci sequence is a classic example of dynamic programming. The sequence is defined as:
//   F(n) = F(n-1) + F(n-2)
// with base cases:
//   F(0) = 0
//   F(1) = 1

// Using dynamic programming, we can optimize the computation by storing the results of subproblems.

function fibonacci(n) {
    if (n <= 1) return n;
    let fib = [0, 1];

    for (let index = 2; index <= n; index++) {
        fib[index] = fib[index - 1] + fib[index - 2];
    }

    return fib[n];
}

// Example usage
console.log(fibonacci(10)); // 55