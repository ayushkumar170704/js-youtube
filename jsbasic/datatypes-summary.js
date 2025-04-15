 // how can you keep and  acces your data in that basic it defined into two part premitive and non primitive

 // call by value //primitve data tpes 7 data types : strings,number , boolean , null , undefined , symbol- to make any value unquie , BigInt - scientific values 
 
 const score = 100
 const scorevalue= 100.3

 const isLoggedIn= false

 const outsideTemp = null 

 let userEmail;

 const id = Symbol("123")
 const anotherId = Symbol("123")

 console.log(id === anotherId); // the sole of symbol data type is make the value unique

//  BigInt is used to store large number scientifically large number













 // refernce type(non primitve ) memory me  refrence directly allocate kiya jata h
 // array , objects , functions

 //js statically typed or dynamically typed lauguage??

 //dynamically typed language



 const heros = ["shaktiman ", 'naagraj', "doga"];


 // in curly brace and written in key value braces
 let myObj = {
    name:"ayush",
    age:18,
 }
  


const myFunction = function(){
    console.log("hello world")

}
 


// how to find data type ?? typeof
// console.log(typeof bigNumber)  with this we can find the dataype 

// null will give object datatype
// undefined will give undefined data type
// function will retun function but it is said to be object function
// non primitive type will always give function for datatypes all the non primitive give function data type

