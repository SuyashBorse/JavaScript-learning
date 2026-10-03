let gameNum = 25;

let N = prompt("Enter a number to guess the correct number");
console.log(N);

while(N != gameNum){
    N = prompt("The number is wrong - Guess again.");
}

console.log("Congrats- you have guessed correct.");