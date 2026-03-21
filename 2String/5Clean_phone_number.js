/**
 *  Question 5:cleanUp extra spaces
Write a program in javascript. Where create a variable phoneNumber .phoneNumber contains the user input, but it has unwanted spaces at the start and end.Than create cleanedPhoneNumber variable which holds the processed, clean phone number without extra spaces..
 */


function cleanPhoneNumber(phoneNumber) {
 //code here
 return phoneNumber.trim(); 
}

const phoneNumber = "  +1 234 567 890  ";  // User input with leading and trailing spaces
const cleanedPhoneNumber = cleanPhoneNumber(phoneNumber);

console.log(cleanedPhoneNumber);  // Output: "+1 234 567 890"