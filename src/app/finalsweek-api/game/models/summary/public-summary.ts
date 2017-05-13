import {TurnSummary} from "./turn-summary";
import {ActorSummary} from "./actor-summary";

export class PublicSummary {
  public actors: any[];
  public turn: any;
  public gameId: string;
  public stageType: string;
  public phaseType: string;
  private _data: any;

  constructor(data: any) {
    this._data = data;
    this.actors = (<any[]>data.actors).map(a => new ActorSummary(a));
    this.turn = new TurnSummary(data.turn);
    this.gameId = data.game_id;
    this.stageType = data.stage_type;
    this.phaseType = data.phase_type;
  }

  public asJson(){
    return this._data;
  }
}
