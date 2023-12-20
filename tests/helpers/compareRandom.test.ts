// import { it, describe, expect } from '@jest/globals';
import { compareRandom } from '../../js/helpers';

describe('compareRandom', () => {
    it('should shuffle the elements of an array', () => {
        const array = [1, 2, 3, 4, 5];
        const shuffledArray = compareRandom([...array]);
        expect(shuffledArray).not.toEqual(array);
    });
});
