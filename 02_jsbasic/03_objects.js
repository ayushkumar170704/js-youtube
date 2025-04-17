// singleton

//object literals

// there are two method to create an object 
// Object.create // this method is  called singleton method 


const mySym = Symbol("mykey1")

// object literals
const jsUser = {
    name : "ayush",
    age : 18,
    [mySym]: "mykey1",
    location: "jaipur",
    email : "ayuhs@gmail.com",
    isLoggedIn :false,
    lastLoginDate: ["Monday", "Saturday"]
}


console.log(jsUser.email)
console.log(jsUser["email"]) // this notation is importnat
// ayuhs@gmail.com
// ayuhs@gmail.com


console.log(jsUser[mySym])
// in data types there is symbol data type which cannot be used in object regularly u have to use it in square brackets such as const mySym = Symbol("key1")
// in object you have define it as [mySym]:"mykey1" then its data type of symbol if not defined as this then it will be as string when you have access it you hve use square method 
//  instead of dot method

//  you can easily overide a value in object like
jsUser.email = "Ayuhshakdhf@gasdf"
// the value is changed

//if you want to free ze the value so no one can change then use freeze with object 
// Object.freeze(jsUser) 

jsUser.greeting = function(){
    console.log("heloo js user")
}


jsUser.greetingTwo = function(){
    console.log(`heloo js user, ${this.name}`)
}
// console.log(jsUser.greeting)  // [Function (anonymous)]

console.log(jsUser.greeting()); // heloo js user
console.log(jsUser.greetingTwo()); //heloo js user, ayush