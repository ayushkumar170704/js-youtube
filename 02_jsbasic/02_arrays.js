const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["superman" , "flash " , "batman"]

// marvel_heros.push(dc_heros)


// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);  this is the outputflash 

// [ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash ', 'batman' ] ] this is the output  the third element is itself an array 

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);
//[ 'thor', 'ironman', 'spiderman', 'superman', 'flash ', 'batman' ]
// this is the output



const all_new_heros = [...marvel_heros , ...dc_heros]


// console.log(all_new_heros);


const another_array = [1,2,3,[4,5,6],[6,7,8,[3,4,5]]]


const real_another_array = another_array.flat(Infinity)    // syntax pasand nahi aa raha upar to uski jagah flat use karlo sabko ek hi array me concat kar dega

console.log(real_another_array)
// [
//     1, 2, 3, 4, 5,
//     6, 6, 7, 8, 3,
//     4, 5
//   ]  this is the output


console.log(Array.isArray(real_another_array))    // is this an array ??? this is asked by isArray the output is  // true

// to change it into array we use from 

console.log(Array.from("ayuhs"))  
// [ 'a', 'y', 'u', 'h', 's' ]


console.log(Array.from({name: "hitesh"}))  // interesting case cause this is the output []


//array.of return a new array from the set of elements
let score = 100
let score1 = 100
let score2 = 100
console.log(Array.of(score,score1,score2))   //[ 100, 100, 100 ]