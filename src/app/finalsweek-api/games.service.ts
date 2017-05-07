import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {environment} from "../../environments/environment";
import {GameSummary} from "./models/game-summary";
import {GameDetail} from "./models/game-detail";

@Injectable()
export class GamesService {
  private summaryListUrl: string;
  private detailUrlTemplate: { summaryList; detail } | any;

  constructor(private http: Http) {
    this.summaryListUrl = environment.finalsweekApi.endpoints.game.summaryList;
    this.detailUrlTemplate = environment.finalsweekApi.endpoints.game.detail;
  }


  public summaryList(): Promise<GameSummary[]>{
    let requestToGameSummary = r => r.json().map(summary => new GameSummary(summary.id, summary.actors));
    return this.http
      .get(this.summaryListUrl)
      .map(requestToGameSummary)
      .toPromise();
  }

  public details(gameId: string, actorId: string): Promise<GameDetail>{
    return this.http
      .get(this.detailUrlTemplate(gameId, actorId))
      .map(r => new GameDetail(r.json()))
      .toPromise();
  }
}
