export class Money {
  private _amount: number;

  constructor(amount) {
    this._amount = amount;
  }

  protected get amount() {
    return this._amount;
  }

  equals(obj) {
    return (
      this._amount === obj._amount &&
      this.constructor.name === obj.constructor.name
    );
  }
}
