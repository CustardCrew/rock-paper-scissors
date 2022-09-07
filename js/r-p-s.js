let playerScore = 0;
let computerScore = 0;

function getComputerChoice (){
    let resultRandom = ['rock', 'paper', 'scissors'];
    return resultRandom[Math.floor(resultRandom.length * Math.random())];
}

function playRound(playerSelection, computerSelection) {
    //let computerSelection = getComputerChoice()
    //let result = ""

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


game();
// const playerSelection = prompt("Enter Rock, Paper, or Scissors").toLowerCase();
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));
