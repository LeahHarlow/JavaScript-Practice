// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

// Example 1:

// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

// const buySell = (prices) => {
//   let maxProfit = 0;
//   let leftPt = 0;
//   let rightPt = 1;
//   while (rightPt <= prices.length - 1 && leftPt <= prices.length - 2) {
//     if (prices[rightPt] <= prices[leftPt]) leftPt = rightPt;
//     if (prices[leftPt] <= prices[rightPt] || rightPt === prices.length-1) {
//       let tempSum = prices[rightPt] - prices[leftPt];
//       maxProfit = Math.max(tempSum, maxProfit);
//       leftPt++;
//     }
//   }
//   return maxProfit;
// };

const buySell = (prices) => {
  let maxProfit = 0;
  let minCost = prices[0];
  let maxCost = prices[0];
  for (let i = 1; i < prices.length; i++) {
    let dailyPrice = prices[i];
    if (dailyPrice < minCost) {
      minCost = dailyPrice;
      maxCost = dailyPrice; //?
    } else if (dailyPrice > maxCost) {
      maxCost = dailyPrice;
    }
    if (maxCost > minCost) {
      maxProfit = maxCost - minCost;
    }
  }
  return maxProfit;
};

console.log('expected 5 and got:', buySell([7, 1, 5, 3, 6, 4]));
console.log('expected 0 and got:', buySell([7, 6, 4, 3, 1]));
console.log('expected 10 and got:', buySell([7, 1, 11, 3, 6, 4]));
console.log('expected 0 and got:', buySell([7, 7, 7, 7]));

//if all descending there is no profit
//if all ascending first and last makes max profit
//check for lowest, check for highest, if the lowests index is before highest compute that profit

//pseudocode:
//createe 2 pointers
//start at he first two indices
//while right pointer isnt at the end of prices
//if the right is less then left increase right by one
//if left is less than right calculate the difference and set it to max sum if its greater than the current max sum
//then increase leftPt
//outside of the while loop return max sum
