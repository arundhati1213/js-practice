const myFriendsListOne = ["Arundhati", "Annapurna", "Anusuya"]
const myFriendsListTwo = ["Rita", "Sarita", "Papun", "Amit"]

// myFriendsListOne.push(myFriendsListTwo);

// console.log(myFriendsListOne);
// console.log(myFriendsListOne[3][2])

//const myFrindList = myFriendsListOne.concat(myFriendsListTwo);
//console.log(myFrindList);

const allFriends = [...myFriendsListOne, ...myFriendsListTwo]
//console.log(allFriends);

const mergeArray = [1,2,3,4,[5,6,7],8,[9,10,11]]
//console.log(mergeArray);
const myRealarry = mergeArray.flat(Infinity)
//console.log(myRealarry);

//JavaScript Demo: Array.isArray()
console.log(Array.isArray("Arundhati"))
console.log(Array.from("Arundhati"))
console.log(Array.from({name:"Arundhati"}))

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));