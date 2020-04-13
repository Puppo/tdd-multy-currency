import { Expression } from "./expression";
import { Sum } from "./sum";

export class Money implements Expression {
  static dollar(amount: number): Money {
    return new Money(amount, "USD");
  }

  static franc(amount: number): Money {
    return new Money(amount, "CHF");
  }

  constructor(
    private readonly _amount: number,
    private readonly _currency: String
  ) {}

  get amount() {
    return this._amount;
  }

  get currency() {
    return this._currency;
  }

  times(multiplier: number): Money {
    return new Money(this._amount * multiplier, this._currency);
  }

  plus(added: Money): Sum {
    return new Sum(this, added);
  }

  reduce(to: String): Money {
    return this;
  }

  equals(obj: Money) {
    return this._amount === obj._amount && this._currency === obj._currency;
  }

  toString() {
    return `${this._amount} ${this._currency}`;
  }
}
