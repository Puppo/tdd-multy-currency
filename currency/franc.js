const Money = require("./money");

class Franc extends Money {
  times(multiplier) {
    return new Franc(this._amount * multiplier);
  }
}

module.exports = Franc;
