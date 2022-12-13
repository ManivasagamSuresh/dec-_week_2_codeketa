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
    let output = reducer(arr,size);
    // console.log(output);
    if(!(output%2) && !(output%3) && !(output%5)){
        console.log(1);
    }else{
        console.log(0);
    }

  //end-here
});