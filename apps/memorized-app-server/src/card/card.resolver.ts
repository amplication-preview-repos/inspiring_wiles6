import * as graphql from "@nestjs/graphql";
import { CardResolverBase } from "./base/card.resolver.base";
import { Card } from "./base/Card";
import { CardService } from "./card.service";

@graphql.Resolver(() => Card)
export class CardResolver extends CardResolverBase {
  constructor(protected readonly service: CardService) {
    super(service);
  }
}
