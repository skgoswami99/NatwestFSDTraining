const chai = require('chai')

var expect = chai.expect

const calcObj = require('./calc.js');


// Syntax and function for creating test suite


describe("Testing the calculator functions",()=>{
  
    var num1 = 20;
    var num2 = 10;


    // This block run before all test case
    before(()=>{

        console.log("Inside before !!!!")
    })

    // This block run before each test case
    // beforeEach(()=>{
    //     num1=19;
    //     num2=9;
    //     console.log("Inside before Each !!!!")
    // })

    // // This block run after all test case
    // after(()=>{
    //     console.log("Inside After !!!!")
    // })

    // // This block run after each test case
    // afterEach(()=>{
    //     num1=0;
    //     num2=0;
  
    //     console.log("Inside After Each !!!!")
    // })

    // Syntax and function for creating test case

    it("Add two numbers and check the sum",()=>{
        expect(calcObj.add(num1,num2)).to.be.equal(28);
    })

    it("Add two numbers and check the sum",()=>{
        expect(calcObj.add(num1,num2)).to.be.equal(29);
    })
})