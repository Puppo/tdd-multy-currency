class Dollar {
  constructor(amount) {
    this._amount = amount;
  }

  times(multiplier) {
    return new Dollar(this._amount * multiplier);
  }

  equals(obj) {
    return this._amount === obj._amount;
  }
}

module.exports = Dollar;
