// Declaring variable to access chai, expect and linking index.js
const chai = require("chai") 

var expect = chai.expect

const ValidateObj = require('./index')

// Creating test suite using its syntax describe and functions:

describe ("Validating the values using functions",()=>{
var num1
var num2
var num3
var num4

beforeEach(()=>{
    num1 = 20
    num2 = 33
    num3 = 9
    num4 = 109
    console.log("checking data");
})

    it("should return True if number is between 10 and 100",()=>{
        console.log("check-1");
        expect(ValidateObj.ValidateNum(num1)).to.be.true
        
    })

    it("should return false if number is not between 10 and 100",()=>{
        
        console.log("check-2");
        expect(ValidateObj.ValidateNum(num2)).to.be.false
    
    })

    it("should return false if number is less than equal to 10",()=>{
        console.log("check-3");
        expect(ValidateObj.ValidateNum(num3)).to.be.false
        

    })

    it("should return false if number is more than equal to 100",()=>{
        console.log("check-4");
        expect(ValidateObj.ValidateNum(num4)).to.be.false
        
    })
})
