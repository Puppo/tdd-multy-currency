import { Money } from "./money";

export class Franc extends Money {
  constructor(amount) {
    super(amount);
  }
  times(multiplier): Money {
    return new Franc(this.amount * multiplier);
  }
}

export function franc(amount): Money {
  return new Franc(amount);
}
