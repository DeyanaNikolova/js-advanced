const { bookSelection } = require('./bookSelection');
const { expect } = require('chai');

describe('Test book selection', () => {
    describe('Test for isGenreSuitable ', () => {
        it('checks for invalid params', () => {
            expect(() => bookSelection.isGenreSuitable('crime', 'number').to.throw('Invalid input'));
        });

        it('checks for invalid params', () => {
            expect(() => bookSelection.isGenreSuitable([], 1).to.throw('Invalid input'));
        });

        it('checks for invalid params', () => {
            expect(() => bookSelection.isGenreSuitable(1, 'Thriller').to.throw('Invalid input'));
        });

        it('checks for valid params', () => {
            expect(bookSelection.isGenreSuitable('Thriller', 12)).to.equal( `Books with Thriller genre are not suitable for kids at 12 age`);
        });
        it('checks for valid params', () => {
            expect(bookSelection.isGenreSuitable('Horror', 12)).to.equal( `Books with Horror genre are not suitable for kids at 12 age`);
        });

        it('checks for valid params', () => {
            expect(bookSelection.isGenreSuitable('Thriller', 13)).to.equal( 'Those books are suitable');
        });

        it('checks for valid params', () => {
            expect(bookSelection.isGenreSuitable('Horror', 13)).to.equal( 'Those books are suitable');
        });
    });

    describe('Test for isItAffordable', () => {
        it('checks for invalid params', () => {
            expect(() => bookSelection.isItAffordable('crime', '1').to.throw('Invalid input'));
        });

        it('checks for invalid params', () => {
            expect(() => bookSelection.isItAffordable(1, []).to.throw('Invalid input'));
        });

        it('checks for invalid params', () => {
            expect(() => bookSelection.isItAffordable('2', 2).to.throw('Invalid input'));
        });

        it('checks for valid params', () => {
            expect(bookSelection.isItAffordable(22, 20)).to.equal("You don't have enough money");
        });

        it('checks for valid params', () => {
            expect(bookSelection.isItAffordable(20, 22)).to.equal(`Book bought. You have 2$ left`);
        });
    });

    describe('Test for suitableTitles', () => {
        it('checks for invalid params', () => {
            expect(() => bookSelection.suitableTitles('crime', ['Horror', 'Adventure']).to.throw('Invalid input'));
        });
        it('checks for invalid params', () => {
            expect(() => bookSelection.suitableTitles(['Horror, Adventure', 'Crime'], 'array').to.throw('Invalid input'));
        });
        it('checks for invalid params', () => {
            expect(() => bookSelection.suitableTitles(['crime', 'horror']).to.throw('Invalid input'));
        });

        it('checks for valid params', () => {
            expect(bookSelection.suitableTitles([{ title: "The Da Vinci Code", genre: "Crime" }, {title: "Presumed Inosent", genre: "Crime"}]
            , 'Crime')).to.deep.equal(["The Da Vinci Code", "Presumed Inosent"]);
        });

        it('checks for valid params', () => {
            expect(bookSelection.suitableTitles([{ title: "The Guest List", genre: "Thriller" }], 'Thriller')).to.deep.equal(["The Guest List"]);
        });

        it('checks for valid params', () => {
            expect(bookSelection.suitableTitles([{ title: "The Da Vinci Code", genre: "Crime" }], 'none')).to.deep.equal([]);
        });
        
    });
});


//mocha 02\bookSelection.test.js