function myFirstfunction(){
    console.log("Hello Arundhati");
}
//myFirstfunction()

function addTwoNumer(num1, num2) {
    // let result = num1 + num2
    // return result
    return num1 + num2
}
let result = addTwoNumer(10, 5);
//console.log("Result is : ", result);

function isUserLoggedIn(username="Arun") {
    if(!username){
        console.log("Please enter user name");
        
    }
    return `${username} just logged in`

}
//console.log(isUserLoggedIn("Arundhati"));

function calculatePrice(val1,val2, ...number1) {
    return number1
    
}
//console.log(calculatePrice(200, 300, 400, 500));

//how to access object in function
const myNewObj = {
    firstName : "Arundhati",
    lastName : "Behera",
    age : 33
}

function fetchObjects (anyobject) {
    console.log(`My Nmae is ${anyobject.firstName} ${anyobject.lastName} and my age ${anyobject.age}`)
}
//fetchObjects(myNewObj);
// fetchObjects({
//     username: "sam",
//     price: 399
// })

//how to access array in function

const myNewarray = [200, 400, 600, 800]

function fetchNewArray(getarray){
    return getarray[3]
}
//console.log(fetchNewArray(myNewarray));
// console.log(fetchNewArray([200, 400, 500, 1000]));
