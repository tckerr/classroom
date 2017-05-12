import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {environment} from "../../../environments/environment";
import {GameSummary} from "./models/game-summary";
import {GameDetail} from "./models/game-detail";
import {GameCreateModel} from "./models/game-create-model";
import {Observable} from "rxjs/Rx";

//TODO: replace environments with bootstrap params

@Injectable()
export class GamesService {
  private summaryListUrl: string;
  private createUrl: string;
  private detailUrlTemplate: { summaryList; detail } | any;

  constructor(private http: Http) {
    this.summaryListUrl = environment.finalsweekApi.endpoints.game.root;
    this.createUrl = environment.finalsweekApi.endpoints.game.root;
    this.detailUrlTemplate = environment.finalsweekApi.endpoints.game.detail;
  }

  public summaryList(): Promise<GameSummary[]> {
    let requestToGameSummary = r => r.json().map(summary => new GameSummary(summary.id, summary.actors));
    return this.http
      .get(this.summaryListUrl)
      .map(requestToGameSummary)
      .toPromise();
  }

  public details(gameId: string, actorId: string): Observable<GameDetail> {
    return this.http
      .get(this.detailUrlTemplate(gameId, actorId))
      .map(r => new GameDetail(r.json()));
  }

  public create(model: GameCreateModel): Promise<GameDetail> {
    let postData = {
      player_count: model.playerCount
    };
    return this.http
      .post(this.createUrl, postData)
      .map(r => new GameDetail(r.json()))
      .toPromise();
  }
}
