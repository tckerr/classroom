import {Component, OnChanges, SimpleChanges} from "@angular/core";
import {CardIdSelectionService} from "../../../../comm-services/card-id-selection.service";
import {ActionSubmissionNotifierService} from "../../../../comm-services/action-submission-notifier.service";
import {ActivitiesService} from "../../../../../finalsweek-api/game/activities.service";
import {BaseActionComponent} from "../base-action/base-action.component";
import {PromptSelectionNotificationService} from "../../../../comm-services/prompt-selection-notification.service";
import {PromptQuestion, PromptSelection} from "../../../../comm-services/models/prompt-selection";

@Component({
  selector: "app-classtime-action",
  templateUrl: "./classtime-action.component.html",
  styleUrls: ["./classtime-action.component.css"],
  providers: [CardIdSelectionService, PromptSelectionNotificationService]
})
export class ClasstimeActionComponent extends BaseActionComponent implements OnChanges {
  private selectedCardId: string;
  private recentlyClosed: {};

  constructor(
    private cardIdSelectionService: CardIdSelectionService,
    private promptSelectionNotificationService: PromptSelectionNotificationService,
    actionSubmissionNotifierService: ActionSubmissionNotifierService,
    activitiesService: ActivitiesService) {
    super(actionSubmissionNotifierService, activitiesService);
  }

  ngOnInit() {
    super.ngOnInit();
    this.init();
    this.cardIdSelectionService.idSelected$
      .do(id => console.log(`Id: ${id} selected`))
      .subscribe(id => this.selectedCardId = id);
    this.promptSelectionNotificationService.promptSelected$
      .subscribe(selection => this.onPromptSelection(selection))
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.init();
    super.ngOnChanges(changes);
  }

  private init(){
    this.recentlyClosed = {};
  }

  public buildAction() {
    return {
      type: "ActionCardAction",
      card_id: this.selectedCardId,
      prompt: {
        "id": this.gameSummary.publicData.turn.prompt.id,
        "open": this.getOpenQuestions(),
        "closed": this.getClosedQuestions()
      }
    };
  }

  private getOpenQuestions() {
    let result = {};
    for (let key in this.gameSummary.publicData.turn.prompt.open){
      if (!this.recentlyClosed[key]){
        result[key] = this.gameSummary.publicData.turn.prompt.open[key];
      }
    }
    return result;
  }

  private getClosedQuestions() {
    let closed = Object.assign(this.gameSummary.publicData.turn.prompt.closed || {}, this.recentlyClosed);
    return closed;
  }

  private onPromptSelection(selection: PromptSelection) {
    let key = selection.question.key;
    let existing = this.gameSummary.publicData.turn.prompt.open[key];
    if (!existing)
      return;
    delete this.gameSummary.publicData.turn.prompt[key];
    existing["selected_option"] = selection.option;
    this.recentlyClosed[selection.question.key] = existing;
  }
}
