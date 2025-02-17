const name ="Arundhati";
const repoCount = 30;

// console.log(name + repoCount + " Value"); old method
console.log(`Hi ${name} your repo count is ${repoCount}`); //new method with backtick, called string interpolation 

const gameName = new String('Arundati-vlog')

console.log(gameName [3]);

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "  Arundhati    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://arundhatiuiux.com/arundhati%20vlog"

console.log(url.replace('%20', '-'))

console.log(url.includes('blogger'))

console.log(gameName.split('-'));

//Comparing strings
const a = 9;
const b = 11;

if (a < b)
{
    console.log(`${a} is less than ${b}`);
}else if (a > b) 
{
    console.log(`${a} is greater than ${b}`);
    
} else {
    console.log(`${a} and ${b} are equal.`);
    
}
