// Singleton
// Constructor - Object.create

// object literals

const mySym = "key1";

const JSUser = {
    name : "Arundhati",
    email : "liza.alpha@gmail.com",
    pho: "+91 9711483609",
    [mySym] : "My updated key",
    location: "Delhi",
    isLoggedIn : false,
    lastloginDays : ["Monday", "Tuesday"],
}
//access method

//console.log(JSUser);
// console.log(JSUser.email);
// console.log(JSUser["email"]);

//add new key in the objects
JSUser.fullName = "Arundhati Behera"
//console.log(JSUser);

//update key value
JSUser.email = "arundhativlog@gmail.com";
//console.log(JSUser);

JSUser.greeting = function(){
    console.log("Hello world");
    
}
JSUser.greeting = function(){
    console.log(`Hello ${this.name}, How are you??`);
    
}
console.log(JSUser);
console.log(JSUser.greeting());

