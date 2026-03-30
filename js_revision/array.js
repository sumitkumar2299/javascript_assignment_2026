const name = ["sumit","rahul", "abhishek"]; 

// pop -> delete elements from the last 
let x = name.pop();
console.log(x);  

// push => insert element from last 

let y = name.push("amrit"); 
console.log(name); 

// shift => remove the first element from an array 

let z = name.shift(); 
console.log(z); 

// unshift -> adds element to the begining of an array 

let a = name.unshift("nikhil");
console.log(name);



// concat method => concate two or more array in single array 

let arr1 = ["sumit","rahul","gulam"]; 
let arr2 = ["azad","xyz"]; 

let new_arr = arr1.concat(arr2); 
console.log(new_arr); 



let age = [24,58,69]; 
let first_name = ["rahul","sumit","abhishek"]; 
let last_name = ["kumar","kumar","kumar"]; 

let concated_arr = age.concat(first_name,last_name); 
console.log(concated_arr); 


// join => it join all elements of an array into string 
// but it does not modify the original array. 

let num = [4,5,6]; 
let results  = num.join('-'); 
console.log(results); 
console.log(typeof(results)); 
console.log(num); 


// slice method => like a pizza slice 
// original array pe koi impact nahi ayega 
let fruits = ["apple","mango","banana","blackberry"]; 
let sliced_fruits = fruits.slice(1,3); 
console.log(sliced_fruits); 
console.log(fruits); 


// splice 

/**
 * syntax 
 * array.splice(start,deleteCount,item1,item2,...........)
 * this method used to add or removed an element from an array and it impacts on original array. 
 */

let number_1 = [1,2,3,4,5]; 
let removed = number_1.splice(2,2,6,7); 
console.log(number_1); 
console.log(removed); 



let number_2 = [1,2,3,4,5,6]; 
let reverse_number = number_2.reverse(); 
console.log(reverse_number); 


// indexof -> search the array for an element and return its index 
// indexing starts from zero 

let number_3 = [1,2,3,4,5,6]
let index = number_3.indexOf(4); 
console.log(index); 


// toString method -> convert its into tostring. 

const number_4 = [1,2,3,4,5,6,7]; 
const number_in_string = number_4.toString(); 
console.log(number_in_string); 
console.log(typeof(number_in_string)); 



// flattening of an array 

const nested_array = [1,2,3,[4,5]]; 
const flat_array = nested_array.flat(); 
console.log(flat_array); 
const flat_array_one = nested_array.flat(1); // it will flat all the array into single array. 
console.log(flat_array_one);


let nested_array2 = [1,2,3,[4,5,6,[7,8,9]]]
const flatted_array = nested_array2.flat(); 
console.log(flatted_array); 


/**
 * const flat_array_one = nested_array.flat(2); 
 * const flat_array_one = nested_array.flat(1);
 * const flat_array_one = nested_array.flat(1);
 * const flat_array_one = nested_array.flat(1); 
 */

const check_array = [1,2,3,4,5,6]; 
console.log(Array.isArray(check_array)); 



const city_name = "bangalore"
console.log(Array.isArray(city_name)); 


const array5 = ["rahul","abhishek","sumit"]; 
console.log(array5.length);  


// different  methods to initialize an array 

let number_6 = new Array(1,2,3,4); 
console.log(number_6); 

let number_7 = Array("black","blue"); 
console.log(number_7); 

// iteration of an array 

const array_9 = [1,2,3]; 
for(let index = 0; index<array_9.length; index++){
    console.log(index); 
    console.log("---------------"); 
    console.log(array_9[index]); 
}


console.log("using for ............ loop "); 



const array = [1,2,3]; 
for(const iterator in array){
    console.log(iterator); 
}


// while loop 

const array_3 = [1,2,3,4,5,6]; 


