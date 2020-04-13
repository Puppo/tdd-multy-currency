import { Money } from "./money";

export class Franc extends Money {
  times(multiplier): Money {
    return new Franc(this.amount * multiplier, this.currency);
  }
}

export function franc(amount): Money {
  return new Franc(amount, "CHF");
}
