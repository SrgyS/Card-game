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
