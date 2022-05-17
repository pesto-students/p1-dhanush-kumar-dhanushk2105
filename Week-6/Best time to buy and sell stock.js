//Best time to buy and sell stock (Assignment 6.4)

function maxProfit(prices) {
 
    let maxProfit = 0;

    for (i = 1; i < prices.length; i++){
        if (prices[i] > prices[i - 1]){
            maxProfit += prices[i] - prices[i - 1];
        }
    }
    return maxProfit;
}

    let price = [7,1,5,3,6,4];

    console.log(maxProfit(price));