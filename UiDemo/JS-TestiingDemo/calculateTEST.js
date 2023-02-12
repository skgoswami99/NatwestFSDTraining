const chai = require("chai") 

var expect = chai.expect

const CalObj = require("./calculate")

describe ("Testing the calculator", ()=>{
    var num1 = 15
    var num2 = 5

    it("adding the values", ()=>{
    
    expect(CalObj.add(num1,num2)).to.be.equal(20)
    })

    it("Substracting the values", ()=>{
    
        expect(CalObj.Subs(num1,num2)).to.be.equal(10)
        })
})