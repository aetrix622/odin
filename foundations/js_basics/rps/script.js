window.onload = main();

function main() {
    console.log("Welcome to Rock Paper Scissors! Type game(); to begin!");
}

// getComputerChoice() randomly selects either "ROCK", "PAPER", or "SCISSORS" and returns the value.
function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    switch (choice) {
        case 0: // ROCK
            choice = "ROCK";
            break;
        case 1: // PAPER
            choice = "PAPER";
            break;
        case 2: // SCISSORS
            choice = "SCISSORS";
            break;
    }
    return choice;
}

// playRound() takes the params playerSelection and computerSelection and returns a result object { result, resultString, playerSelection, computerSelection } Args must be either "ROCK", "PAPER", or "SCISSORS", case sensitive.
function playRound(playerSelection, computerSelection) {
    let result;
    let resultString;
    if (playerSelection == "ROCK" && computerSelection == "PAPER" || playerSelection == "PAPER" && computerSelection == "SCISSORS" || playerSelection == "SCISSORS" && computerSelection == "ROCK") {
        // lose
        result = "lose";
        resultString = `You LOSE!! ${computerSelection} beats ${playerSelection}!`;
    } else if (playerSelection == computerSelection) {
        // tie
        result = "tie";
        resultString = `TIE!! You both picked ${playerSelection}`
    }
    else {
        // win
        result = "win";
        resultString = `You WIN!! ${playerSelection} beats ${computerSelection}!`;
    }
    return {
        result: result,
        resultString: resultString,
        playerSelection: playerSelection,
        computerSelection: computerSelection
    }
}

// game() plays 5 rounds of Rock Paper Scissors and returns the result.
function game() {
    let record = {
        wins: 0,
        losses: 0,
        ties: 0,
        totalRounds: 0
    }
    let playerSelection;
    let computerSelection;
    // play 5 rounds
    for (let round = 1; round <= 5; round++) {
        let inputOK = false;
        // get playerSelection and make sure the input is valid
        while (inputOK === false) {
            playerSelection = prompt("Select rock, paper, or scissors:").toUpperCase();
            if (playerSelection === "ROCK" || playerSelection === "PAPER" || playerSelection === "SCISSORS") {
                inputOK = true;
            } else {
                alert("I didn't understand that. Please try again.");
            }
        }
        // get computer selection
        computerSelection = getComputerChoice();
        // play the round, display the result and update the record
        let roundResult = playRound(playerSelection, computerSelection);
        console.log(roundResult.resultString);
        switch (roundResult.result) {
            case "win":
                record.wins++;
                break;
            case "lose":
                record.losses++;
                break;
            case "tie":
                record.ties++;
                break;
        }
        record.totalRounds++;
        console.group();
        console.log(`Record: W-${record.wins} L-${record.losses} T-${record.ties} in ${record.totalRounds} rounds.`);
        console.groupEnd();
    }
    // 5 rounds complete. Display the final result.
    if (record.wins > record.losses) {
        console.log(`Congratulations! You are the champion with ${record.wins} wins!`);
    } else if (record.wins < record.losses) {
        console.log(`Sorry, the computer beat you with ${record.losses} wins... Better luck next time!`);
    } else {
        console.log(`You Tied in a best of 5! Is that even possible?`);
    }
    console.log("Type game(); to play again.");
}
