import { game } from '../script';
import { GAME_PAGE } from '../routes';
import { generateDeck } from '../helpers';

export function renderDifficultyPageComponent({
    appEl,
    goToPage,
}: {
    appEl: HTMLElement;
    goToPage: (page: string) => void;
}) {
    const appHtml = `<div class="main">
    <form class="difficulty-form">
                    <div class="box">
                        <p class="box__title">Выбери сложность</p>
                        <div class="box__container">
                            <label class="box__item">
                                <input type="radio" name="difficulty" value="1" />
                                <span class="box__item-text">1</span>
                            </label>
                            <label class="box__item">
                                <input type="radio" name="difficulty" value="2" />
                                <span class="box__item-text">2</span>
                            </label>
                            <label class="box__item">
                                <input type="radio" name="difficulty" value="3" />
                                <span class="box__item-text">3</span>
                            </label>
                        </div>
                        <button type="submit" class="btn difficulty-btn" id="start-btn">Старт</button>
                        <div class="form-error"></div>
                    </div>
                </form>
                </div>`;

    appEl.innerHTML = appHtml;

    const setError = (message: string) => {
        const formErrorEl = appEl.querySelector('.form-error') as HTMLElement;
        if (formErrorEl !== null) {
            formErrorEl.textContent = message;
        }
    };
    const difficultyFormEl = appEl.querySelector(
        '.difficulty-form'
    ) as HTMLFormElement;
    const formErrorEl = appEl.querySelector('.form-error');

    const difficultyBtnElements = document.querySelectorAll('.box__item');
    let prevSelectedBtn: Element | null = null;

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

    if (difficultyFormEl !== null) {
        difficultyFormEl.addEventListener('submit', (e) => {
            e.preventDefault();
            const selectedDifficultyBtn =
                difficultyFormEl.querySelector<HTMLInputElement>(
                    "input[name='difficulty']:checked"
                );

            if (!selectedDifficultyBtn) {
                setError('Выберите уровень сложности!');
                return;
            }

            const selectedDifficulty = parseInt(
                selectedDifficultyBtn.value,
                10
            );
            game.difficulty = selectedDifficulty;
            game.gameStatus = GAME_PAGE;
            game.cards = generateDeck(selectedDifficulty);
            goToPage(GAME_PAGE);
        });
    }
}
