// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];


function larger(arr){
  let indexL = arr.findIndex((e)=>e==Math.max(...arr));
//   console.log(indexL); 
  return indexL;
}
function smaller(arr){
    let indexS = arr.findIndex((e)=>e==Math.min(...arr));
    // console.log(indexS);
    return indexS;
}

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here   map((num)=>{Number(num)});
  //Your code goes here … replace the below line with your code logic 

  let size = userInput[0];
  let arr = userInput[1].split(' ').map((num)=>{return Number(num)});
//   console.log(arr);
  let largestIndex = larger(arr);
  let smallestIndex = smaller(arr);
  let output = largestIndex-smallestIndex;
  console.log(output);


  //end-here
});