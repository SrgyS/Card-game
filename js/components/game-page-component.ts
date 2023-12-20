import { startTimer, stopTimer, gameTime, Card } from '../helpers';
import { DIFFICULTY_PAGE, RESULT_PAGE } from '../routes';
import { game } from '../script';
interface SelectedCard {
    element: Element;
    index: number;
}

export function renderGamePageComponent({
    appEl,
    goToPage,
    playCards,
}: {
    appEl: HTMLElement;
    goToPage: (page: string) => void;
    playCards: Card[];
}) {
    const cardsHTML = playCards
        .map((card, index) => {
            return `<div class="card visible" data-index="${index}">
                            <div class="card__back">
                                <img src="./static/img/card-back.png" alt="card back">
                            </div>
                            <div class="card__front">
                                <div class="card__top-left">
                                    <span class="rank">${card.rank}</span>
                                    <span class="small-suit">${getSuitSymbol(
                                        card.suit
                                    )}</span>
                                </div>
                                <div class="card__center-suit">${getSuitSymbol(
                                    card.suit
                                )}
                                </div>
                                <div class="card__down-right">
                                    <span class="rank">${card.rank}</span>
                                    <span class="small-suit">${getSuitSymbol(
                                        card.suit
                                    )}</span>
                                </div> 
                            </div>  
                        </div>`;
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

    const cardElements = appEl.querySelectorAll('.card');
    let selectedCards: SelectedCard[] = [];
    let matchedPairs = 0;
    cardElements.forEach((cardEl) => {
        cardEl.classList.remove('visible');
    });
    let completedTimeout = false;
    setTimeout(() => {
        cardElements.forEach((cardEl) => {
            cardEl.classList.add('visible');
        });
    }, 500);
    const showCardTime = setTimeout(() => {
        cardElements.forEach((cardEl) => {
            cardEl.classList.remove('visible');
        });
        completedTimeout = true;
        startTimer();
    }, 5000);

    cardElements.forEach((cardEl, index) => {
        cardEl.addEventListener('click', () => {
            if (
                selectedCards.length < 2 &&
                !cardEl.classList.contains('matched') &&
                !cardEl.classList.contains('visible')
            ) {
                cardEl.classList.add('visible');
                selectedCards.push({ element: cardEl, index });

                if (selectedCards.length === 2) {
                    const card1 = playCards[selectedCards[0].index];
                    const card2 = playCards[selectedCards[1].index];

                    if (
                        card1.rank === card2.rank &&
                        card1.suit === card2.suit
                    ) {
                        selectedCards.forEach((selectedCard) => {
                            setTimeout(() => {
                                selectedCard.element.classList.add('matched');
                            }, 600);
                        });
                        matchedPairs++;

                        if (matchedPairs === playCards.length / 2) {
                            setTimeout(() => {
                                stopTimer();
                                game.gameTime = gameTime;
                                game.gameStatus = RESULT_PAGE;
                                game.isWin = true;
                                goToPage(RESULT_PAGE);
                            }, 800);
                        }
                    } else {
                        setTimeout(() => {
                            stopTimer();
                            console.log(gameTime);
                            game.gameTime = gameTime;
                            game.gameStatus = RESULT_PAGE;
                            game.isWin = false;
                            goToPage(RESULT_PAGE);
                        }, 800);
                    }

                    selectedCards = [];
                }
            }
        });
    });

    const gameBtn = document.querySelector('.game__btn');
    if (gameBtn !== null) {
        gameBtn.addEventListener('click', () => {
            if (!completedTimeout) {
                clearTimeout(showCardTime);
            }
            stopTimer();
            goToPage(DIFFICULTY_PAGE);
        });
    }
}

const suitSymbols: {
    [key: string]: string;
} = {
    Hearts: '<img src="./static/img/hearts.svg" alt="hearts">',
    Diamonds: '<img src="./static/img/diamonds.svg" alt="diamonds">',
    Clubs: '<img src="./static/img/clubs.svg" alt="clubs">',
    Spades: '<img src="./static/img/spades.svg" alt="spades">',
};

export function getSuitSymbol(suit: string) {
    return suitSymbols[suit];
}
