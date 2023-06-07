export interface Card {
    suit: string;
    rank: string;
}

export function generateDeck(difficulty: number): Card[] {
    let cardsDeck: Card[] = [];

    const suits = ['Diamonds', 'Hearts', 'Clubs', 'Spades'];
    const ranks = ['A', 'K', 'Q', 'J', '10', '9', '8', '7', '6'];

    for (const suit of compareRandom(suits)) {
        for (const rank of compareRandom(ranks)) {
            if (typeof suit === 'string' && typeof rank === 'string') {
                cardsDeck.push({ suit, rank });
            }
        }
    }
    cardsDeck = compareRandom(cardsDeck)
        .slice(0, difficulty * 3)
        .flatMap((card: Card) => [card, { ...card }] as const);

    return compareRandom(cardsDeck) as Card[];
}

export function compareRandom<T>(arr: T[]): T[] {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

let timerInterval: number;
export let gameTime = 0;

export function startTimer() {
    let minutes = 0;
    let seconds = 0;
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');

    timerInterval = window.setInterval(() => {
        seconds++;
        if (seconds === 60) {
            seconds = 0;
            minutes++;
        }
        gameTime = minutes * 60 + seconds;
        if (minutesElement !== null) {
            minutesElement.textContent =
                (minutes < 10 ? '0' : '') + minutes.toString();
        }

        if (secondsElement !== null) {
            secondsElement.textContent =
                (seconds < 10 ? '0' : '') + seconds.toString();
        }
    }, 1000);
    return gameTime;
}

export function stopTimer() {
    clearInterval(timerInterval);
}
