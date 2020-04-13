export class Money {
  static dollar(amount: number): Money {
    return new Money(amount, "USD");
  }

  static franc(amount: number): Money {
    return new Money(amount, "CHF");
  }

  private _amount: number;
  private _currency: String;

  constructor(amount: number, currency: String) {
    this._amount = amount;
    this._currency = currency;
  }

  protected get amount() {
    return this._amount;
  }

  get currency() {
    return this._currency;
  }

  times(multiplier: number): Money {
    return new Money(this.amount * multiplier, this.currency);
  }

  equals(obj: Money) {
    return this._amount === obj._amount && this.currency === obj.currency;
  }

  toString() {
    return `${this.amount} ${this.currency}`;
  }
}
