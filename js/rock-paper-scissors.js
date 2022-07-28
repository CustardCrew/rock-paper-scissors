// // function sayHello() {
// //     console.log("Hello World")
// //  }

// let question = prompt("What is your choice: ?");


function getComputerChoice (){
    const gameRandom = ['rock', 'paper', 'scissors']; 
    return gameRandom[Math.floor(gameRandom.length * Math.random())];
    
}

function singleRound (playerSelection, computerSelection) {
    //answer = answer == tie
    if (playerSelection === computerSelection) {
        return `Tied game! Both parties picked: ${playerSelection}`;
    //rock beats scissors == win     
    } else if (playerSelection === "rock" && computerSelection === "scissors"){
        return `Winner! ${playerSelection} beats scissors!`;
    //paper beats rock == win
    } else if (playerSelection === "paper" && computerSelection === "rock"){
        return `Winner! ${playerSelection} beats rock!`;
    //scissors beat paper == win
    } else if (playerSelection === "scissors" && computerSelection === "paper"){
        return `Winner! ${playerSelection} beats paper!`;
    //My selection loses against randomizer
    } else {
        return `You Lose. Your selection: ${playerSelection} lost against ${computerSelection}`;
    }
}

const playerSelection = prompt("Enter Rock, Paper, or Scissors").toLowerCase();
const computerSelection = getComputerChoice();
console.log(singleRound(playerSelection, computerSelection));

function game(singleRound) {
    for (let i = 0; i < 5; i++) {
    }
}