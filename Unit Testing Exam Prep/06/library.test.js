const { library } = require('./library');
const { expect } = require('chai');

describe('Tests for library', () => {
    describe('Taets for calcPriceOfBook', () => {
        it('should have string and number as params', () => {
            expect(() => library.calcPriceOfBook(1, 1)).to.throw('Invalid input');
            expect(() => library.calcPriceOfBook('abc', '1')).to.throw('Invalid input');
            expect(() => library.calcPriceOfBook('abc', [])).to.throw('Invalid input');
            expect(() => library.calcPriceOfBook([], 1)).to.throw('Invalid input');
        });
        it('should have discount', () => {
            expect(library.calcPriceOfBook('abc', 1975)).to.equal('Price of abc is 10.00');
            expect(library.calcPriceOfBook('abc', 1980)).to.equal('Price of abc is 10.00');
        });
        it('should calc the price', () => {
            expect(library.calcPriceOfBook('abc', 1981)).to.equal('Price of abc is 20.00');
            expect(library.calcPriceOfBook('abc', 1990)).to.equal('Price of abc is 20.00');
        });
    });
    describe('Tests for findBook', () => {
        it('should throw error if an array is empty', () => {
            expect(() => library.findBook([], 'abc')).to.throw('No books currently available');
        });
        it('should check for available book', () => {
            expect(library.findBook(['abc', 'cde', 'efg'], 'abc')).to.equal('We found the book you want.');
            expect(library.findBook(['cde', 'efg'], 'abc')).to.equal('The book you are looking for is not here!');
        });
    });
    describe('Tests for arrangeTheBooks', () => {
        it('should have positive number as param', () => {
            expect(() => library.arrangeTheBooks(-1)).to.throw('Invalid input');
            expect(() => library.arrangeTheBooks('1')).to.throw('Invalid input');
            expect(() => library.arrangeTheBooks([])).to.throw('Invalid input');
            expect(() => library.arrangeTheBooks({})).to.throw('Invalid input');
        });
        it('should have available space', () => {
            expect(library.arrangeTheBooks(40)).to.equal('Great job, the books are arranged.');
            expect(library.arrangeTheBooks(41)).to.equal('Insufficient space, more shelves need to be purchased.');
        });
    });
});

//  mocha 06\library.test.js



       // let shelves = 5;
            // let spaceOnShelf = 8;
            // let capacity = shelves * spaceOnShelf;
            // let haveSpace;
            // if(capacity >= 40){
            //     haveSpace = true;    
            // }else{
            //     haveSpace = false;
            // }
         