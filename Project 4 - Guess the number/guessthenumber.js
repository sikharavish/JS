let randomNumber = parseInt(Math.random()*100 + 1);
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p=document.createElement('p');

let previousGuesses = [];
let numGuesses = 1;
let playGame = true;

if(playGame) {
    submit.addEventListener('click', function(e) {
        e.preventDefault();
        let guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    });
}

function validateGuess(guess) {
    if(isNaN(guess)) {
        alert('Please enter a valid number');
        return false;
    } else if(guess < 1 || guess > 100) {
        alert('Please enter a number between 1 and 100');
        return false;
    } else {
        previousGuesses.push(guess);
        if(numGuesses === 11) {   
            displayGuess(guess);
            displayMessages(`Game Over! The number was ${randomNumber}`);
            endGame();
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }

    }
}

function checkGuess(guess) {
    if(guess === randomNumber) {
        displayMessages('Congratulations! You guessed the right number!');
        endGame();
    } else if(guess < randomNumber) {
        displayMessages('Your guess is too low!');
    } else if(guess > randomNumber) {
        displayMessages('Your guess is too high!');
    }
}
//    numGuesses++;
//    remaining.textContent = 11 - numGuesses;
//    userInput.value = '';
//   userInput.focus();

function displayGuess(guess) {
    userInput.value = '';
    guessSlot.innerHTML += `${guess}, `;
    numGuesses++;
    remaining.innerHTML = `${11 - numGuesses}`;
}

function displayMessages(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    submit.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<button id="newGame" onclick="newGame()">Start New Game</button>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame() {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function(e) {
        randomNumber = parseInt(Math.random()*100 + 1);
        previousGuesses = [];
        numGuesses = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = '${11 - numGuesses}';
        lowOrHi.innerHTML = '';
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame = true;
    });
}