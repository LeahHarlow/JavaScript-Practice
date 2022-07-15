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
  //start both max and min at the first price in the array
  let minCost = prices[0];
  let maxCost = prices[0];
  //iterate over all of the prices
  for (let i = 1; i < prices.length; i++) {
    let dailyPrice = prices[i];
    //if the price is less than the minimum reset it
    if (dailyPrice < minCost) {
      minCost = dailyPrice;
      //also set max cost to minimum cost to the minimum so that we dont keep tracking the max that came before the minimum
      maxCost = dailyPrice; //this was the key trick to a single loop
    } else if (dailyPrice > maxCost) {
      //set max cost if the daily price is larger than it
      maxCost = dailyPrice;
    }
    //if the max cost is greater than the min cost do the math and set that to the profit
    if (maxCost > minCost) {
      maxProfit = maxCost - minCost;
    }
  }
  //at the end weve checked all the values where the max was greater than the minimum so return that
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

//so that broke down when there was a larger number at the beginning, maybe it could have been remeedied but it was simpler to only have one iterating element to keep the order correct.

//big O = O(n) / O(1);


var maxProfit = function(prices) {
  let maxProfit = 0;
  let buy = 0;
  let sell = 0;
  for(let i = 1; i < prices.length; i++){
      let dailyPrice = prices[i];
      if(dailyPrice < prices[buy]) {
          buy = i;
          sell = buy;
      }
      if(dailyPrice > prices[buy]){
          let tempSum = dailyPrice - prices[buy]
          maxProfit = Math.max(maxProfit, tempSum);
      }
  }
  return maxProfit;
};
