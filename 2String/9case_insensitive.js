/** 
 * Question 9:Case-Insensitive Search
Write a program in js where you have given a array products .Which contain the all products in case-insenstive form and another is searchQuery.Write a logic to check is searQuery present in the production array..
 */


function searchProducts(products, searchQuery) {
  //code here
  return products.filter(product => product.toUppercase() == searchQuery.toUppercase())
}

// Example usage
let products = ["Apple", "banana", "Orange", "grape", "APPLE"];
let searchQuery = "apple";

let searchResult = searchProducts(products, searchQuery);
console.log(searchResult);  // ["Apple", "APPLE"]
