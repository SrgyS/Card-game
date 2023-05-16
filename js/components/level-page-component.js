export function renderLevelPageComponent ({appEl}) {
    const appHtml = `<div class="level-box">
                        <p class="level-box__title">Выбери сложность</p>
                        <div class="level-box__container">
                            <div class="level-box__item">1</div>
                            <div class="level-box__item">2</div>
                            <div class="level-box__item">3</div>
                        </div>
                        <button class="btn">Старт</button>
                    </div>`;
                    appEl.innerHTML = appHtml;
}

