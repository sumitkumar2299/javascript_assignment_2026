const mapDemo = new Map(); 
console.log(mapDemo); 

// map is similar to an object 

mapDemo.set("name","sumit"); 
console.log(mapDemo)


// map properties with example 

const days =  new Map(); 
days.set("sun","sunday"); 
days.set("mon", "monday"); 

console.log(days); 
days.clear(); 
console.log(days); 


const content = new Map(); 
content.set("co-ordinate geometry", "straight lines"); 
content.set("algebra", "binomial theorem")

content.delete("algebra"); 
console.log(content); 


// entries method 

const month = new Map(); 
month.set("first", "january"); 
month.set("second", "february"); 

console.log(month.entries()); 

// foreach method 

const days1 = new Map(); 
days1.set("mon","monday"); 
days1.set("tue", "tuesday"); 

days.forEach(function(key,value){
 console.log(`${key} = ${value}`)
})


// creating map from the object 

const user = {
    name: "sumit", 
    age: 22
}

const userFinal = new Map(Object.entries(user)); 
console.log(userFinal); 


// crating object from the map 

const map = (
    ["fruit","apple"],
    ["vegetable","cabbage"]
)
console.log(map); 






