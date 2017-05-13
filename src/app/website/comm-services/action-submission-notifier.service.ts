import { Injectable } from '@angular/core';
import {Subject} from "rxjs/Subject";
import {GameSummary} from "../../finalsweek-api/game/models/summary/game-summary";

@Injectable()
export class ActionSubmissionNotifierService {

  private notifierSource = new Subject<GameSummary>();

  public actionSubmitted$ = this.notifierSource.asObservable();

  public broadcastActionSubmission(summary: GameSummary) {
    this.notifierSource.next(summary);
  }

}
