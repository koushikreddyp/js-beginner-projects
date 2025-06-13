let scrambledWord = "avja";
let correctWord = "java";

let chance = 1;
let maxChances = 3;
let guessedRight = false;

while (chance <= maxChances) {
  let guess = prompt(`Guess the original word from this: ${scrambledWord} \nAttempt ${chance} of ${maxChances}`);

  if (guess && guess.toLowerCase() === correctWord) {
    console.log("Correct! You win ");
    guessedRight = true;
    break;
  } else {
    console.log("Nope! Try again.");
  }

  chance++;
}

if (!guessedRight) {
  console.log(`Game Over! The correct word was: "${correctWord}"`);
}
