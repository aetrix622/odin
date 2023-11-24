// Write a program that takes a user's input and prints the numbers from one to the number the user entered. However, for multiples of three print "Fizz" instead of the number and for multiples of five print "Buzz". For numbers which are multiples of both three and five, print "FizzBuzz".

function main() {
    let userNumber = parseInt(prompt("Enter the number you'd like to FizzBuzz up to:"));
    for (let i = 1; i <= userNumber; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log("FizzBuzz");
        } else if (i % 3 == 0) {
            console.log("Fizz");
        } else if (i % 5 == 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}

window.onload = main();