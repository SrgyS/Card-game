import { Card, generateDeck } from '../../js/helpers';
import { describe, expect, it } from '@jest/globals';

describe('generateDeck', () => {
    it('Should generate a deck of cards with 6 cards for difficulty 1', () => {
        const difficulty = 1;
        const deck = generateDeck(difficulty);
        expect(deck.length).toBe(difficulty * 6);
    });
    it('Should generate a deck of cards with 12 cards for difficulty 2', () => {
        const difficulty = 2;
        const deck = generateDeck(difficulty);
        expect(deck.length).toBe(difficulty * 6);
    });
    it('Should generate a deck of cards with 18 cards for difficulty 3', () => {
        const difficulty = 3;
        const deck = generateDeck(difficulty);
        expect(deck.length).toBe(difficulty * 6);
    });
    it('should return an array of type Card[] with "suit" and "rank" properties', () => {
        const result = generateDeck(1) as Card[];
        expect(result instanceof Array).toBe(true);
        expect(result[0]).toHaveProperty('suit');
        expect(result[0]).toHaveProperty('rank');
    });
    it('should generate cards with valid suit and rank', () => {
        const difficulty = 3;
        const deck = generateDeck(difficulty);

        const validSuits = ['Diamonds', 'Hearts', 'Clubs', 'Spades'];
        const validRanks = ['A', 'K', 'Q', 'J', '10', '9', '8', '7', '6'];

        for (const card of deck) {
            expect(validSuits).toContain(card.suit);
            expect(validRanks).toContain(card.rank);
        }
    });
});
