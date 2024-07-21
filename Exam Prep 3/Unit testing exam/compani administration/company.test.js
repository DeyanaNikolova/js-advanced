const { expect } = require("chai");
const { companyAdministration } = require("./company.js");

describe('Tests for company administration', () => {
    describe('testts for hiringEmployee', ()=>{
        it('shouls have correct param', () => {
            expect(hiringEmployee.positions).to.equal('proggrammer');
        });
    })
});