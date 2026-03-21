// Question 4: Optimizing Price Calculation with Bulk Discount
// Write a function calculateBulkDiscount that calculates the total cost for bulk orders, 
// applying a discount when the quantity exceeds a threshold.





function calculateBulkDiscount(price, quantity, discountThreshold, discountRate) {
    var total_price = price*quantity;
    if(discountThreshold==10){
        total_price = (total_price-(total_price*(discountRate/100)));
    }
    else{
        total_price = (total_price-(total_price*(discountRate/100)))
    }
    return total_price;

}

// Example usage
console.log(calculateBulkDiscount(50, 15, 10, 10)); // Output: 675
console.log(calculateBulkDiscount(50, 5, 10, 10));  // Output: 250
console.log(calculateBulkDiscount(100, 20, 15, 20)); // Output: 1600
 