// Game
let playerWon = 0;
let computerWon = 0;
let tieWin = 0;
let winner = '';

function isGameOver() {
    return playerWon === 5 || computerWon === 5;
}

function finalScoreMessage() {
    return playerWon > computerWon
      ? (scoreInfo.textContent = 'Agh! You beat me. Leave with your life.')
      : (scoreInfo.textContent = 'You\'ve fallen to my trap. Your soul is mine now.')
}

function computerPlay() {
    let choices = ["rock", "paper", "scissors"];
    cInput = choices[Math.floor(Math.random()*choices.length)];

    return cInput;
}

function playRound (playerSelection, computerSelection)  {
    if (playerSelection === computerSelection) {
        winner = 'tie';
        tieWin++;
    } else if (playerSelection === "rock") {
        if (computerSelection === "scissors") {
            winner = 'player';
            playerWon++;
        } else {
            winner = 'computer';
            computerWon++;
        }     
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            winner = 'player';
            playerWon++;
        } else {
            winner = 'computer';
            computerWon++;
        } 
    } else if (playerSelection === "scissors") {
        if (computerSelection === "paper" ) {
            winner = 'player';
            playerWon++;
        } else {
            winner = 'computer';
            computerWon++;
        }
    } else {
        return;
    }
    scoreUpdate(winner, playerSelection, computerSelection);

}

// UI
const buttons = document.querySelectorAll('[data-selection]');
const btnRestart = document.getElementById('restart');
const playerScore = document.getElementById('player-score');
const computerScore = document.getElementById('computer-score');
const scoreInfo = document.getElementById('score-info');
const tiedScore = document.getElementById('tied-score');
const playerSign = document.getElementById('playerSign');
const computerSign = document.getElementById('computerSign');

btnRestart.addEventListener('click', restartGame);

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const youSelection = button.dataset.selection;
        clickListener(youSelection)
    })
})

function clickListener(youSelection) {
    
    computerSelection = computerPlay();

    playRound(youSelection, computerSelection);
    updateChoices(youSelection, computerSelection);
    scoreUpdate();

    if (isGameOver()) {
        disableBtns();
        finalScoreMessage();
        return;
    }  
}

function scoreUpdate() {
    if (winner === 'tie') {
        scoreInfo.textContent = 'Umph!...It\'s a Tie';
    } else if (winner === 'player') {
        scoreInfo.textContent = 'You Won';
    } else if (winner === 'computer') {
        scoreInfo.textContent = 'I won! >:)'
    }

    playerScore.textContent = `Player: ${playerWon}`;
    tiedScore.textContent = `Tied: ${tieWin}`;
    computerScore.textContent = `Computer: ${computerWon}`;

}

function updateChoices(playerSelection, computerSelection) {
    switch (playerSelection) {
      case 'rock':
        playerSign.textContent = '✊'
        break
      case 'paper':
        playerSign.textContent = '🖑'
        break
      case 'scissors':
        playerSign.textContent = '✌'
        break
    }
  
    switch (computerSelection) {
      case 'rock':
        computerSign.textContent = '✊'
        break
      case 'paper':
        computerSign.textContent = '🖑'
        break
      case 'scissors':
        computerSign.textContent = '✌'
        break
    }
}

function restartGame() {
    playerWon = 0;
    computerWon = 0;
    tieWin = 0;
    scoreInfo.textContent = 'Wanna Play A Game? ';
    playerScore.textContent = 'Player: 0';
    tiedScore.textContent = 'Tied: 0';
    computerScore.textContent = 'Computer: 0';
    playerSign.textContent = '❌';
    computerSign.textContent = '❌';
    enableBtns();
}

function disableBtns() {
    document.getElementById('rock').disabled = true;
    document.getElementById('paper').disabled = true;
    document.getElementById('scissors').disabled = true;

}

function enableBtns() {
    document.getElementById('rock').disabled = false;
    document.getElementById('paper').disabled = false;
    document.getElementById('scissors').disabled = false;
}