const assert = require('assert');
const calculateStylePoints = require('./calculateStylePoints');

describe('calculateStylePoints', () => {
    describe('diffrent notes', () => {
		it('without comma', () => {
            const actual = calculateStylePoints([14, 15, 16, 17, 18]);
    
            const expected = 48;
    
            assert.equal(actual, expected);
        });
		
		it('with comma', () => {
            const actual = calculateStylePoints([18, 18.5, 17.5, 19.5, 20]);

            const expected = 56;

            assert.equal(actual, expected);
        });
    });

    describe('two same notes', () => {
        it('one rejected', () => {
            const actual = calculateStylePoints([20, 17, 18, 19, 20]);

            const expected = 57;

            assert.equal(actual, expected);
        });

        it('with comma', () => {
            const actual = calculateStylePoints([18.5, 17.5, 17.5, 19.5, 20]);

            const expected = 55.5;

            assert.equal(actual, expected);
        });
    });

    describe('more same notes', () => {
        it('three same notes without comma', () => {
            const actual = calculateStylePoints([20, 20, 18, 19, 20]);

            const expected = 59;

            assert.equal(actual, expected);
        });

        it('three same notes with comma', () => {
            const actual = calculateStylePoints([20, 19.5, 19.5, 19.5, 20]);

            const expected = 59;

            assert.equal(actual, expected);
        });


        it('five same notes with comma', () => {
            const actual = calculateStylePoints([19.5, 19.5, 19.5, 19.5, 19.5]);

            const expected = 58.5;

            assert.equal(actual, expected);
        });

        
    });
});