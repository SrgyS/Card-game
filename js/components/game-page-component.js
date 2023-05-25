export function renderGamePageComponent({ appEl, game }) {
    const cardsDeck = [];
    const suits = ['Diamonds', 'Hearts', 'Clubs', 'Spades'];
    const ranks = ['A', 'K', 'Q', 'J', '10', '9', '8', '7', '6'];

    for (let suit in suits) {
        for (let rank in ranks) {
            cardsDeck.push({ suit: suits[suit], rank: ranks[rank] });
        }
    }
    console.log(cardsDeck);
    console.log(game.difficulty);
    const cardsHTML = cardsDeck
        .map((card) => {
            console.log(card);
            return `${
                game.difficulty === 1
                    ? `
        <div class="card">
        <img src="./scss/assets/img/card-back.png" alt="card back">
        </div>`
                    : `<div class="card">
                            <div class="card__top-left">
                                <span class="rank">${card.rank}</span>
                                <span class="small-suit">${getSuitSymbol(
                                    card.suit
                                )}</span>
                            </div>
                            <div class="card__center-suit">${getSuitSymbol(
                                card.suit
                            )}</div>
                            <div class="card__down-right">
                                <span class="rank">${card.rank}</span>
                                <span class="small-suit">${getSuitSymbol(
                                    card.suit
                                )}</span>
                            </div>   
                        </div>`
            }`;
        })
        .join('');

    const appHtml = `<div class="game">
    <div class="game__info">
      <div class="timer">
        <div class="timer__block">
          <span class="timer__label">min</span>
          <span id="minutes">00</span>
        </div>
        <span class="timer__dot">.</span>
        <div class="timer__block">
          <span class="timer__label">sek</span>
          <span id="seconds">00</span>
        </div>
      </div>
      <button class="game__btn btn">Начать заново</button>
    </div>
    <div class="cards">${cardsHTML}</div>
  `;

    appEl.innerHTML = appHtml;
}

function getSuitSymbol(suit) {
    switch (suit) {
        case 'Hearts':
            return '<img src="./scss/assets/img/hearts.svg" alt="hearts">';
        case 'Diamonds':
            return '<img src="./scss/assets/img/diamonds.svg" alt="diamonds">';
        case 'Clubs':
            return '<img src="./scss/assets/img/clubs.svg" alt="clubs">';
        case 'Spades':
            return '<img src="./scss/assets/img/spades.svg" alt="spades">';
    }
}
