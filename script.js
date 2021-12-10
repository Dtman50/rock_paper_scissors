let gamesPlayed = 1;
let playerWon = 0;
let computerWon = 0;
let playerPlayed = ("");
let computerPlayed = ("");
game();

alert("You've won " + playerWon + " games.");
alert("The computer won " + computerWon + " games.");

if (playerWon > computerWon) {
    alert("YOU WON THE GAME! Congrats. Reload to win more.")
} else if (playerWon < computerWon) {
    alert("YOU SUCK. Reload to get your revenge")
} else {
    alert("Well don't stop here! BREAK THE TIE! Reload to play more.")
}



function computerPlay() {
    let choices = ["rock", "paper", "scissors"];
    let result = choices[Math.floor(Math.random()*choices.length)];

    return result;
}

function playerPlay() {
    let playerChoice = prompt(" Let's Play a Game: \n Choose Rock, Paper, or Scissors")

    switch (playerChoice) {
        case "Rock":
        case "rock":
        case "ROCK":
            return "rock";
        case "Paper":
        case "PAPER":
        case "paper":
            return "paper";  
        case "SCISSORS":
        case "Scissors":
        case "scissors":
            return "scissors";
        default:
            return "Enter rock, paper, or scissors";
    }
}

function playRound (playerSelection, computerSelection) {

    if (playerSelection === "rock" && computerSelection === "paper") {
        alert("You LOSE! Computer chose paper.");
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        alert("You WIN! Computer chose Rock.");
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        alert("You WIN! Computer chose Scissors.");
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        alert("You LOSE! Computer chose Rock.");
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        alert("You Win! Computer chose Paper!");
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        alert("You Lose! Computer chose Scissors!");
    } else if (playerSelection === computerSelection){
        alert("Wow, This is awkward. It's a TIE!!");
    } else {
        alert("Player, Enter the correct input.");
    }
}

function game () {

    while (gamesPlayed <= 5) {

        playerPlayed = playerPlay();
        computerPlayed = computerPlay();
    

        playRound(playerPlayed, computerPlayed);

        if (playerPlayed === "rock" && computerPlayed === "paper") {
            computerWon++;
            gamesPlayed++
        } else if (playerPlayed === "rock" && computerPlayed === "scissors") {
            playerWon++;
            gamesPlayed++;
        } else if (playerPlayed === "paper" && computerPlayed === "rock") {
            playerWon++;
            gamesPlayed++;
        } else if (playerPlayed === "paper" && computerPlayed === "scissors") {
            computerWon++;
            gamesPlayed++;
        } else if (playerPlayed === "scissors" && computerPlayed === "rock") {
            computerWon++;
            gamesPlayed++;
        } else if (playerPlayed === "scissors" && computerPlayed === "paper") {
            playerWon++;
            gamesPlayed++;
        } else {
            continue;
        }
    }
}