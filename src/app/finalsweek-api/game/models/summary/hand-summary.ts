import {ActionCardSummary} from "app/finalsweek-api/game/models/summary/action-card-summary";

export class HandSummary {
  public actionCards: ActionCardSummary;

  constructor(data: any) {
    this.actionCards = data.action_cards.map(c => new ActionCardSummary(c));
  }
}
