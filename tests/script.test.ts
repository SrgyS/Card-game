import { describe, it, expect } from '@jest/globals';
import { DIFFICULTY_PAGE } from '../js/routes';
import { goToPage, page } from '../js/script';
// import { renderApp } from '../js/script';

// jest.mock('../js/script', () => ({
//     ...jest.requireActual('../js/script'),
//     renderApp: jest.fn(),
// }));

describe('goToPage', () => {
    it('should render DIFFICULTY_PAGE', () => {
        const newPage = DIFFICULTY_PAGE;

        goToPage(newPage);

        expect(page).toBe(DIFFICULTY_PAGE);
        // expect(renderApp).toHaveBeenCalled();
    });
});
