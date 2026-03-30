/**
 * Question 7:URL Generation
Write a program in javascript where create a three variable baseURL, searchQuery, categoryFilter. By using this three variable generate the full URL of website.
 */


function generateSearchURL(baseURL, searchQuery, categoryFilter) {
 //code here
 let generated_url = (baseURL.concat('/').concat(searchQuery)).concat("/").concat(categoryFilter)
 return generated_url; 
}

// Example usage
let baseURL = "https://www.example.com/search";
let searchQuery = "apple";
let categoryFilter = "electronics";

let fullURL = generateSearchURL(baseURL, searchQuery, categoryFilter);
console.log(fullURL);
