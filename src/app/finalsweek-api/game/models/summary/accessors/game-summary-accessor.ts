import {GameSummary} from "../game-summary";
import {ActorSummary} from "../actor-summary";
import {SeatSummary} from "../seat-summary";
export class GameSummaryAccessor {
  constructor(public gameSummary: GameSummary) {

  }

  public get gameId() {
    return this.gameSummary.publicData.gameId;
  }

  public get stageType() {
    return this.gameSummary.publicData.stageType;
  }

  public get phaseType() {
    return this.gameSummary.publicData.phaseType;
  }

  public get currentTurnActor() {
    let turn = this.gameSummary.publicData.turn;
    if (turn && turn.actorId) {
      return this.getActor(turn.actorId);
    }
    return null;
  }

  public getActor(id: string): ActorSummary {
    for (let actor of this.gameSummary.publicData.actors) {
      if (actor.id === id) {
        return actor;
      }
    }
    throw Error(`Actor: ${id} not found.`);
  }

  public get actors(): ActorSummary[] {
    return this.gameSummary.publicData.actors;
  }

  public get seats(): SeatSummary[] {
    return this.gameSummary.publicData.seats;
  }
}
