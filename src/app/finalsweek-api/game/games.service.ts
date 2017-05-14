import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {environment} from "../../../environments/environment";
import {GameOverviewSummary} from "./models/game-overview-summary";
import {GameSummary} from "./models/summary/game-summary";
import {GameCreateModel} from "./models/creation-models/game-create-model";
import {Observable} from "rxjs/Rx";

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

  public summaryList(): Observable<GameOverviewSummary[]> {
    let requestToGameSummary = r => r.json().map(summary => new GameOverviewSummary(summary.id, summary.actors));
    return this.http
      .get(this.summaryListUrl)
      .map(requestToGameSummary);
  }

  public details(gameId: string, actorId: string, fresh: boolean = false): Observable<GameSummary> {
    return this.http
      .get(this.detailUrlTemplate(gameId, actorId, fresh))
      .map(r => new GameSummary(r.json()));
  }

  public create(model: GameCreateModel): Observable<GameSummary> {
    let postData = {
      player_count: model.playerCount
    };
    return this.http
      .post(this.createUrl, postData)
      .map(r => new GameSummary(r.json()));
  }
}
