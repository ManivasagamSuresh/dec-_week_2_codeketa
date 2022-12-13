// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

function sort(Arr){
    let output = [];
   for(let i = 0 ;i<Arr.length;i++){
    let a = Arr[i].sort();
   output =  [...output,...a]    
   }
// console.log(output);
return output;
}

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic 


  let arrSize = Number(userInput[0]);
  let finalArr=[];
  for(let i = 2;i<=arrSize*2;i=i+2){
    let arr = userInput[i].split(' ').map((num)=>{return Number(num)});  
    finalArr.push(arr);
  }
  
let sorted = sort(finalArr);
console.log(...sorted)

  //end-here
});