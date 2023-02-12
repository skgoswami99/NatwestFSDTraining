// Declaring variable to access chai, expect and linking index.js
const chai = require("chai") 

var expect = chai.expect

const ValidateObj = require('./index')

// Creating test suite using its syntax describe and functions:

describe ("Validating the values using functions",()=>{
var num1 = [20, 5, 15, 108]
var i = 0
var num = num1[i]



afterEach(()=>{
    
    let i=0; i < 4; i++
   
    var num = num1[i] ;
       
    console.log(num);
})

    it("should return True if number is between 10 and 100",()=>{
        console.log("check-1");
        expect(ValidateObj.ValidateNum(num)).to.be.true
        console.log(num);
    })

    it("should return false if number is not between 10 and 100",()=>{
        
        console.log("check-2");
        expect(ValidateObj.ValidateNum(num)).to.be.false
        console.log(num);
    
    })

    it("should return false if number is less than equal to 10",()=>{
        console.log("check-3");
        expect(ValidateObj.ValidateNum(num)).to.be.false
        console.log(num);
        
    })

    it("should return false if number is more than equal to 100",()=>{
        console.log("check-4");
        expect(ValidateObj.ValidateNum(num)).to.be.false
        console.log(num);
        
    })

})
