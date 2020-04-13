import { Expression } from "./expression";
import { Money } from "./money";
import { Sum } from "./sum";

export class Bank {
  reduce(source: Expression, to: String): Money {
    return source.reduce(to);
  }
}
