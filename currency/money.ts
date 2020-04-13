export class Money {
  private _amount: number;
  private _currency: number;

  constructor(amount: number, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  protected get amount() {
    return this._amount;
  }

  get currency() {
    return this._currency;
  }

  equals(obj: Money) {
    return (
      this._amount === obj._amount &&
      this.constructor.name === obj.constructor.name
    );
  }
}
