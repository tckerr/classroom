import {Component, Input, OnChanges, SimpleChanges} from "@angular/core";
import {PromptSelectionNotificationService} from "../../../../comm-services/prompt-selection-notification.service";
import {GameSummary} from "../../../../../finalsweek-api/game/models/summary/game-summary";
import {GameSummaryUpdateNotifierService} from "../../../../comm-services/game-summary-update-notifier.service";
import {ActivitiesService} from "../../../../../finalsweek-api/game/activities.service";
import {PromptSummaryAccessor} from "../../../../../finalsweek-api/game/models/summary/accessors/prompt-summary-accessor";
import {BaseActionComponent} from "../base-action/base-action.component";
import {PromptSelection} from "../../../../comm-services/models/prompt-selection";
import {GamesService} from "../../../../../finalsweek-api/game/games.service";

@Component({
  selector: 'app-discipline-action',
  templateUrl: './discipline-action.component.html',
  styleUrls: ['./discipline-action.component.css'],
  providers: [PromptSelectionNotificationService]
})
export class DisciplineActionComponent extends BaseActionComponent implements OnChanges{
  @Input() gameSummary: GameSummary;
  private promptSummaryAccessor: PromptSummaryAccessor;
  private recentlyClosed: {};

  constructor(
    private promptSelectionNotificationService: PromptSelectionNotificationService,
    actionSubmissionNotifierService: GameSummaryUpdateNotifierService,
    activitiesService: ActivitiesService,
    gamesService: GamesService) {
    super(actionSubmissionNotifierService, activitiesService, gamesService);
    this.promptSummaryAccessor = new PromptSummaryAccessor();
  }

  ngOnInit() {
    super.ngOnInit();
    this.promptSelectionNotificationService.promptSelected$
      .subscribe(selection => this.onPromptSelection(selection))
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.recentlyClosed = {};
    super.ngOnChanges(changes);
  }

  public buildAction() {
    return {
      type: "DisciplineAction",
      prompt: {
        "id": this.prompt.id,
        "context_id": null,
        "open": this.promptSummaryAccessor.getOpenQuestions(this.prompt, this.recentlyClosed),
        "closed": this.promptSummaryAccessor.getClosedQuestions(this.prompt, this.recentlyClosed)
      }
    };
  }

  private get prompt (){
    return this.gameSummary.publicData.turn.prompt;
  }

  private onPromptSelection(selection: PromptSelection) {
    let key = selection.question.key;
    let existing = this.prompt.open[key];
    if (!existing)
      return;
    delete this.prompt[key];
    existing["selected_option"] = selection.option;
    this.recentlyClosed[selection.question.key] = existing;
  }

}
