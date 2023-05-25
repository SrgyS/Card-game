import { renderDifficultyPageComponent } from './components/difficulty-page-component.js';
import { renderGamePageComponent } from './components/game-page-component.js';
import {
    DIFFICULTY_PAGE,
    GAME_PAGE,
    // RESULT_PAGE
} from './routes.js';

let page = null;

export const game = {
    gameTime: 0,
    difficulty: null,
    gameStatus: page,
    cards: [],
    selectedCards: [],
};

const goToPage = (newPage) => {
    if (
        [
            DIFFICULTY_PAGE,
            GAME_PAGE,
            //   RESULT_PAGE,
        ].includes(newPage)
    ) {
        if (newPage === DIFFICULTY_PAGE) {
            page = DIFFICULTY_PAGE;
            return renderApp();
        }

        if (newPage === GAME_PAGE) {
            renderApp();
        }

        // if (newPage === RESULT_PAGE) {
        //   renderApp();
        // }

        page = newPage;
        renderApp();
        return;
    }
    throw new Error('страницы не существует');
};

export const renderApp = () => {
    const appEl = document.getElementById('app');
    if (page === DIFFICULTY_PAGE) {
        return renderDifficultyPageComponent({
            appEl,
            goToPage,
        });
    }

    if (page === GAME_PAGE) {
        return renderGamePageComponent({
            appEl,
            game,
        });
    }

    // if (page === RESULT_PAGE) {
    //   return renderResultPageComponent({
    //     appEl,
    //     // onAddPostClick({ description, imageUrl }) {
    //     //   // TODO: реализовать добавление поста в API
    //     //   // addPost({token: getToken(), description, imageUrl})
    //     //   console.log("Добавляю пост...", { description, imageUrl });
    //     //   goToPage(POSTS_PAGE);
    //     }
    //   );
    // }
};

goToPage(DIFFICULTY_PAGE);
