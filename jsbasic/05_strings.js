const name = "ayush"
const repoCount = 50

// console.log(name + repoCount + "  value");


console.log(`hello my name is ${name} and my repo count is ${repoCount}`);
// string interpolation

const gameName = new String("ayush")
// in this format the string has key value pairs like at 0 position the a is there at 1 position y is there and so on

console.log(gameName[0])
// this is the example for the above

console.log(gameName.length)
console.log(gameName.toUpperCase())

// the original vlaue is not changed because in primitive memory you get the copy when the variable is declared of the variable
// how many methods are there for string check and read about it


// important methods for dividing into substring

const newString = gameName.substring(0,4) // last me jo value dali h wo include nahi hoti h   // does not obey for negative sub strinng
console.log(newString)


const anotherString = gameName.slice(-5, 2)
console.log(anotherString)


const newStringOne = "      ayush    "
console.log(newStringOne.trim());



const url = "https://ayush.com/ayush%20kumar"

console.log(url.replace("%20","-"))

// you can replace with methods and can also ask if the string contains the word or not
console.log(url.includes("ayush"))


console.log(gameName.split("-"))