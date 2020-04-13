class Dollar {
  constructor(amount) {
    this._amount = amount;
  }

  get amount() {
    return this._amount;
  }

  times(multiplier) {
    this._amount *= multiplier;
  }
}

module.exports = Dollar;
