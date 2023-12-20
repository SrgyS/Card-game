import { DIFFICULTY_PAGE } from '../routes';
import { game } from '../script';

export function renderResultPageComponent({
    appEl,
    goToPage,
}: {
    appEl: HTMLElement;
    goToPage: (page: string) => void;
}) {
    const minutes = Math.floor(game.gameTime / 60);
    const seconds = game.gameTime % 60;
    const appHtml = `<div class="main">
    <div class = "box result-box scale-in-center">
    <img
    src="./static/img/${game.isWin ? 'win-img.png' : 'loose-img.png'}"
    alt="colorfull cone"
    class="win__img"/>
                        <p class="box__title result-box__title">${
                            game.isWin ? 'Вы выиграли!' : 'Вы проиграли!'
                        }</p>
                       
                        <p class = "timer__title">Затраченное время</p>
                           
                            <div class="timer result-timer">
                            <div class="timer__block">
                             
                              <span id="minutes">${
                                  minutes < 10 ? '0' + minutes : minutes
                              }</span>
                            </div>
                            <span class="timer__dot">.</span>
                            <div class="timer__block">
                             
                              <span id="seconds">${
                                  seconds < 10 ? '0' + seconds : seconds
                              }</span>
                            </div>
                          </div>
                          <button type="submit" class="btn result-btn" id="start-btn">Играть снова</button>
                        </div>
                    </div>
                   

                </div>`;

    appEl.innerHTML = appHtml;

    const startBtn = appEl.querySelector('#start-btn');
    if (startBtn) {
        startBtn.addEventListener('click', () => {
            goToPage(DIFFICULTY_PAGE);
        });
    }
}
