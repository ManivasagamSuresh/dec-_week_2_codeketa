// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

function findODD(arr){
    let output = [];
    for (let i=0; i<arr.length ; i++){
        if((arr[i]%2)){
            output.push(arr[i]);
            odd = true
        }
        
        
    }
    return output;
}

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic 

  let arr = userInput[0].split('').map((num)=>{return Number(num)});
  let ans = findODD(arr);
//   console.log(ans.length);
  if(ans.length==0){
    console.log(-1);
  }
  else{
    console.log(...ans);
  }
  


  //end-here
});