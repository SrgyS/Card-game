describe('Card Game E2E', () => {
    const difficulties = [
        { level: '1', cardCount: 6 },
        { level: '2', cardCount: 12 },
        { level: '3', cardCount: 18 },
    ];

    beforeEach(() => {
        cy.visit('/');
    });

    it('should have a difficulty-level and start buttons', () => {
        cy.get('button').should('have.text', 'Старт');

        cy.get('input[value="1"]').should('be.not.checked');

        cy.get('input[value="2"]').should('be.not.checked');

        cy.get('input[value="3"]').should('be.not.checked');
    });

    difficulties.forEach((difficulty) => {
        it(`should start the game with difficulty-${difficulty.level} and reveal cards for 5 seconds`, () => {
            cy.contains(difficulty.level).click();
            cy.get(`input[value="${difficulty.level}"]`).should('be.checked');

            cy.get('#start-btn').click();
            cy.get('.card').each((card) => {
                cy.wrap(card).should('have.class', 'visible');
            });

            cy.get('.card').should('have.length', difficulty.cardCount);
            cy.wait(5000);
            cy.get('.card').each((card) => {
                cy.wrap(card).should('not.have.class', 'visible');
            });
        });
    });

    // it('should start the game with  difficulty-1 and reveal cards for 5 seconds', () => {
    //     cy.contains('1').click();
    //     cy.get('input[value="1"]').should('be.checked');

    //     cy.get('#start-btn').click();
    //     cy.get('.card').each((card) => {
    //         cy.wrap(card).should('have.class', 'visible');
    //     });

    //     cy.get('.card').should('have.length', 6);
    //     cy.wait(5000);
    //     cy.get('.card').each((card) => {
    //         cy.wrap(card).should('not.have.class', 'visible');
    //     });
    // });

    // it('should start the game with  difficulty-2 and reveal cards for 5 seconds', () => {
    //     cy.contains('2').click();
    //     cy.get('input[value="2"]').should('be.checked');

    //     cy.get('#start-btn').click();
    //     cy.get('.card').each((card) => {
    //         cy.wrap(card).should('have.class', 'visible');
    //     });

    //     cy.get('.card').should('have.length', 12);
    //     cy.wait(5000);
    //     cy.get('.card').each((card) => {
    //         cy.wrap(card).should('not.have.class', 'visible');
    //     });
    // });

    // it('should start the game with  difficulty-3 and reveal cards for 5 seconds', () => {
    //     cy.contains('3').click();
    //     cy.get('input[value="3"]').should('be.checked');

    //     cy.get('#start-btn').click();
    //     cy.get('.card').each((card) => {
    //         cy.wrap(card).should('have.class', 'visible');
    //     });

    //     cy.get('.card').should('have.length', 18);
    //     cy.wait(5000);
    //     cy.get('.card').each((card) => {
    //         cy.wrap(card).should('not.have.class', 'visible');
    //     });
    // });
});
