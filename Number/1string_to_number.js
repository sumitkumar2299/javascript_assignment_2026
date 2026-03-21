function convertToNumber(str){
    // your code here 
    string = str; 
    const number = Number(string); 
    // if it is a number i will print number otherwise i will treat as " not a  number(nan)"
    if(number == NaN ){
        console.log("Nan")
    }
    else{
        console.log(number);
    }
    
}

convertToNumber("123") // 123
convertToNumber("abc"); // NaN


