export function generateDeck(difficulty) {
    let cardsDeck = [];

    const suits = ['Diamonds', 'Hearts', 'Clubs', 'Spades'];
    const ranks = ['A', 'K', 'Q', 'J', '10', '9', '8', '7', '6'];

    for (let suit of compareRandom(suits)) {
        for (let rank of compareRandom(ranks)) {
            cardsDeck.push({ suit, rank });
        }
    }

    cardsDeck = compareRandom(cardsDeck)
        .slice(0, difficulty * 3)
        .flatMap((card) => [card, { ...card }]);

    return compareRandom(cardsDeck);
}

function compareRandom(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

let timerInterval = null;
export let gameTime = 0;

export function startTimer() {
    let minutes = 0;
    let seconds = 0;
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');

    timerInterval = setInterval(() => {
        seconds++;
        if (seconds === 60) {
            seconds = 0;
            minutes++;
        }
        gameTime = minutes * 60 + seconds;
        minutesElement.textContent = minutes < 10 ? `0${minutes}` : minutes;
        secondsElement.textContent = seconds < 10 ? `0${seconds}` : seconds;
    }, 1000);
    return gameTime;
}

export function stopTimer() {
    clearInterval(timerInterval);
}
