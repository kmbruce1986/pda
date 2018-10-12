var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it should be able to add', function(){
    calculator.previousTotal = 1;
    calculator.add(4);
    assert.deepStrictEqual(calculator.runningTotal, 5);
  })

  it('it should be able to subtract', function(){
    calculator.previousTotal = 7;
    calculator.subtract(4);
    assert.deepStrictEqual(calculator.runningTotal, 3);
  })

  it('it should be able to multiply', function(){
    calculator.previousTotal = 3;
    calculator.multiply(5);
    assert.deepStrictEqual(calculator.runningTotal, 15);
  })

  it('it should be able to divide', function(){
    calculator.previousTotal = 21;
    calculator.divide(7);
    assert.deepStrictEqual(calculator.runningTotal, 3);
  })

  it('it should be able to concatenate number clicks', function(){
    calculator.numberClick(1);
    calculator.numberClick(2);
    calculator.numberClick(3);
    assert.deepStrictEqual(calculator.runningTotal, 123);
  })

  it('it should be able to chain multiple operations together', function(){
    calculator.numberClick(2);
    calculator.operatorClick('*');
    calculator.numberClick(2);
    calculator.operatorClick('+');
    calculator.numberClick(3);
    calculator.operatorClick('=')
    assert.deepStrictEqual(calculator.runningTotal, 7);
  })

  it('it should be able to clear without changing calculation', function(){
    calculator.numberClick(1);
    calculator.clearClick();
    calculator.numberClick(2);
    calculator.operatorClick('+');
    calculator.numberClick(3);
    calculator.operatorClick('=')
    assert.deepStrictEqual(calculator.runningTotal, 5);
  })


});
