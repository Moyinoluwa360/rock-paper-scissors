function getComputerChoice(){
    let fg = Math.floor(Math.random()*3)
    let computerChoices = ["rock", "paper", "scissors"];
    let choice = computerChoices[Math.floor(Math.random()*3)];
    return choice;
}
function playRound(playerSelection , computerSelection){
    if (playerSelection == computerSelection){
        return "It's a tie";
    }else if ( playerSelection == "rock" && computerSelection == "paper"){
        return "You lose! paper wraps rock";
    }else if (playerSelection == "rock" && computerSelection == "scissors"){
        return "You win! rock beats scissors";
    }else if (playerSelection == "paper" && computerSelection == "scissors"){
        return "You lose! scissors cuts paper";
    }else if (playerSelection == "paper" && computerSelection == "rock"){
        return "You win! paper wraps rock";
    }else if (playerSelection == "scissors" && computerSelection == "paper"){
        return "You win! scissors cuts paper";
    }else if (playerSelection == "scissors" && computerSelection == "rock"){
        return "You lose! rock beats scissors";
    }
}
const rockBtn = document.querySelector("#rock_button")
const paperBtn = document.querySelector("#paper_button")
const scissorsBtn = document.querySelector("#scissors_button")
let computerPoints = document.querySelector("#computers_points")
let playerPoints = document.querySelector("#your_points")
const pointCon1 = document.querySelector("#pointsContainer1")
const pointCon2 = document.querySelector("#pointsContainer2")
let divResult = document.querySelector("#results")
const resultCon = document.querySelector("#resultContainer")
const body = document.querySelector("body").style

let playerScoreCounter = 0;
let computerScoreCounter = 0;

rockBtn.addEventListener('click', () => {
    body.backgroundColor = "rgb(197, 236, 236)";
    let computerSelection = getComputerChoice() ;
    let gameResult = playRound("rock", computerSelection)
    if (gameResult.includes("win!")){
        playerScoreCounter += 1 ;
    }else if(gameResult.includes("lose!")){
        computerScoreCounter += 1;
    }
    computerPoints.textContent = String(computerScoreCounter) ;
    playerPoints.textContent = String(playerScoreCounter) ;
    pointCon1.appendChild(computerPoints);
    pointCon2.appendChild(playerPoints);
    divResult.textContent = gameResult ;
    if (playerScoreCounter == 5 ){
        playerScoreCounter = 0;
        computerScoreCounter = 0;
        body.backgroundColor = "green" ;
        divResult.textContent = "Congratulations you WON 🎉🎈🎊";
        resultCon.appendChild(divResult);
    }else if(computerScoreCounter == 5){
        playerScoreCounter = 0;
        computerScoreCounter = 0;
        body.backgroundColor = "red" ;
        divResult.textContent = "Sorry you LOST💔... Try again";
        resultCon.appendChild(divResult);
    }
    resultCon.appendChild(divResult);
  });
paperBtn.addEventListener('click', () => {
    body.backgroundColor = "rgb(197, 236, 236)";
    let computerSelection = getComputerChoice() ;
    let gameResult = playRound("paper", computerSelection)
    if (gameResult.includes("win!")){
        playerScoreCounter += 1 ;
    }else if(gameResult.includes("lose!")){
        computerScoreCounter += 1;
    }
    computerPoints.textContent = String(computerScoreCounter) ;
    playerPoints.textContent = String(playerScoreCounter) ;
    pointCon1.appendChild(computerPoints);
    pointCon2.appendChild(playerPoints);
    divResult.textContent = gameResult ;
    if (playerScoreCounter == 5 ){
        playerScoreCounter = 0;
        computerScoreCounter = 0;
        body.backgroundColor = "green" ;
        divResult.textContent = "Congratulations you WON 🎉🎈🎊";
        resultCon.appendChild(divResult);
    }else if(computerScoreCounter == 5){
        playerScoreCounter = 0;
        computerScoreCounter = 0;
        body.backgroundColor = "red" ;
        divResult.textContent = "Sorry you LOST💔... Try again";
        resultCon.appendChild(divResult);
    }
    resultCon.appendChild(divResult);
  });
scissorsBtn.addEventListener('click', () => {
    body.backgroundColor = "rgb(197, 236, 236)";
    let computerSelection = getComputerChoice() ;
    let gameResult = playRound("scissors", computerSelection)
    if (gameResult.includes("win!")){
        playerScoreCounter += 1 ;
    }else if(gameResult.includes("lose!")){
        computerScoreCounter += 1;
    }
    computerPoints.textContent = String(computerScoreCounter) ;
    playerPoints.textContent = String(playerScoreCounter) ;
    pointCon1.appendChild(computerPoints);
    pointCon2.appendChild(playerPoints);
    divResult.textContent = gameResult ;
    if (playerScoreCounter == 5 ){
        playerScoreCounter = 0;
        computerScoreCounter = 0;
        body.backgroundColor = "green" ;
        divResult.textContent = "Congratulations you WON 🎉🎈🎊";
        resultCon.appendChild(divResult);
    }else if(computerScoreCounter == 5){
        playerScoreCounter = 0;
        computerScoreCounter = 0;
        body.backgroundColor = "red" ;
        divResult.textContent = "Sorry you LOST💔... Try again";
        resultCon.appendChild(divResult);
    }
    resultCon.appendChild(divResult);
  });