const { motorcycleRider } = require('./motorcycle');
const { expect } = require('chai');

describe('Test for motorcycle rired', () => {
    describe( 'Tests for licenseRestriction', () => {
        it('shoult work with am', () => {
            expect(motorcycleRider.licenseRestriction('AM')).to.equal('Mopeds with a maximum design speed of 45 km. per hour, engine volume is no more than 50 cubic centimeters, and the minimum age is 16.');
            expect(motorcycleRider.licenseRestriction('A1')).to.equal('Motorcycles with engine volume is no more than 125 cubic centimeters, maximum power of 11KW. and the minimum age is 16.');
            expect(motorcycleRider.licenseRestriction('A2')).to.equal('Motorcycles with maximum power of 35KW. and the minimum age is 18.');
            expect(motorcycleRider.licenseRestriction('A')).to.equal('No motorcycle restrictions, and the minimum age is 24.');
        });
        it('should throw an error', () => {
            expect(()=> motorcycleRider.licenseRestriction('a')).to.throw('Invalid Information!');
            expect(()=> motorcycleRider.licenseRestriction('a1')).to.throw('Invalid Information!');
            expect(()=> motorcycleRider.licenseRestriction('am')).to.throw('Invalid Information!');
            expect(()=> motorcycleRider.licenseRestriction('a2')).to.throw('Invalid Information!');
        });
    });
    describe('Tests for motorcycleShowroom', () => {
        it('should check engine volume', () => {
            expect(motorcycleRider.motorcycleShowroom(['100', '200', '300'], 300)).to.equal('There are 3 available motorcycles matching your criteria!');
            expect(motorcycleRider.motorcycleShowroom(['100', '200'], 200)).to.equal('There are 2 available motorcycles matching your criteria!');
            expect(motorcycleRider.motorcycleShowroom(['100', '300', '150'], 200)).to.equal('There are 2 available motorcycles matching your criteria!');
        });
        it('should check for valid params', () => {
            expect(()=> motorcycleRider.motorcycleShowroom(['100'], 45)).to.throw('Invalid Information!');
            expect(()=> motorcycleRider.motorcycleShowroom([], 200)).to.throw('Invalid Information!');
            expect(()=> motorcycleRider.motorcycleShowroom(200, 45)).to.throw('Invalid Information!');
            expect(()=> motorcycleRider.motorcycleShowroom(200, '200')).to.throw('Invalid Information!');
        });
        describe('should check spendings', () => {
            it('should check spendings', () => {
                expect(motorcycleRider.otherSpendings(['helmet', 'jacked'], ['engine oil', 'oil filter'], true)).to.equal("You spend $540.00 for equipment and consumables with 10% discount!");
                expect(motorcycleRider.otherSpendings(['helmet'], ['engine oil'], false)).to.equal("You spend $270.00 for equipment and consumables!");
            });
            it('should check for valid params', () => {
                expect( () => motorcycleRider.otherSpendings('helmet', ['engine oil'], true)).to.throw('Invalid Information');
                expect( () => motorcycleRider.otherSpendings(['helmet'], ['engine oil'], 'true')).to.throw('Invalid Information');
                expect( () => motorcycleRider.otherSpendings(['helmet'], 'engine oil', true)).to.throw('Invalid Information');
                expect( () => motorcycleRider.otherSpendings(['helmet'], ['engine oil'], [true])).to.throw('Invalid Information');
            });

        });

    });
});


// mocha 13\motorcycle.test.js