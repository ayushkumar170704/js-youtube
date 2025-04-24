
function sayMyName(){
    console.log("a");
    console.log("y");
    console.log("u");
    console.log("s");
    console.log("h");

}

//sayMyName()

function addTwoNumbers(number1, number2){
     console.log(number1 + number2);
}

addTwoNumbers(3,4)
 



// console.log(addTwoNumbers);
// function divideTwoNumbers(number1 , number2){
//     console.log(number1 / number2);
// }
// divideTwoNumbers(3,4);

function loginUserMessage(username){
    if(username=== undefined){
        console.log("please enter a username");
        return
    }

    return `${username} just logged in`
}

// console.log(loginUserMessage())

// if you does not pass any thing as parameter it comes out as undefiend

function calculateCartPrice(... num1){
    return num1
}

console.log(calculateCartPrice(200,400,500))
// ... this is rest operator and this used to pass the given arguments into array   likse this [ 200, 400, 500 ]


const user = {
    username : "ayush",
    price : 199

}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
//  output username is ayush and price is199

// directly handling object 

handleObject({
    username : "Aysuhhh",
    price : 1234434
})

// passing arrays

const myNewArray = [200, 400, 500, 600]

function returnSecondValue(getArray){
    return getArray[1]
}


console.log(returnSecondValue(myNewArray));
// output 400   you can directly pass array also just like above how we passed object