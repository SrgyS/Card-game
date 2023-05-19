
export function renderCardsPageComponent ({appEl, game}) {
    const appHtml = `<div class="cards">
                        <p>Уровень сложности: ${game.difficulty}</p>
                        <p>Число карт: ${game.cards}</p>                       
                    </div>`;
                    appEl.innerHTML = appHtml;
                    

}