let gameNum = Math.floor(Math.random()*100)+1; //Random Number between 1-100

let userNum = prompt("I'm thinking of a number between 1 and 100. Can you guess it?");

while(userNum != gameNum){
    if(userNum < gameNum) {
        userNum = prompt("Too low! Try a higher number, Guess again");
    } else {
        userNum = prompt("Too High! Try a lower number, Guess again");
    }

}

console.log("Congrations you guessed correct number.")