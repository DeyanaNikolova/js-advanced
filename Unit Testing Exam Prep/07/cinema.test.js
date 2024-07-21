const { cinema } = require('./cinema');
const { expect } = require('chai');

describe('Tests for cinema', () => {
    let schedule = {
        'a': 12,
        'b': 7.50,
        'c': 5.50
    }
    describe('Tests fot showMovies', () => {
        it('should list the movies', () => {
            expect(cinema.showMovies([])).to.equal('There are currently no movies to show.');
            expect(cinema.showMovies(['abc', 'cde', 'efg'])).to.equal('abc, cde, efg');
        });
    });
    describe('Tests for ticketPrice', () => {
        it('should throw error if not match the projectionType', () => {
          //  let isNotValid;
            let projectionType = 'd';
            // if (projectionType != schedule.projectionType) {
            //     isNotValid = true;
            // }
            expect(() =>cinema.ticketPrice(projectionType)).to.throw('Invalid projection type.');
        });
        it('should match the projectionType', () => {
            let projectionType = 'a'
            if (schedule.hasOwnProperty(projectionType)) {
                let price = schedule[projectionType];
                return price;
            }
            expect(cinema.ticketPrice(projectionType)).to.deep.equal(price);
            projectionType = 'b'
            expect(cinema.ticketPrice(projectionType)).to.deep.equal(price);
            projectionType = 'c'
            expect(cinema.ticketPrice(projectionType)).to.deep.equal(price);
        });
    });
    describe('Tests for swapSeatsInHall', () => {
        it('should swap places', () => {
            expect(cinema.swapSeatsInHall(1, 2)).to.equal('Successful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(2, 1)).to.equal('Successful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(20, 19)).to.equal('Successful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(19, 20)).to.equal('Successful change of seats in the hall.');
        });
        it('should have two positive numbers as params', () => {
            expect(cinema.swapSeatsInHall('1', 1)).to.deep.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(-1, 1)).to.deep.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(0, 1)).to.deep.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(21, 1)).to.deep.equal('Unsuccessful change of seats in the hall.');

            expect(cinema.swapSeatsInHall(1)).to.deep.equal('Unsuccessful change of seats in the hall.');
        
            expect(cinema.swapSeatsInHall(1, '1')).to.deep.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(1, -1)).to.deep.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(1, 0)).to.deep.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(1, 21)).to.deep.equal('Unsuccessful change of seats in the hall.');

            expect(cinema.swapSeatsInHall('1', '2')).to.deep.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(1, 1)).to.deep.equal('Unsuccessful change of seats in the hall.');
        });  
    });
});

// mocha 07\cinema.test.js