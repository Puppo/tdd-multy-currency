class Dollar {
  constructor(amount) {
    this._amount = amount;
  }

  get amount() {
    return this._amount;
  }

  times(multiplier) {
    return new Dollar(this.amount * multiplier);
  }
}

module.exports = Dollar;
