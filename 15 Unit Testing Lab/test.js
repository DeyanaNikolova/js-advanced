const {expect} require('chai')
const {sum} require('./myModule');



describe('Test Suite', () =>{
    it('works with positive integers', () => {
        expect(sum(3, 5)).to.equal(8, 'did not work with 3 and 5')
    });

    it('works with floating poin numbers', () => {
        expect(sum(3.14, 2.71).to.equal(5.85);
    });
       
});
