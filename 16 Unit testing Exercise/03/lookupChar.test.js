const lookupChar = require('./lookupChar');
const { assert } = require('chai');


describe('lookupChar function tests', () => {

    it('Return char at index', () => {
        assert(lookupChar('Love', 1) === 'o');
    });

    it('Return char at index', () => {
        assert(lookupChar('L', 0) === 'L');
    });

    it('Index over the srting length', () => {
        assert(lookupChar('Love', 10) === 'Incorrect index');
    });

    it('Negaive string index', () => {
        assert(lookupChar('Love', -1) === 'Incorrect index');
    });

    it('Empty srting as index', () => {
        assert(lookupChar('', 0) === 'Incorrect index');
    });

    it('Return undefined if first param is nor string', () => {
        assert(lookupChar(25, 0) === undefined);
    });

    it('Return undefined with first param string and second param decimal', () => {
        assert(lookupChar('Love', 0.5) === undefined);
    });

    it('Return undefined with wrong params types', () => {
        assert(lookupChar(0.5, 'Love') === undefined);
    });
});

//  mocha 03\lookupChar.test.js