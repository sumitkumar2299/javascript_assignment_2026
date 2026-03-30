/**
 * Question 6:Convert URLs to Links
Write a program in javascript. Where create a variable text contains a string with URLs. Then create the another variable urlPattern that is the regular Expression matches any URL that starts with http:// or https://, followed by any characters that aren't spaces.For each URL found, it is replaced with an anchor tag (), making the URL clickable.
 */


function convertUrlsToLinks(text){
    // code here 
    const urlPattern = /(https?:\/\/[^\s]+)/g;  // regex to match url; 
    return text.replace(urlPattern,(url)=>`<a href="${url}" target="_blank">${url}</a>`)
    
}

let updatedText = convertUrlsToLinks("Visit our website at http://example.com for more information. Also, check out https://google.com for other resources.")
console.log(updatedText); 