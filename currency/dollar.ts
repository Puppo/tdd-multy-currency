import { Money } from "./money";

export class Dollar extends Money {
  times(multiplier): Money {
    return new Dollar(this.amount * multiplier, this.currency);
  }
}

export function dollar(amount): Money {
  return new Dollar(amount, "USD");
}
