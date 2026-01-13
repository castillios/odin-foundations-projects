function getComputerChoice() {
    let randInt = Math.floor(Math.random() * 3);

    if (randInt == 0) {
        return "rock";
    }
    else if (randInt == 1) {
        return "paper";
    } else if(randInt == 2) {
        return "scissors";
    }
}

function getHumanChoice() {
    let humanChoice = prompt("rock, paper, scissors?");
    return humanChoice;
}

function playRound(humanChoice, computerChoice, humanScore, computerScore) {
    let humanWon = false;
    let isTied = false;
    if (humanChoice === "rock") {
        if (computerChoice === "scissors") {
            humanScore += 1;
            humanWon = true;
        } else if (computerChoice === "paper") {
            computerScore += 1;
        } else {
            isTied = true;
        }
    } else if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            humanScore += 1;
            humanWon = true;
        } else if (computerChoice === "scissors") {
            computerScore += 1;
        } else {
            isTied = true;
        }
    } else if (humanChoice === "scissors") {
        if (computerChoice === "paper") {
            humanScore += 1;
            humanWon = true;
        } else if (computerChoice === "rock") {
            computerScore += 1;
        } else {
            isTied = true;
        }
    }
    console.log(`You played: ${humanChoice}. Computer played: ${computerChoice}.`)
    if (isTied) {
        console.log(`${humanChoice.slice(0,1).toUpperCase()}${humanChoice.slice(1)} ties with ${computerChoice}.`)
    }
    else if (humanWon) {
        console.log(`${humanChoice.slice(0,1).toUpperCase()}${humanChoice.slice(1)} beats ${computerChoice}! Player +1`)
    } else {
        console.log(`${humanChoice.slice(0,1).toUpperCase()}${humanChoice.slice(1)} loses to ${computerChoice}! Computer +1`)
    }
    console.log(`Player: ${humanScore} Computer: ${computerScore}`)
    return [humanScore, computerScore];
}

function playGame(rounds) {
    let scores = {
        humanScore: 0,
        computerScore: 0
    };

    for (let i = 0; i < rounds; i++) {
        console.log(`Round ${i + 1}`)
        updatedScores = playRound(getComputerChoice(), getComputerChoice(), scores.humanScore, scores.computerScore);
        scores.humanScore = updatedScores[0];
        scores.computerScore = updatedScores[1];
    }
}



playGame(10);
