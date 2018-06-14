const assert = require('assert');
const calculateTotalPoints = require('./calculateTotalPoints');

describe('calculateTotalPoints', () => {
    describe('positive numbers wind/gate', () => {
		it('without decimal', () => {
            const actual = calculateTotalPoints(95, 'normal', 90, [14, 16, 15, 15.5, 15.5], 4, 6);
    
            const expected = 126;
    
            assert.equal(actual, expected);
        });
		
		it('with decimal', () => {
            const actual = calculateTotalPoints(93, 'normal', 95, [18, 18, 19, 15.5, 19], 1.2, 3.7);

            const expected = 115.9;

            assert.equal(actual, expected);
        });
    });

    describe('with negative numbers wind/gate', () => {
        it('without decimal', () => {
            const actual = calculateTotalPoints(103, 'large', 120, [14, 16, 15, 15.5, 15.5], -4, -6);

            const expected = 65.4;

            assert.equal(actual, expected);
        });

        it('with decimal', () => {
            const actual = calculateTotalPoints(122.5, 'large', 120, [18, 18, 19, 15.5, 19], -1.3, -3.6);

            const expected = 114.6;

            assert.equal(actual, expected);
        });
    });
});