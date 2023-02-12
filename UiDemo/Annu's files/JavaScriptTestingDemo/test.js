const chai = require('chai')

var expect = chai.expect

const validateObj = require('./index.js');
const calcObj = require('./calc.js');


// Syntax and function for creating test suite

describe("Validating the Values by using functions",()=>{
  
    var num1;
    var num2;
    var num3;
    var num4;

    beforeEach(()=>{
        num1=19;
        num2=9;
        num3=9;
        num4=901;
    })


    // Syntax and function for creating test case

    it("Should return true if number between 10 to 100",()=>{
        expect(validateObj.ValidateNum(num1)).to.be.true
    })

    it("Should return false if number not between 10 to 100",()=>{
        expect(validateObj.ValidateNum(num2)).to.be.false
    })

    // it("Should return false if number not between 10 to 100",()=>{
    //     expect(validateObj.ValidateNum(101)).to.be.false
    // })

    it("Should return false if number is less than equal to 10",()=>{
        expect(validateObj.ValidateNum(num3)).to.be.false
    })

    it("Should return false if number greater than equal to 100",()=>{
        expect(validateObj.ValidateNum(num4)).to.be.false
    })

})