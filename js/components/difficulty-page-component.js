import { game } from '../script.js';
import { GAME_PAGE } from '../routes.js';
import { generateDeck } from '../helpers.js';

export function renderDifficultyPageComponent({ appEl, goToPage }) {
    const appHtml = `<div class="main">
    <form class="difficulty-form">
                    <div class="difficulty-box">
                        <p class="difficulty-box__title">Выбери сложность</p>
                        <div class="difficulty-box__container">
                            <label class="difficulty-box__item">
                                <input type="radio" name="difficulty" value="1" />
                                <span class="difficulty-box__item-text">1</span>
                            </label>
                            <label class="difficulty-box__item">
                                <input type="radio" name="difficulty" value="2" />
                                <span class="difficulty-box__item-text">2</span>
                            </label>
                            <label class="difficulty-box__item">
                                <input type="radio" name="difficulty" value="3" />
                                <span class="difficulty-box__item-text">3</span>
                            </label>
                        </div>
                        <button type="submit" class="btn" id="start-btn">Старт</button>
                        <div class="form-error"></div>
                    </div>
                </form>
                </div>`;

    appEl.innerHTML = appHtml;

    //         const setError = (message) => {
    //             appEl.querySelector(".form-error").textContent = message;
    //           };

    //   const difficultyBtnElements = document.querySelectorAll(".difficulty-box__item");
    //   let selectedDifficultyBtn = null;

    //   difficultyBtnElements.forEach((difficultyBtnEl, index) => {
    //     difficultyBtnEl.addEventListener('click', (e) => {
    //         setError("")
    //         if (selectedDifficultyBtn != null) {
    //             selectedDifficultyBtn.classList.remove("selected")
    //         }
    //         difficultyBtnEl.classList.add("selected")
    //         selectedDifficultyBtn = difficultyBtnEl;

    //         game.difficulty = index + 1;
    //         game.gameStatus = CARDS_PAGE;
    //         game.cards = game.difficulty * 6

    //         console.log(game)
    //     })
    //   })

    //   const startBtnEl = document.getElementById("start-btn")

    //   startBtnEl.addEventListener("click", (e) => {
    //     if (game.difficulty == null){
    //         setError('Выберите уровень сложности!')
    //     } else {
    //         goToPage(CARDS_PAGE)
    //     }
    //   })

    const difficultyFormEl = appEl.querySelector('.difficulty-form');
    const formErrorEl = appEl.querySelector('.form-error');

    const difficultyBtnElements = document.querySelectorAll(
        '.difficulty-box__item'
    );
    let prevSelectedBtn = null;

    difficultyBtnElements.forEach((difficultyBtnEl) => {
        difficultyBtnEl.addEventListener('click', () => {
            setError('');
            if (prevSelectedBtn !== null) {
                prevSelectedBtn.classList.remove('selected');
            }
            difficultyBtnEl.classList.add('selected');
            prevSelectedBtn = difficultyBtnEl;
        });
    });

    difficultyFormEl.addEventListener('submit', (e) => {
        e.preventDefault();
        const selectedDifficultyBtn = difficultyFormEl.querySelector(
            "input[name='difficulty']:checked"
        );

        if (!selectedDifficultyBtn) {
            setError('Выберите уровень сложности!');
            return;
        }

        const selectedDifficulty = parseInt(selectedDifficultyBtn.value);
        game.difficulty = selectedDifficulty;
        game.gameStatus = GAME_PAGE;
        game.cards = generateDeck(selectedDifficulty);
        goToPage(GAME_PAGE);
    });

    function setError(message) {
        formErrorEl.textContent = message;
    }
}
