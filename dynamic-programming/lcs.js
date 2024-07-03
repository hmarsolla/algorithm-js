// The Longest Common Subsequence problem is to find the longest subsequence common to two sequences. It is a classic problem of dynamic programming.

// Steps:

// 1 - Create a 2D array dp where dp[i][j] represents the length of the LCS of the first i characters of s1 and the first j characters of s2.
// 2 - Fill the array based on the following conditions:
//   If s1[i-1] == s2[j-1], then dp[i][j] = dp[i-1][j-1] + 1.
//   Otherwise, dp[i][j] = max(dp[i-1][j], dp[i][j-1]).

function lcs(s1, s2) {
    let m = s1.length;
    let n = s2.length;
    let dp = Array(m + 1).fill().map(() => Array(n + 1).fill(0));

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (s1[i - 1] === s2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }

    return dp[m][n];
}

// Example usage
console.log(lcs("AGGTAB", "GXTXAYB")); // 4 (GTAB)