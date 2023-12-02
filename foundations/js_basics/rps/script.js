window.onload = main();
const btnNewGame = document.querySelector("#btnNewGame");
const btnRock = document.querySelector('#btnRock');
const btnPaper = document.querySelector('#btnPaper');
const btnScissors = document.querySelector('#btnScissors');
const divResult = document.querySelector('#result');
const divRecord = document.querySelector('#record');
const lblRound = document.querySelector('#lblRound');
let currentRound = 1;
let playerWins = 0;
let cpuWins = 0;
let ties = 0;

btnNewGame.addEventListener("click", newGame);

btnRock.addEventListener("click", () => {
    playRound("ROCK", getComputerChoice());
});

btnPaper.addEventListener("click", () => {
    playRound("PAPER", getComputerChoice());
});

btnScissors.addEventListener("click", () => {
    playRound("SCISSORS", getComputerChoice());
});

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

// playRound() takes the params playerSelection and computerSelection and returns 
// a result object { result, resultString, playerSelection, computerSelection } 
// Args must be either "ROCK", "PAPER", or "SCISSORS", case sensitive.
function playRound(playerSelection, computerSelection) {
    let result;
    let resultString;
    if (playerSelection == "ROCK" && computerSelection == "PAPER" || playerSelection == "PAPER" && computerSelection == "SCISSORS" || playerSelection == "SCISSORS" && computerSelection == "ROCK") {
        // lose
        cpuWins++;
        result = "lose";
        resultString = `You LOSE!! ${computerSelection} beats ${playerSelection}!`;
    } else if (playerSelection == computerSelection) {
        // tie
        ties++;
        result = "tie";
        resultString = `TIE!! You both picked ${playerSelection}`
    }
    else {
        // win
        playerWins++;
        result = "win";
        resultString = `You WIN!! ${playerSelection} beats ${computerSelection}!`;
    }
    let roundResult = {
        result: result,
        resultString: resultString,
        playerSelection: playerSelection,
        computerSelection: computerSelection
    }
    displayResult(roundResult);
    displayRecord();
    if (playerWins == 5 || cpuWins == 5) {
        endGame();
        return;
    }
    newRound();
}

function endGame() {
    if (playerWins === 5) {
        alert("YOU WON!!");
    } else {
        alert("YOU LOST!");
    }
    newGame();
}

function displayResult(roundResult) {
    divResult.innerHTML = "";
    let cpuSelect = document.createElement("p");
    cpuSelect.textContent = `CPU selects: ${roundResult.computerSelection}`;
    let playerSelect = document.createElement("p");
    playerSelect.textContent = `Player selects: ${roundResult.playerSelection}`;
    let resultString = document.createElement("p");
    resultString.textContent = roundResult.resultString;
    divResult.appendChild(cpuSelect);
    divResult.appendChild(playerSelect);
    divResult.appendChild(resultString);    
}

function newGame() {
    currentRound = 1;
    playerWins = 0;
    cpuWins = 0;
    ties = 0;
    lblRound.textContent = `Round ${currentRound}`;
    divResult.innerHTML = "";
    displayRecord();
}

function newRound() {
    currentRound++;
    lblRound.textContent = `Round ${currentRound}`
}

function displayRecord() {
    divRecord.innerHTML = "";
    let winString = `Player ${playerWins} - ${cpuWins} CPU`;
    let tieString = `Ties: ${ties}`;
    let paraWinLoss = document.createElement("p");
    paraWinLoss.innerText = winString;
    divRecord.appendChild(paraWinLoss);
    let paraTies = document.createElement("p");
    paraTies.innerText = tieString;
    divRecord.appendChild(paraTies);
}

