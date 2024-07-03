// The Knapsack Problem is a problem in combinatorial optimization. Given a set of items, each with a weight and a value, determine the number of each item to include in a collection so that the total weight is less than or equal to a given limit and the total value is as large as possible.

// Steps:

// 1 - Create a 2D array dp where dp[i][w] represents the maximum value that can be obtained with the first i items and a weight limit w.
// 2 - Fill the array based on the following conditions:
// If the weight of the item i is more than w, then dp[i][w] = dp[i-1][w].
// Otherwise, dp[i][w] = max(dp[i-1][w], dp[i-1][w - weight[i]] + value[i]).

function knapsack(values, weights, capacity) {
    let n = values.length;
    let dp = Array(n + 1).fill().map(() => Array(capacity + 1).fill(0));

    for (let i = 1; i <= n; i++) {
        for (let w = 0; w <= capacity; w++) {
            if (weights[i - 1] <= w) {
                dp[i][w] = Math.max(dp[i - 1][w], dp[i - 1][w - weights[i - 1]] + values[i - 1]);
            } else {
                dp[i][w] = dp[i - 1][w];
            }
        }
    }

    return dp[n][capacity];
}

// Example usage
let values = [60, 100, 120];
let weights = [10, 20, 30];
let capacity = 50;
console.log(knapsack(values, weights, capacity)); // 220