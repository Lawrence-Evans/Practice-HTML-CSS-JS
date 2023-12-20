function singSong(){
    console.log('DO');
    console.log('RE');
    console.log('MI');
}


function grumpus() {
    console.log('ugh you again');
    console.log('ulast time!');
    console.log('Leave me alone!');
}

function greet(firstName, lastName){
    console.log(`Hi ${firstName} ${lastName[0]}.`);
}

function repeat(str, numTimes){
    let result='';
    for(let i=0;i<numTimes;i++){
        result+=str;
    }
    console.log(result)
}

function add(x,y){
    console.log(x + y)
}
// prints but value is not stored so undefined

function add(x,y){
   let sum=x+y; 
   return sum;
}
// stores value