import {Injectable} from "@angular/core";
import {Subject} from "rxjs/Subject";
import {GameSummary} from "../../finalsweek-api/game/models/summary/game-summary";

@Injectable()
export class GameSummaryUpdateNotifierService {

  private notifierSource = new Subject<GameSummary>();

  public gameSummaryUpdated$ = this.notifierSource.asObservable();

  public broadcastUpdate(summary: GameSummary) {
    this.notifierSource.next(summary);
  }

}
