/**
 * Question 1:Valid Password
Write a javascript program, create a variable password and a function checkIfPasswordIsValid. The condition in which the function returns true is when the length of password is minimum 8 characters.
 */


/*
CASE1: If password is 'abcd'
*/

const password = 'abcdef78';


function isValidPassword(password){
	//code here
    let valid_password = password; 
    if(valid_password.length <8){
        console.log("password is incorrect"); 
    }
    else{
        console.log("password is correct");
    }

    return valid_password;
}

isValidPassword(password) // Returns false as the length of password is less than 8 characters



