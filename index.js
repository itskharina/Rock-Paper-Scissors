let playerScore = document.getElementById("user");
let computerScore = document.getElementById("computer");
let resultsEl = document.getElementById("results-el");

let playerPoints = 0;
let computerPoints = 0;

let computerSelection = ["rock", "paper", "scissors"]

function getcomputerSelection() {
    let choice = Math.floor(Math.random() * 3) ;
    return (computerSelection[choice]);
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        resultsEl.innerText = "It's a tie!"
        console.log("It's a tie!")
    }
    else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "rock")
    ) {
        playerPoints++
        resultsEl.innerText = "You won!"
        console.log("You won!")
        playerScore.textContent = "User: " + playerPoints
    }
    else if (
        (computerSelection === "rock" && playerSelection === "scissors") ||
        (computerSelection === "scissors" && playerSelection === "paper") ||
        (computerSelection === "paper" && playerSelection === "rock")
    ) {
        computerPoints++
        resultsEl.innerText = "The computer won!"
        console.log("The computer won!")
        computerScore.textContent = "Computer: " + computerPoints
    }
}


let scissorsBtn = document.getElementById("scissors");
let rockBtn = document.getElementById("rock");
let paperBtn = document.getElementById("paper");

rockBtn.addEventListener("click", function() {
    const playerSelection = "rock";
    const computerSelection = getcomputerSelection();
    console.log(computerSelection);
    playRound(playerSelection, computerSelection);
})

scissorsBtn.addEventListener("click", function() {
    const playerSelection = "scissors";
    const computerSelection = getcomputerSelection();
    console.log(computerSelection);
    playRound(playerSelection, computerSelection);
})

paperBtn.addEventListener("click", function() {
    const playerSelection = "paper";
    const computerSelection = getcomputerSelection();
    console.log(computerSelection);
    playRound(playerSelection, computerSelection);
})