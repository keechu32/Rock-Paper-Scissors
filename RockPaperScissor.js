let choice = ["Rock","Paper","Scissor"];
let playerScore=0;
let compScore=0;

//randomises computer value
function computerPlay(){
    let compSelection = choice[Math.floor(Math.random()*choice.length)];
    return compSelection;
}
//playing a round of the game
function checkwin(playerSelection, compSelection){
    if(playerSelection===compSelection){
        return["Draw!",'grey'];
    }
    if(playerSelection==="Rock"&&compSelection==="Scissor"){
        playerScore++;
        return["You Win! Rock beats Scissor!",'green'];
    }
    if(playerSelection==="Paper"&&compSelection==="Rock"){
        playerScore++;
        return["You Win! Paper beats Rock!",'green'];
    }
    if(playerSelection==="Scissor"&&compSelection==="Paper"){
        playerScore++;
        return["You Win! Scissor beats Paper!",'green'];
    }
    if(playerSelection==="Scissor"&&compSelection==="Rock"){
        compScore++;
        return["You Lose! Rock beats Scissor!",'red'];
    }
    if(playerSelection==="Rock"&&compSelection==="Paper"){
        compScore++;
        return["You Lose! Paper beats Rock!",'red'];
    }
    if(playerSelection==="Paper"&&compSelection==="Scissor"){
        compScore++;
        return["You Lose! Scissor beats Paper",'red'];
    }
}
//updates the score
function playRound(playerSelection){
    let compSelection;
    compSelection = computerPlay();
    let result = checkwin(playerSelection,compSelection);
    const statusBar = document.querySelector('.status');
    if(compScore==5){
        console.log(`The computer has won by ${compScore}-${playerScore}!`);
        document.querySelector('.status').textContent = `The computer has won by a score of ${playerScore} - ${compScore}!`;
        document.querySelector('.status').style.color="red";
        document.querySelector('.player-score').textContent = 0;
        document.querySelector('.comp-score').textContent = 0;
        playerScore = 0;
        compScore = 0;
    }
    if(playerScore==5){
        document.querySelector('.status').textContent = `You have won by a score of ${playerScore} - ${compScore}!`;
        document.querySelector('.status').style.color="green";
        document.querySelector('.player-score').textContent = 0;
        document.querySelector('.comp-score').textContent = 0;
        playerScore = 0;
        compScore = 0;
    }
    else{
        statusBar.textContent = result[0];
        statusBar.style.color = result[1];
    }
    document.querySelector('.player-score').textContent = playerScore;
    document.querySelector('.comp-score').textContent = compScore;
}
//initialising the game
function game(){
    choice.forEach(playerSelection =>{
        document.querySelector(`.${playerSelection}`).addEventListener('click',function(){
            playRound(playerSelection);
        });
    });
}
game();