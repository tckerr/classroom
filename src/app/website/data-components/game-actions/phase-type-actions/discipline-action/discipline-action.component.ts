import {Component, Input} from "@angular/core";
import {PromptSelectionNotificationService} from "../../../../comm-services/prompt-selection-notification.service";
import {GameSummary} from "../../../../../finalsweek-api/game/models/summary/game-summary";

@Component({
  selector: 'app-discipline-action',
  templateUrl: './discipline-action.component.html',
  styleUrls: ['./discipline-action.component.css'],
  providers: [PromptSelectionNotificationService]
})
export class DisciplineActionComponent{
  @Input() gameSummary: GameSummary;

}
