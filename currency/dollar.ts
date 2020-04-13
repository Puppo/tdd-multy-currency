import { Money } from "./money";

export class Dollar extends Money {
  times(multiplier): Dollar {
    return new Dollar(this.amount * multiplier);
  }
}
