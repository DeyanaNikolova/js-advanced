const { flowerShop } =require('./flowerShop');
const { expect } = require('chai');

describe('Flower shop', function() {
    describe('Calculate price of flowers', function() {

        it('Should calculate price with valid inputs', function() {
            let flower = 'aa';
            let price = 2;
            let qty = 1; 
            let result = flowerShop.calcPriceOfFlowers('aa', 2, 1);
           
            expect(result).to.equal(`You need $2.00 to buy aa!`);
        });

        it('Should throw error if first param is number', function() {
            let flower = 5;
            let price = 2;
            let qty = 1;
            let result = 2 * 1;
           
            expect(() => flowerShop.calcPriceOfFlowers(5, 2.00, 1)).to.throw(Error, 'Invalid input!');
            
        });

        it('Should throw error if second  param is string', function() {
            let flower = 'aa';
            let price = 2;
            let qty = 1;
            let result = 2 * 1;
           
            expect(() => flowerShop.calcPriceOfFlowers('aa', '2', 1)).to.throw(Error, 'Invalid input!');
            
        });

        it('Should throw error if param is missing', function() {
            let flower = 'aa';
            let price = 2;
            let qty = 1;
            let result = 2 * 1;
           
            expect(() => flowerShop.calcPriceOfFlowers(2, 1)).to.throw(Error, 'Invalid input!');
            
        });

        it('Should throw error if third param is floating number', function() {
            let flower = 'aa';
            let price = 2;
            let qty = 1.2;
            let result = 2 * 1;
           
            expect(() => flowerShop.calcPriceOfFlowers('aa', 2, 1.2)).to.throw(Error, 'Invalid input!');
            
        });

     });

  describe('Check flowers available', function() {

        it('Should check if flower is in the array', function() {

            let gardenArr = ["Rose", "Lily", "Orchid"];
            expect(flowerShop.checkFlowersAvailable('Rose', gardenArr)).to.equal(`The Rose are available!`);
        });

        it('Should chieck if flower is present', () => {
            let gardenArr = ['Lily', 'Orchid'];

            if(gardenArr.includes('Rose')){
                return true;
            }
            expect(flowerShop.checkFlowersAvailable('Rose', gardenArr)).to.equal(`The Rose are sold! You need to purchase more!`);
        });

        it('Should throw error with invalid input', function() {

            expect(() => flowerShop.checkFlowersAvailable('Rose', [1, 2, 3])).to.throw
        });

        it('Should throw error with invalid input', function() {

            expect(() => flowerShop.checkFlowersAvailable('flower', {})).to.throw
        });

        it('Should throw error with invalid input', function() {

            expect(() => flowerShop.checkFlowersAvailable(1, gardenArr)).to.throw
        });

        it('Should throw error with invalid input', function() {

            expect(() => flowerShop.checkFlowersAvailable({}, gardenArr)).to.throw
        });
     });

     describe('Sell flowers', () => {
        it('Should have two valid params', () => {
            let gardenArr = ["Rose", "Lily", "Orchid"];
            let space = 1;
            expect(flowerShop.sellFlowers(gardenArr, space)).to.equal('Rose / Orchid');
        });

        it('Should throw error with invalid params', () => {
            // let gardenArr = ["Rose", "Lily", "Orchid"];
            // let space = 1;
            expect(() => flowerShop.sellFlowers({}, '1')).to.throw(Error, 'Invalid input!');
        });

        it('Should throw error with empty arr as a first param', () => {
            // let gardenArr = ["Rose", "Lily", "Orchid"];
            // let space = 1;
            expect(() => flowerShop.sellFlowers([], 1)).to.throw(Error, 'Invalid input!');
        });

        it('Should throw error with negative integer as a second param', () => {
             let gardenArr = ["Rose", "Lily", "Orchid"];
            // let space = 1;
            expect(() => flowerShop.sellFlowers(gardenArr, -1)).to.throw(Error, 'Invalid input!');
        });
        it('Should throw error with bigger space than arr loength', () => {
            let gardenArr = ["Rose", "Lily", "Orchid"];
           // let space = 1;
           expect(() => flowerShop.sellFlowers(gardenArr, 3)).to.throw(Error, 'Invalid input!');
       });

    //    it('Should return strins as a result', () => {
    //     let gardenArr = ["Rose", "Lily", "Orchid"];
    //     let space = 1;

    //     expect(flowerShop.sellFlowers(gardenArr, space)).to.equal([Rose / Orchid]);
    // });
     });  
});
