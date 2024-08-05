let maximum = parseInt(prompt("Enter the maximum number!"));

while (!maximum) {
    maximum = parseInt(prompt("Enter Valid number.!"));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;

let guess = prompt("Enter your first guess number.(for quiting the game enter q)");
let attempts = 1;


while (parseInt(guess) !== targetNum) {
    if (guess == 'q') break;
    guess = parseInt(guess);
    if (guess > targetNum) {

        guess = prompt("Too high ! Enter new guess number.!");
        attempts++;

    } else if (guess < targetNum) {
        guess = prompt("Too low ! Enter new guess number.!");
        attempts++;
    }
    else {
        guess = prompt("Enter valid input / Enter Number.");
    }
}

if (guess === 'q') {
    console.log("ok you Quit the game.");

} else {
    console.log(`you win. you guess the correct number. number of attempts ${attempts}`);
}

