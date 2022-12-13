// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

function reducer(arr){
    let ans = arr.reduce((acc,curr)=>{
      return acc+curr
    })
    // console.log(ans);
return ans;
}

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic 


    let size = userInput[0];
    let arr = userInput[1].split(' ').map((num)=>{return Number(num)});  
    let min = arr[1];
    for(let i =0 ; i<size ; i++){
        if(arr[i]<min){
            min = arr[i];
        }
    }
console.log(min);
  //end-here
});