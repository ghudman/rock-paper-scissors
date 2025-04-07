function getComputerChoice() {
    var choice = ['rock', 'paper', 'scissors'];
    var randomIndex = Math.floor(Math.random() * choice.length);
    return choice[randomIndex];
}

function getHumanChoice() {
    var choice = prompt("Enter your choice (rock, paper, scissors):").toLowerCase();
    return choice;
}

function playGame() {
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

for (var i = 0; i < 5; i++) {
    var humanSelection = getHumanChoice();
    var computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
    console.log(`Score: You ${humanScore} - Computer ${computerScore}`);
}
}

playGame();