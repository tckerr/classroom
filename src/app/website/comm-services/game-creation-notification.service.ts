import { Injectable } from '@angular/core';
import {Subject} from "rxjs/Subject";
import {GameSummary} from "../../finalsweek-api/game/models/summary/game-summary";

@Injectable()
export class GameCreationNotificationService {

  private notifierSource = new Subject<GameSummary>();

  public gameCreated$ = this.notifierSource.asObservable();

  public broadcastGameCreation(id: GameSummary) {
    this.notifierSource.next(id);
  }
}
