/**
 * Question 8:File Extension validation
Write a program in js where you have given a array validExtensions .Which contain the all valid extension.Write a function validateFileExtension to check the valid file type.
 */


// Function to validate the file extension
function validateFileExtension(fileName) {
   const validExtensions = ['.jpg', '.jpeg', '.png', '.gif']
   const isValid = validExtensions.some(extension => fileName.toLowerCase().endsWith(extension)); 
   console.log(isValid ? "valid file type. you can upload the file":"invalid file"); 
}

// Test the function
validateFileExtension("profile-picture.jpg");   
// Valid file type. You can upload the file.
validateFileExtension("document.pdf");         
// Invalid file type. Please upload a .jpg, .jpeg, .png, or .gif file.


