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
const obj4 = {5: "a" , 6: "b"}

// const obj3 = { obj1, obj2}
// console.log(obj3);   { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

//const obj3 = Object.assign({},obj1,obj2,obj4)


const obj3 = {...obj1, ...obj2}  // this is the spreading technique which mostly used in array 


// console.log(obj3);
// { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }  // in the const obj3 = Object.assign({},obj1,obj2,obj4) the {}  this the target and this is the value assigned
//obj1,obj2,obj4 into the target

const user = [
    {
        id : "afsd",
        email : "ha@gmailcom"
    }
]

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty("isLoggedIn")); 
// { id: '123abc', name: 'sammy', isLoggedIn: false }
// [ 'id', 'name', 'isLoggedIn' ]
// [ '123abc', 'sammy', false ]
// [ [ 'id', '123abc' ], [ 'name', 'sammy' ], [ 'isLoggedIn', false ] ]
// true




const course = {
    coursename : "js ",
    price: "999",
    courseInstructor: "ayush"   
}

//course.courseInstructor

const {courseInstructor} = course

console.log(courseInstructor);


//  api can be given into arrays and object too 
// {
//     "name": "ayush",
//     "coursename": "js in hindi",
//     "price": "free"
// } this is an object given as api