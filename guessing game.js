let max = parseInt(prompt("Enter the max number"));
while(!max){
    max = parseInt(prompt("Invalid guess"));
}

const targetNum= Math.floor(Math.random()*max)+1;
console.log(targetNum)

let guess=prompt("First guess (Type 'q' to quit)");
let attempts = 1;

while(parseInt(guess) !== targetNum){
    if(guess === 'q') break;
    guess=parseInt(guess);
    if(guess>targetNum){
        guess=prompt("Too high");
        attempts ++;
    }else if (guess < targetNum){
        guess=prompt("Too low");
        attempts ++;
    }else{
        guess=prompt("Invalid. Enter a number or 'q' to quit");
    }
}
if(guess === 'q'){
    console.log("Quit");
}else{
    console.log("You Win")
    console.log(`Correct! Attempts ${attempts}`);
}
// More definte win
// if(guess=targetNum){
//     console.log(`Correct! Attempts ${attempts}`);
// }