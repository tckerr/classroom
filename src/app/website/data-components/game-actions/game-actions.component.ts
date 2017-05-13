import {Component, Input, OnDestroy, OnInit} from "@angular/core";
import {GamesService} from "../../../finalsweek-api/game/games.service";
import {ActivitiesService} from "../../../finalsweek-api/game/activities.service";
import {CardIdSelectionService} from "../../comm-services/card-id-selection.service";
import {GameDetail} from "../../../finalsweek-api/game/models/game-detail";

enum ActionType {
  Base,
  ActionCard,
  Discipline
}


@Component({
  selector: "app-game-actions",
  templateUrl: "./game-actions.component.html",
  styleUrls: ["./game-actions.component.css"],
  providers: [CardIdSelectionService]
})
export class GameActionsComponent implements OnInit {
  @Input() public gameId: string;
  @Input() public actorId: string;
  private loading: boolean = true;
  private stageType: string;
  private phaseType: string;
  private selectedCardId: string;
  private actionType: ActionType;
  private ActionType = ActionType;
  private actionCardHand: any[];
  private data: any;

  constructor(private cardIdSelectionService: CardIdSelectionService,
              private gamesService: GamesService,
              private activitiesService: ActivitiesService) {
  }

  ngOnInit() {
    this.gamesService
      .details(this.gameId, this.actorId)
      .do(gameDetail => console.log(gameDetail))
      .subscribe(gameDetail => this.refreshFromGameDetail(gameDetail));

    this.cardIdSelectionService.idSelected$
      .do(id => console.log(`Id: ${id} selected`))
      .subscribe(id => this.selectedCardId = id);
  }

  private refreshFromGameDetail(gameDetail: GameDetail) {
    let data = gameDetail.json;
    this.data = data;
    this.gameId = data.public.game_id;
    this.actorId = data.public.turn.current_turn_actor_id;
    this.stageType = data.public.stage_type;
    this.phaseType = data.public.phase_type;
    this.actionType = this.resolveActionType(this.phaseType);
    this.actionCardHand = this.findActor(this.actorId, data.public.actors).hand.action_cards;
    this.loading = false;
  }

  private findActor(id: string, actors: any[]){
    for( let actor of actors){
      if (actor.id == id)
        return actor;
    }
    throw Error(`Actor: ${id} not found.`);
  }

  private submitActivity() {
    this.loading = true;
    let action = this.resolveAction();
    console.log(this.gameId, this.actorId, action);
    this.activitiesService
      .takeAction(this.gameId, this.actorId, action)
      .do(gameDetail => console.log(gameDetail))
      .subscribe(gameDetail => this.refreshFromGameDetail(gameDetail));
  }

  private resolveActionType(phaseType: string) {
    switch (phaseType) {
      case "Class Time":
        return ActionType.ActionCard;
      case "Dismissal":
        return ActionType.Discipline;
      default:
        return ActionType.Base
    }
  }

  private resolveAction() {
    if (this.actionType == ActionType.ActionCard){
      return {
        type: "ActionCardAction",
        card_id: this.selectedCardId,
        prompt: this.data.public.turn.prompt
      }
    }
    return {}
  }
}
