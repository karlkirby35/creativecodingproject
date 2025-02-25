//Notes:

//string = data type used to represent the sequence of characters
//substring = a portion of a string, for example "he", "ll" , "o" 

//let for something that doesnt change
//const for something that does change

//friends.slice(2,1, "brian") 
//2 Represents 
//1 Represents

//[] array
//() function/parameters
//{} objects

//for (let num = 0; num < friends.length; num++) {
    //console.log(friends[num]);
//}

//For loop executes a block of code multiple times 
//Variable is initalized to 0 (let num = 0;)
//Loop runs when num is less than friends.length
//num++ increases the value of num by 1


//Practise



//Code Start:
//Method 1 

let yobString = dob.substring(6,10);
let yobNum = parseInt(yobString);

//Method 2
age = 2025 - parseInt(dob.substring(6,10)); 

//Arrays (Friends[0,1,2] in console)

let age = 21;
const dob ="01/01/1972";
let friends = ["john", "mary" , "peter", "susan"];
let arrayLength = friends.length;

friends.slice(2,1, "brian")

friends.push("brian");

//ForLoop
for(let num = 0; num<friends.length; num++){
    console.log(friends[num])
}

let myFriend = {name:"john", age:22, eirCode:"a94v5f4"}





