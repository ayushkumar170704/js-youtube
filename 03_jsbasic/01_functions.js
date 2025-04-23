
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

console.log(loginUserMessage())

// if you does not pass any thing as parameter it comes out as undefiend