const playerScore = document.querySelector('.user-score');
const computerScore = document.querySelector('.computer-score');
const resultsEl = document.querySelector('#results-el');
const scissorsBtn = document.querySelector('#scissors');
const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const rulesBtn = document.querySelector('.rules-btn');
const closeBtn = document.querySelector('.exit');
const modal = document.querySelector('.background');

let playerPoints = 0;
let computerPoints = 0;

// Making computer pick rock, paper or scissors randomly

let computerSelection = ['rock', 'paper', 'scissors'];

function getcomputerSelection() {
	let choice = Math.floor(Math.random() * 3);
	return computerSelection[choice];
}

// Creating single round

function playRound(playerSelection, computerSelection) {
	if (playerSelection === computerSelection) {
		resultsEl.textContent = "It's a tie!";
		console.log("It's a tie!");
	} else if (
		(playerSelection === 'rock' && computerSelection === 'scissors') ||
		(playerSelection === 'scissors' && computerSelection === 'paper') ||
		(playerSelection === 'paper' && computerSelection === 'rock')
	) {
		playerPoints++;
		resultsEl.textContent = 'You won!';
		playerScore.textContent = playerPoints;
	} else if (
		(computerSelection === 'rock' && playerSelection === 'scissors') ||
		(computerSelection === 'scissors' && playerSelection === 'paper') ||
		(computerSelection === 'paper' && playerSelection === 'rock')
	) {
		computerPoints++;
		resultsEl.textContent = 'The computer won!';
		computerScore.textContent = computerPoints;
	}
}

// Making the rock, paper, scissors buttons play the game when clicked

function playGame() {
	rockBtn.addEventListener('click', function () {
		const playerSelection = 'rock';
		const computerSelection = getcomputerSelection();
		console.log(computerSelection);
		playRound(playerSelection, computerSelection);
		checkWinner();
	});
	scissorsBtn.addEventListener('click', function () {
		const playerSelection = 'scissors';
		const computerSelection = getcomputerSelection();
		console.log(computerSelection);
		playRound(playerSelection, computerSelection);
		checkWinner();
	});
	paperBtn.addEventListener('click', function () {
		const playerSelection = 'paper';
		const computerSelection = getcomputerSelection();
		console.log(computerSelection);
		playRound(playerSelection, computerSelection);
		checkWinner();
	});
}

// Check if the player or computer won

function checkWinner() {
	if (playerPoints === 5) {
		resultsEl.textContent = 'You win the game! Congrats!';
		resetScore();
	} else if (computerPoints === 5) {
		resultsEl.textContent = 'You lose the game! Better luck next time!';
		resetScore();
	}
}

// Resets score when game is over

function resetScore() {
	playerPoints = 0;
	computerPoints = 0;
	computerScore.textContent = 0;
	playerScore.textContent = 0;
}

// Rules button
rulesBtn.addEventListener('click', function () {
	modal.classList.remove('hidden');
});

// Close button
closeBtn.addEventListener('click', function () {
	modal.classList.add('hidden');
});

playGame();
