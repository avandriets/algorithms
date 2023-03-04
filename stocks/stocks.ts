// const stocks = [7, 1, 5, 3, 6, 4];
// const stocks = [4, 6, 3, 5, 1, 7];
const stocks = [2, 4, 1];

console.log('###', getMaximumRevenue(stocks));

function getMaximumRevenue(prices: number[]): number {
  let minPrice = Infinity;
  let maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    } else if (prices[i] - minPrice > maxProfit) {
      maxProfit = prices[i] - minPrice;
    }
  }

  return maxProfit;
}
