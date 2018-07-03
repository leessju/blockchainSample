
const Calculator = require('./calculator-base.js')

class AdvancedCalculator extends Calculator {
  multiply(a,b) { return a * b }
  divide(a,b) { return a / b }
}

module.exports = new AdvancedCalculator()
