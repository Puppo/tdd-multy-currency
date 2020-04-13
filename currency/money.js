class Money {
  constructor(amount) {
    this._amount = amount;
  }

  equals(obj) {
    return (
      this._amount === obj._amount &&
      this.constructor.name === obj.constructor.name
    );
  }
}

module.exports = Money;
