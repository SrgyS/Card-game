import { game } from "../script.js"
import { CARDS_PAGE } from "../routes.js";

export function renderDifficultyPageComponent ({appEl, goToPage}) {

    const appHtml = `<div class="difficulty-box">
                        <p class="difficulty-box__title">Выбери сложность</p>
                        <div class="difficulty-box__container">
                            <div class="difficulty-box__item">1</div>
                            <div class="difficulty-box__item">2</div>
                            <div class="difficulty-box__item">3</div>
                        </div>
                        <button class="btn" id="start-btn">Старт</button>
                        <div class="form-error"></div>
                    </div>`;
                    appEl.innerHTML = appHtml;

                    const setError = (message) => {
                        appEl.querySelector(".form-error").textContent = message;
                      };

              const difficultyBtnElements = document.querySelectorAll(".difficulty-box__item"); 
              let selectedDifficultyBtn = null;    

              difficultyBtnElements.forEach((difficultyBtnEl, index) => {
                difficultyBtnEl.addEventListener('click', (e) => {
                    setError("")
                    if (selectedDifficultyBtn != null) {
                        selectedDifficultyBtn.classList.remove("selected")
                    }
                    difficultyBtnEl.classList.add("selected")
                    selectedDifficultyBtn = difficultyBtnEl;

                    game.difficulty = index + 1;
                    game.gameStatus = CARDS_PAGE;
                    game.cards = game.difficulty * 6
                    
                    console.log(game)
                })
              })

              const startBtnEl = document.getElementById("start-btn")

              startBtnEl.addEventListener("click", (e) => {
                if (game.difficulty == null){
                    setError('Выберите уровень сложности!')
                } else {
                    goToPage(CARDS_PAGE)
                }
              })
}

