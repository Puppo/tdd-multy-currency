import { Money } from "./money";

export class Dollar extends Money {
  constructor(amount) {
    super(amount);
  }

  times(multiplier): Money {
    return new Dollar(this.amount * multiplier);
  }
}

export function dollar(amount): Money {
  return new Dollar(amount);
}
