const assert = require('assert');
const calculateDistancePoints = require('./calculateDistancePoints');

describe('calculateDistancePoints', () => {
    describe('normal hill', () => {
		it('over k-point', () => {
            const actual = calculateDistancePoints(95, 'normal', 98);
    
            const expected = 54;
    
            assert.equal(actual, expected);
        });
		
		it('under k-point', () => {
            const actual = calculateDistancePoints(99, 'normal', 98);

            const expected = 62;

            assert.equal(actual, expected);
        });
    });

    describe('large hill', () => {
        it('over k-point', () => {
            const actual = calculateDistancePoints(121, 'large', 120);
    
            const expected = 61.8;
    
            assert.equal(actual, expected);
        });
        
        it('under k-point', () => {
            const actual = calculateDistancePoints(103, 'large', 120);

            const expected = 29.4;

            assert.equal(actual, expected);
        });
    });

    describe('flying hill', () => {
        it('over k-point', () => {
            const actual = calculateDistancePoints(215, 'flying', 180);

            const expected = 162;

            assert.equal(actual, expected);
        });
        
        it('under k-point', () => {
            const actual = calculateDistancePoints(182, 'flying', 190);

            const expected = 110.4;

            assert.equal(actual, expected);
        });
    });

    describe('wrong hill size', () => {
        it('flat', () => {
            const actual = calculateDistancePoints(110, 'flat', 120);

            const expected = 'insert correct hill size';

            assert.equal(actual, expected);
        });
    });
});