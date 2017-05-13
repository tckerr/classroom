import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {environment} from "../../../environments/environment";
import {GameDetail} from "./models/game-detail";

@Injectable()
export class ActivitiesService {
  private takeActionUrl: string;

  constructor(private http: Http) {
    this.takeActionUrl = environment.finalsweekApi.endpoints.activities.root;
  }

  public takeAction(gameId: string, actorId: string, action: any) {
    return this.http
      .post(this.takeActionUrl, {
        actor_id: actorId,
        game_id: gameId,
        action_params: action
      })
      .map(r => new GameDetail(r.json()));
  }

}
