const choices = ["Rock", "Paper", "Scissors"]
let playerScore = 0;
let computerScore = 0;


function computerPlay() {
  //Computer choices
 let random = choices[Math.floor(Math.random() * (choices.length))];
 console.log(random);
}

function userPlay() {
  //Player choices
  let input = prompt("Please type rock, paper or scissors into the box");
  console.log(input);
  return input.toLowerCase();
  
}

function game() {
  //5 rounds of the game
  for (let i = 0; i < 5; i++) {
    playRound();
 }
}

function playRound() {
const computerSelection = computerPlay();
const playerSelection = userPlay();

if (playerSelection === 'rock' & computerSelection === 'paper') {
  computerScore += 1;
  return('You lose, paper beats rock!');
} else if (playerSelection === 'paper' & computerSelection === 'scissors') {
  computerScore += 1;
  return('You lose, scissors beat paper!');
} else if (playerSelection === 'scissors' & computerSelection === 'paper') {
  computerScore += 1;
  return('You lose, rock beats scissors!');
} else if (playerSelection === 'rock' & computerSelection === 'scissors') {
  playerScore += 1;
  return('You win, rock beats scissors!');
} else if (playerSelection === 'paper' & computerSelection === 'rock') {
  playerScore += 1;
  return('You win, paper beats rock!');
} else if (playerSelection === 'scissors' & computerSelection === 'paper') {
  playerScore += 1;
  return('You win, scissors beat paper!');
}
if (playerScore >= 5) {
  return('You win the game!')
} else if (computerScore >=5) {
  return('Computer wins the game!')
}
}

game();