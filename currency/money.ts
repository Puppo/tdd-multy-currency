export class Money {
  private _amount: number;

  constructor(amount: number) {
    this._amount = amount;
  }

  protected get amount() {
    return this._amount;
  }

  equals(obj: Money) {
    return (
      this._amount === obj._amount &&
      this.constructor.name === obj.constructor.name
    );
  }
}
