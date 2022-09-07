/*
* Rock, Paper, Scissors. Goal: Return five different rounds with each its own result. Adding them to get a result then letting user know if they won.
*/

//Global Variables
let playerScore = 0;
let computerScore = 0;

//Randomized result to get PC to choose
function getComputerChoice (){
    let resultRandom = ['rock', 'paper', 'scissors'];
    return resultRandom[Math.floor(resultRandom.length * Math.random())];
}

//PlayRound function take sin two parameters from the game function. Then compares results from User's selection and PC's random selection to give a result.
// It also uses the global variables to keep track of the score depending on win/lose
function playRound(playerSelection, computerSelection) {
    if ((playerSelection == `rock` && computerSelection == `scissors`) ||
    (playerSelection == `paper` && computerSelection == `rock`) ||
    (playerSelection == `scissors` && computerSelection == `paper`)){
        playerScore += 1
        return `You won! ${playerSelection} beats ` + computerSelection;
    }

    else if (playerSelection == computerSelection){
        return `Both tied and chose ${playerSelection}. Neither win!`;
    }

    else {
        computerScore += 1
        return `You lose! ` + playerSelection + ` loses to: ` + computerSelection;
    }    
}

//Game function uses a for loop to go up to five rounds. In each round the user gets results on both their choice and their current score.
//At the end of the give rounds, depending on who won the most, they get a result of win/lose for the whole game.
function game () {
    //let computerSelection = getComputerChoice()
    for (let i = 0;i < 5;i++) {
        let playerSelection = prompt("Enter Rock, Paper, or Scissors").toLowerCase();
        let computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
        
        console.log("Player Score = " + playerScore + ". Your choice was: " + playerSelection);
        console.log("Computer Score = " + computerScore + ". PC's choice was: "  + computerSelection);

        if (playerScore > computerScore){
            console.log("You won the round!");
        }

        else if (playerScore == computerScore){
            console.log("It's currently a tie!")
        }

        else {
            console.log("You lost the round!");
        }
    }

    if (playerScore > computerScore){
        console.log("You Won the game!");
    }

    else if (playerScore == computerScore){
        console.log("It was a tie!")
    }

    else {
        console.log("You Lost the game!");
    }
}

//Calls the game function
game();

// const playerSelection = prompt("Enter Rock, Paper, or Scissors").toLowerCase();
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));
