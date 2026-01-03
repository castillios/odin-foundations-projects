let humanScore = 0;
let computerScore = 0;

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
    let humanChoice = prompt("Rock, paper, scissors?");
    return humanChoice;
}

// console.log(getComputerChoice())
console.log(getHumanChoice())
