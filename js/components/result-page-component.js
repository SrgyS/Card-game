import { DIFFICULTY_PAGE } from '../routes.js';
import { game } from '../script.js';
// import { GAME_PAGE } from '../routes.js';
// import { generateDeck } from '../helpers.js';

export function renderResultPageComponent({ appEl, goToPage }) {
    console.log(game);
    const appHtml = `<div class="main">
    <div class = "box">
    <img
    src="./static/img/win-img.png"
    alt="colorfull cone"
    class="win__img"/>
                        <p class="box__title result-box__title">${
                            game.isWin ? 'Вы выиграли!' : 'Вы проиграли!'
                        }</p>
                       
                        <p class = "timer__title">Затраченное время</p>
                           
                            <div class="timer result-timer">
                            <div class="timer__block">
                             
                              <span id="minutes">00</span>
                            </div>
                            <span class="timer__dot">.</span>
                            <div class="timer__block">
                             
                              <span id="seconds">00</span>
                            </div>
                          </div>
                          <button type="submit" class="btn result-btn" id="start-btn">Старт</button>
                        </div>
                    </div>
                   

                </div>`;

    appEl.innerHTML = appHtml;

    document.getElementById('start-btn').addEventListener('click', () => {
        goToPage(DIFFICULTY_PAGE);
    });

    // const difficultyFormEl = appEl.querySelector('.difficulty-form');
    // const formErrorEl = appEl.querySelector('.form-error');

    // const difficultyBtnElements = document.querySelectorAll(
    //     '.difficulty-box__item'
    // );
    // let prevSelectedBtn = null;

    // difficultyBtnElements.forEach((difficultyBtnEl) => {
    //     difficultyBtnEl.addEventListener('click', () => {
    //         setError('');
    //         if (prevSelectedBtn !== null) {
    //             prevSelectedBtn.classList.remove('selected');
    //         }
    //         difficultyBtnEl.classList.add('selected');
    //         prevSelectedBtn = difficultyBtnEl;
    //     });
    // });

    // difficultyFormEl.addEventListener('submit', (e) => {
    //     e.preventDefault();
    //     const selectedDifficultyBtn = difficultyFormEl.querySelector(
    //         "input[name='difficulty']:checked"
    //     );

    //     if (!selectedDifficultyBtn) {
    //         setError('Выберите уровень сложности!');
    //         return;
    //     }

    //     const selectedDifficulty = parseInt(selectedDifficultyBtn.value);
    //     game.difficulty = selectedDifficulty;
    //     game.gameStatus = GAME_PAGE;
    //     game.cards = generateDeck(selectedDifficulty);
    //     goToPage(GAME_PAGE);
    // });

    // function setError(message) {
    //     formErrorEl.textContent = message;
    // }
}
