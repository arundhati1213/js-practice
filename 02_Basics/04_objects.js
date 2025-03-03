// Singleton object - const tinderUser = new Object()
// Non-Singleton object - const tinderUser = {}

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

 //console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Arundhati",
            lastname: "Behera"
        }
    },
    completeAddress :{
        presentAddress : {
            houseNo : "507-D",
            town : "Aya Nagar",
            State : "Odisha",
            pinCode :110047,
            contactNum:{
                mobNum :"+9711483609",
                phoNum : "011-2345890"
            },
        },
        

    },
}

// console.log(`Full Name: ${regularUser.fullname.userfullname.firstname} ${regularUser.fullname.userfullname.lastname}`);
// console.log(`Address: ${regularUser.completeAddress.presentAddress.houseNo}, ${regularUser.completeAddress.presentAddress.town}, 
//     ${regularUser.completeAddress.presentAddress.State},  ${regularUser.completeAddress.presentAddress.pinCode},  
//     ${regularUser.completeAddress.presentAddress.contactNum.mobNum} ${regularUser.completeAddress.presentAddress.contactNum.phoNum}`);

//how to merge two objects
const obj1 = {1:"a",2:"b",3:"c"}
const obj2 = {4:"d",5:"e",6:"f"}

//const obj4 = Object.assign({}, obj1, obj2)
const obj3 = {...obj1, ...obj2}

//console.log(obj4);
//console.log(obj3);

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]
// console.log(users[1].email);
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "js practive",
    price: "999",
    courseInstructor: "Arundhati"
}

// course.courseInstructor

const {courseInstructor:instructor} = course

// console.log(courseInstructor);
console.log(instructor);

