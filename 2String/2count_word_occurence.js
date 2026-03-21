/**
 * Question 2:Count word Occurance
Write a javascript program, create a variable count and a function countOccurance. The condition in which the function returns count value is how many time the word appears in the comment.
 */


function countOccurrences(str, word) {
  
    // code here 
   const regex  = new RegExp(`\\b${word}\\b`,'gi'); 
   // 'g' for global search, 'i' for case insensitive search 
   const matches = str.match(regex); 
   // return the count of occurence or 0 if none found
   return matches?matches.length: 0; 
   
}
const comment = "This product is great. The quality is great and it's a great value.";
const wordToCount = "great";

const count = countOccurrences(comment, wordToCount);
console.log(`The word ${wordToCount} appears ${count} times in the comment.`);
