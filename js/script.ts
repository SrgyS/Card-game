import '../scss/style.css';
import { renderDifficultyPageComponent } from './components/difficulty-page-component';
import { renderGamePageComponent } from './components/game-page-component';
import { renderResultPageComponent } from './components/result-page-component';
import { DIFFICULTY_PAGE, GAME_PAGE, RESULT_PAGE } from './routes';
import { Card } from '../js/helpers';
export let page = '';
const appEl: HTMLElement | null = document.getElementById('app');

interface Game {
    gameTime: number;
    difficulty: number | null;
    gameStatus: string;
    cards: Card[];
    selectedCards: { element: HTMLElement; index: number }[];
    isWin: boolean | null;
}

export const game: Game = {
    gameTime: 0,
    difficulty: null,
    gameStatus: page,
    cards: [],
    selectedCards: [],
    isWin: null,
};

export const goToPage = (newPage: string): void => {
    if ([DIFFICULTY_PAGE, GAME_PAGE, RESULT_PAGE].includes(newPage)) {
        if (newPage === DIFFICULTY_PAGE) {
            page = DIFFICULTY_PAGE;
            return renderApp();
        }

        if (newPage === GAME_PAGE) {
            const playCards = game.cards;
            return renderGamePageComponent({
                appEl: appEl ? appEl : document.createElement('div'),
                goToPage,
                playCards,
            });
        }

        if (newPage === RESULT_PAGE) {
            return renderResultPageComponent({
                appEl: appEl ? appEl : document.createElement('div'),
                goToPage,
            });
        }
    }

    throw new Error('Страница не существует');
};

export const renderApp = () => {
    if (page === DIFFICULTY_PAGE) {
        return renderDifficultyPageComponent({
            appEl: appEl ? appEl : document.createElement('div'),
            goToPage,
        });
    }

    if (page === GAME_PAGE) {
        const playCards = game.cards;
        return renderGamePageComponent({
            appEl: appEl ? appEl : document.createElement('div'),
            goToPage,
            playCards,
        });
    }

    if (page === RESULT_PAGE) {
        return renderResultPageComponent({
            appEl: appEl ? appEl : document.createElement('div'),
            goToPage,
        });
    }
};

goToPage(DIFFICULTY_PAGE);
