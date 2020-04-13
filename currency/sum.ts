import { Money } from "./money";
import { Expression } from "./expression";

export class Sum implements Expression {
  constructor(private readonly augend: Money, private readonly added: Money) {}

  reduce(to: String): Money {
    const amount = this.augend.amount + this.added.amount;
    return new Money(amount, to);
  }
}
