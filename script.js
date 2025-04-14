const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
const result = document.getElementById('result');

function getComputerChoice() {
    var choice = ['rock', 'paper', 'scissors'];
    var randomIndex = Math.floor(Math.random() * choice.length);
    return choice[randomIndex];
}

function getHumanChoice() {
    var choice = prompt("Enter your choice (rock, paper, scissors):").toLowerCase();
    return choice;
}
    var humanScore = 0;
    var computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        result.textContent = (`It's a tie! Your Score: ${humanScore}; Computer Score: ${computerScore}`);
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        humanScore++;
        result.textContent = (`You win! ${humanChoice} beats ${computerChoice}. Your Score: ${humanScore}; Computer Score: ${computerScore}`);
        winAlert();
    } else {
        computerScore++;
        result.textContent = (`You lose! ${computerChoice} beats ${humanChoice}. Your Score: ${humanScore}; Computer Score: ${computerScore}`);
        winAlert();
    }
}

function winAlert () {
    if (humanScore === 5) {
        alert("Congratulations! You won the game!");
        humanScore = 0;
        computerScore = 0;
    } else if (computerScore === 5) {
        alert("Sorry! You lost the game.");
        humanScore = 0;
        computerScore = 0;
    }
}

rockButton.addEventListener('click', () => playRound('rock', getComputerChoice()));
paperButton.addEventListener('click', () => playRound('paper', getComputerChoice()));
scissorsButton.addEventListener('click', () => playRound('scissors', getComputerChoice()));