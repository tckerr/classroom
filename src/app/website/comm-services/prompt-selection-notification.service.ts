import { Injectable } from '@angular/core';
import {Subject} from "rxjs/Subject";
import {PromptSelection} from "./models/prompt-selection";

@Injectable()
export class PromptSelectionNotificationService {

  private notifierSource = new Subject<PromptSelection>();

  public promptSelected$ = this.notifierSource.asObservable();

  public broadcastPromptSelection(selection: PromptSelection) {
    this.notifierSource.next(selection);
  }

}
