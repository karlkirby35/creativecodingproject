//Notes
//sort in console
//friendAges.sort((a,b) => (b-a))
//friendAges.sort((a,b) => (a-b))

//ForLoop 
//for (initialization; condition; increment) {
   // if (condition1) {
        // Code to execute if condition1 is true
    //  } else {
        // Code to execute if condition1 is false
   // }
//  }


//  Practise



//Code Start:
let friend01 = {name:"David" , age:46 , bowling:true};
let friend02 = {name:"Peter" , age:29 , bowling:false};
let friend03 = {name:"Jason" , age:34 , bowling:true};
let friend04 = {name:"Josh" , age:47 , bowling:true};
let friend05 = {name:"Mary" , age:20 , bowling:false};
 
//Declared variables
let friends = [];
let friendAges = [];
let friendBowlingAges = [];
 
//Adding 5 variables to the friends array
friends.push(friend01);
friends.push(friend02);
friends.push(friend03);
friends.push(friend04);
friends.push(friend05);
 
 
//Extracts age property from each object and adds it to friendAges array
for(let index = 0; index<5; index++){
    friendAges.push(friends[index].age )
}
 
//Pushes age property into friendBowlingAges array if the bowling type is true
for(let index = 0; index<5; index++){
    if(friends[index].bowling == true ){
    friendBowlingAges.push(friends[index].age )
    }
}

//Average
function calcAvg (arrayNums){
   
    let average = 0;
    for(let i = 0; i<arrayNums.length; i++){
        average = average + arrayNums[i]
    }
    return average/arrayNums.length;
}
   
for(let i = 0; i<100; i++){
    if(i%5==0){console.log(i)}
}
 
//arrayNums.length = 5
//Math.floor (5 / 2) =2
//Middle is arrayNums[2] = 3 

//5 Numbers
function median(arrayNums){
    if(arrayNums.length%2==0){      //checks array length
        console.log("odd")
    } else {
        return arrayNums[Math.floor(arrayNums.length/2)]
    }
}
 

//4 Numbers
function median(arrayNums){
    if(arrayNums.length%2==0){      //checks if array length is even
        console.log("even")     //shows even in console
        let endNum= arrayNums.length/2      //2 is index of second middle number
        let startNum = endNum -1        //1 is index of first middle numnber
        return (arrayNums[startNum] + arrayNums[endNum])/2      
        //returns arrayNums.length = 4 
        //endNum = 4 / 2 = 2 → arrayNums[2] = 3
        //startNum = 2 - 1 = 1 → arrayNums[1] = 2
        //Median = (2 + 3) / 2 = 2.5
   
    }  else  {
        return arrayNums[Math.floor(arrayNums.Length/2)]
    }
}
 

