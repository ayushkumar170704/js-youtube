// arrays

const myArr = [0,1,2,3,4,6,7]

// const myHeros = ["spidey ", "ironman"]

// const myArr2 = new Array(1,2,3,4)
// console.log(myArr[0]);


//  array method

// myArr.push(6)
// myArr.pop
// console.log(myArr);
  
// myArr.unshift(9) // places the number at first position  the vice versa is shift it remove the given element from the start

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));


// const newArr = myArr.join() // join  changes the type of the arrays into string  and binds 
//   this is the output 0,1,2,3



// console.log(myArr);
// console.log(newArr);


// console.log(typeof newArr);





// console.log("A", myArr);


// const myn1 = myArr.slice(1 ,3)
 
// slice  splice the difference splice changes the original array 

const myn2 = myArr.splice(1,3)   // this is the main difference as it slice through the original array and changes the original array  
console.log("a", myArr); //[ 1, 2, 3 ]
console.log(myn2);  // [ 1, 2, 3 ]