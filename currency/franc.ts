import { Money } from "./money";

export class Franc extends Money {
  times(multiplier): Franc {
    return new Franc(this.amount * multiplier);
  }
}
