const myArry = [0,1,2,3,4,5,6]
//console.log(myArry);

myArry.push(7) // add 7 in array
//console.log(myArry);

myArry.pop()// remove 7 in array
//console.log(myArry);

myArry.unshift(17); //added value in starting like : 17, 0,1,2,3,4,5,6
//console.log(myArry);

myArry.shift() //Remove value from starting like : 0,1,2,3,4,5,6
//console.log(myArry);

//console.log(myArry.includes(9));
//console.log(myArry.indexOf(3));

const myNewArry = myArry.join() //convert to string
//console.log(myNewArry);

// slice, splice

//console.log("A ", myArry);

const myn1 = myArry.slice(1, 3)

// console.log(myn1);
// console.log("B ", myArry);

// Using slice, create newCar from myCar. Using slice with arrays of objects

const myHonda = {
    color: 'red',
    wheel: 4,
    engine : {cylinders: 4, size: 2.2}
}
//console.log(myHonda);
const myCar = [myHonda, 0,  2, "cherry condition", "purchased 1997"];
//console.log(myCar);
const newCar = myCar.slice(0,2);

// console.log("myCar =", myCar);
// console.log("newCar =", newCar);

// console.log("myCar[0].engine =", myCar[0].engine);
// console.log("newCar[0].engine =", newCar[0].engine);

//Change the color of myCar.
//console.log(myCar);
myCar.color = "Pink";
//console.log("mycar color is ", myCar.color);


//splice
const months = ["Jan", "March", "April", "June"];
months.splice(1, 0, "Feb");
// Inserts at index 1
//console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, "May");
// Replaces 1 element at index 4
//console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "May"]
