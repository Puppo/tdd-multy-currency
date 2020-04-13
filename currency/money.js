class Money {
  constructor(amount) {
    this._amount = amount;
  }

  equals(obj) {
    return this._amount === obj._amount;
  }
}

module.exports = Money;
