function getComputerChoice() {
    const choice = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choice.length);
    return choice[randomIndex];
}

function getHumanChoice() {
    let choice = prompt("Enter your choice (rock, paper, scissors):").toLowerCase();
    return choice;
}

var humanScore = 0;
var computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        humanScore++;
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    } else {
        computerScore++;
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);