// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2==1);
// console.log(2!=1);


// console.log("2" > 1);
// console.log("02" >  1);


// does not give predictable result always check if the data type is same


// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0);   // here comes value conversion problem
// the reason is that an equality check == and comparisons ><>= <= worrk differently .
// comparisons convert null to a number , treating it as 0
//thats why (3) null >= 0 is true and 1 null > 0 is false


// same confusion occurs in undefined 

// console.log(undefined ==0);
// console.log(undefined > 0);
// console.log(undefined < 0 );

//  always give result false for undefined


//  strict check ===

console.log("2"=== 2);

// always avoid differnt type comparison 
