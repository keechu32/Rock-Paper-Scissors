var playervalue
var playerScore;
var compScore;

// Makes the input of the correct type
function Uniquestring(playervalue){
    var str1 = playervalue.charAt(0).toUpperCase()+playervalue.slice(1).toLowerCase();
    return str1
}

//randomises computer value
function computerPlay(){
    var comp = ["Rock","Scissor","Paper"];
    var compSelection = comp[Math.floor(Math.random()*comp.length)];
    return compSelection;
}

// plays one round of the game
function playRound(playerSelection, compSelection){
    if(playerSelection===compSelection){
        return("Draw!");
    }
    if(playerSelection==="Rock"&&compSelection==="Scissor"){
        return("You Win! Rock beats Scissor!");
    }
    if(playerSelection==="Paper"&&compSelection==="Rock"){
        return("You Win! Paper beats Rock!");
    }
    if(playerSelection==="Scissor"&&compSelection==="Paper"){
        return("You Win! Scissor beats Paper!");
    }
    if(playerSelection==="Scissor"&&compSelection==="Rock"){
        return("You Lose! Rock beats Scissor!");
    }
    if(playerSelection==="Rock"&&compSelection==="Paper"){
        return("You Lose! Paper beats Rock!");
    }
    if(playerSelection==="Paper"&&compSelection==="Scissor"){
        return("You Lose! Scissor beats Paper");
    }
}
function game(){
    playerScore=0;
    compScore=0;
    for(let i = 0; i<5;i++){
        var compSelection = computerPlay();
        var playervalue = window.prompt("Rock Paper or Scissor?");
        var playerSelection = Uniquestring(playervalue);
        console.log(playRound(playerSelection,compSelection));
        if(playRound(playerSelection,compSelection).charAt(4)==="W"){
            playerScore++;
            continue;
        }
        if(playRound(playerSelection,compSelection).charAt(4)==="L"){
            compScore++;
            continue;
        }
        if(playRound(playerSelection,compSelection).charAt(0)==="D"){
            continue;
        }
    }
    if(playerScore>compScore){
        return "You Win the Game!";
    }
    if(playerScore<compScore){
        return "You Lose the Game!"
    }
    if(playerScore=compScore){
        return "Draw Game!"
    }
}
console.log(game());