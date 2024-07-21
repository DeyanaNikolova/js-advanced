const { flowerShop } = require('./flowerShop');
const { expect } = require('chai');


describe('Tests fot flower shop', () => {

    describe('Tests for calcPriceOfFlowers', () => {
        it('checks for invalid input', () => {
            expect(() => flowerShop.calcPriceOfFlowers('Rose', '1', 1)).to.throw('Invalid input!');
            expect(() => flowerShop.calcPriceOfFlowers('Rose', [], 1)).to.throw('Invalid input!');
            expect(() => flowerShop.calcPriceOfFlowers(1, 1, '1')).to.throw('Invalid input!');
        });
    
        it('should calculate the sum with valid input', () => {
            expect(flowerShop.calcPriceOfFlowers('Rose', 2, 1)).to.equal(`You need $2.00 to buy Rose!`);
        });
    });

    describe('Tests for checkFlowersAvailable', () => {
        it('should check for available flower', () => {
            expect(flowerShop.checkFlowersAvailable('Rose', ['Rose', 'Lily', 'Orchid'])).to.equal(`The Rose are available!`);
            expect(flowerShop.checkFlowersAvailable('Rose', ['Lily', 'Orchid'])).to.equal('The Rose are sold! You need to purchase more!');
        });
    });

    describe('Thests for sellFlowers', () => {
        it('should have array and number as params', () => {
            expect(()=> flowerShop.sellFlowers(2, [])).to.throw('Invalid input!');
            expect(()=> flowerShop.sellFlowers('2', 2)).to.throw('Invalid input!');
            expect(()=> flowerShop.sellFlowers(['Rose'], [])).to.throw('Invalid input!');
            expect(()=> flowerShop.sellFlowers(['Rose'], '2')).to.throw('Invalid input!');
            expect(()=> flowerShop.sellFlowers(['Rose'], 2)).to.throw('Invalid input!');
            expect(()=> flowerShop.sellFlowers(['Rose'], -1)).to.throw('Invalid input!');
        });

        it('sould remove flower from an array', () => {
            expect(flowerShop.sellFlowers(['Rose', 'Lily', 'Orchid'], 2)).to.equal('Rose / Lily');
        });
    });
});

//  mocha 04\flowerShop.test.js