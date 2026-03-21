/**
 * Question 4:Valid email
Write a javascript program. Where create a variable email and assign the some email address in it.Then create a variable domain. After that check the email contain the domain.If it finds the domain within the email, it returns the position where domain starts. If not, it returns -1.
 */

// string starts from index zero 

function checkGmailDomain(email, domain) {
 //code here
 const position = email.indexOf(domain); 
 if(position!==-1 ){
    console.log("email is assigned with same domain");
}
 else{
    console.log("this email is not from gmail"); 
}

}

const email = "user@example.com"; 
const domain = "@gmail.com";

checkGmailDomain(email, domain);
