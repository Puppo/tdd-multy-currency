const Money = require("./money");

class Dollar extends Money {
  times(multiplier) {
    return new Dollar(this._amount * multiplier);
  }
}

module.exports = Dollar;
