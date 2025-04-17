//  const tinderUser = new Object() // this is a singleton object 
 
 const tinderUser = {}   // this is not a single ton object

 tinderUser.id = "123abc"
 tinderUser.name = "sammy"
 tinderUser.isLoggedIn = false


//  console.log(tinderUser); // empty object { }


const   regularUser = {
    email:"ayush.kumar",
    fullname : {
        userfullname :{
            firstname: "ayush",
            lastname : "kumar"
        }
    }
}

// console.log(regularUser.fullname.userfullname);
// { firstname: 'ayush', lastname: 'kumar' } output
// console.log(regularUser.fullname?.userfullname);  it ? checks the whether fullname is there or not it is used in api checking 



const obj1 = { 1:"a", 2:"b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = { obj1, obj2}
// console.log(obj3);   { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

const obj3 = Object.assign({},obj1,obj2)
console.log(obj3);