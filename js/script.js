import '../scss/style.css';
import { renderDifficultyPageComponent } from './components/difficulty-page-component.js';
import { renderGamePageComponent } from './components/game-page-component.js';
import { renderResultPageComponent } from './components/result-page-component.js';
import { DIFFICULTY_PAGE, GAME_PAGE, RESULT_PAGE } from './routes.js';

let page = null;
const appEl = document.getElementById('app');

export const game = {
    gameTime: 0,
    difficulty: null,
    gameStatus: page,
    cards: [],
    selectedCards: [],
    isWin: null,
};

export const goToPage = (newPage) => {
    if ([DIFFICULTY_PAGE, GAME_PAGE, RESULT_PAGE].includes(newPage)) {
        if (newPage === DIFFICULTY_PAGE) {
            page = DIFFICULTY_PAGE;
            return renderApp();
        }

        if (newPage === GAME_PAGE) {
            const playCards = game.cards;
            return renderGamePageComponent({
                appEl,
                goToPage,
                playCards,
            });
        }

        if (newPage === RESULT_PAGE) {
            return renderResultPageComponent({
                appEl,
                goToPage,
            });
        }
    }

    throw new Error('Страница не существует');
};

export const renderApp = () => {
    if (page === DIFFICULTY_PAGE) {
        return renderDifficultyPageComponent({
            appEl,
            goToPage,
        });
    }

    if (page === GAME_PAGE) {
        const playCards = game.cards;
        return renderGamePageComponent({
            appEl,
            goToPage,
            playCards,
        });
    }

    if (page === RESULT_PAGE) {
        return renderResultPageComponent({
            appEl,
            goToPage,
        });
    }
};

goToPage(DIFFICULTY_PAGE);
