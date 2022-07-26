// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// Example 1:
// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps

// Example 2:
// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step

// Example 3:
// Input: n = 5
// Output: ?
// Explanation: There are ? ways to climb to the top.
// 1. 1 step + 1 step + 1 step + 1 step + 1 step
// 2. 1 step + 1 step + 1 step + 2 steps
// 3. 1 step + 1 step + 2 steps + 1 step
// 4. 1 step + 2 steps + 1 step + 1 step
// 5. 2 steps + 1 step + 1 step + 1 step
// 6. 1 step + 2 steps + 2 steps
// 7. 2 steps + 1 step + 2 steps
// 8. 2 steps + 2 steps + 1 step

var obj = {}
const  climbStairs = (n) => {
if (obj[n]) return obj[n]
if (n <= 3) return n

var rez = climbStairs(n - 1) + climbStairs(n - 2)
obj[n] = rez
return rez
};

console.log(climbStairs(3))
