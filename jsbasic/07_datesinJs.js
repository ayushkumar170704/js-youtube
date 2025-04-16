// Dates

let myDate = new Date()
// console.log(myDate.toISOString());
// console.log(myDate.toDateString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate); // its an object

// let myCreateDate = new Date(2023 , 0 , 23)
// console.log(myCreateDate.toString());
//Mon Jan 23 2023 00:00:00 GMT+0000 (Coordinated Universal Time)

// console.log(myCreateDate.toLocaleString());
// 1/23/2023, 12:00:00 AM

// dates also has timestamps


let myCreateDate = new Date("01-14-2023")

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreateDate.getTime());


// console.log(Math.floor(Date.now()/1000)); // to get answer in sec instead of mili sec



//  string interpolation is ` ${}` / `${newDate.getDay()} and the time`

//localestring is an interesting method as you can define many parameters in this


newDate.toLocaleString("default",{
    weekday : "long "
})
