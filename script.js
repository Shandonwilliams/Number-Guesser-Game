let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
    return Math.floor(Math.random() * 10);
}

function compareGuesses(userGuess, computerGuess, targetNumber) {
    if (userGuess === computerGuess) {
        return true;
    } else if ((userGuess - targetNumber) === (computerGuess - targetNumber)) {
        return true;
    } else if (Math.abs(userGuess - targetNumber) < Math.abs(computerGuess - targetNumber)) {
        return true;
    } else {
        return false;
    }
}

const updateScore = winner => {
    if (winner === 'human') {
        humanScore += 1;
    } else {
        computerScore += 1;
    }
}

const advanceRound = () => {
    currentRoundNumber += 1;
}