import {Component, OnChanges, OnInit, SimpleChanges} from "@angular/core";
import {CardIdSelectionService} from "../../../../../../comm-services/card-id-selection-notification.service";
import {GameSummaryUpdateNotifierService} from "../../../../../../comm-services/game-summary-update-notification.service";
import {ActivitiesService} from "../../../../../../../finalsweek-api/game/activities.service";
import {BaseActionComponent} from "../base-action/base-action.component";
import {PromptSelectionNotificationService} from "../../../../../../comm-services/prompt-selection-notification.service";
import {PromptSelection} from "../../../../../../comm-services/models/prompt";
import {PromptSummaryAccessor} from "../../../../../../../finalsweek-api/game/models/summary/accessors/prompt-summary-accessor";
import {GamesService} from "../../../../../../../finalsweek-api/game/games.service";

@Component({
  selector:    "app-classtime-action",
  templateUrl: "./classtime-action.component.html",
  styleUrls:   ["./classtime-action.component.css"],
  providers:   [CardIdSelectionService, PromptSelectionNotificationService]
})
export class ClasstimeActionComponent extends BaseActionComponent implements OnInit, OnChanges {

  private selectedCardId: string;
  private recentlyClosed: {};
  private promptSummaryAccessor: PromptSummaryAccessor;

  constructor(private cardIdSelectionService: CardIdSelectionService,
              private promptSelectionNotificationService: PromptSelectionNotificationService,
              actionSubmissionNotifierService: GameSummaryUpdateNotifierService,
              activitiesService: ActivitiesService,
              gamesService: GamesService) {
    super(actionSubmissionNotifierService, activitiesService, gamesService);
    this.promptSummaryAccessor = new PromptSummaryAccessor();
  }

  ngOnInit() {
    super.ngOnInit();
    this.cardIdSelectionService.idSelected$
      .do(id => console.log(`Id: ${id} selected`))
      .subscribe(id => this.onCardSelection(id));
    this.promptSelectionNotificationService.promptSelected$
      .subscribe(selection => this.onPromptSelection(selection));
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.recentlyClosed = {};
    super.ngOnChanges(changes);
    if (!this.prompt.hasQuestions) {
      this.selectedCardId = null;
    }
  }

  onSubmit(): any {
    return super.onSubmit();
  }

  private get prompt() {
    return this.gameSummary.publicData.turn.prompt;
  }

  public get collapsedCardSection(){
    return this.loading || this.prompt.hasQuestions;
  }

  public buildAction() {
    return {
      type:    "ActionCardAction",
      card_id: this.selectedCardId,
      prompt:  {
        "id":         this.prompt.id,
        "context_id": this.selectedCardId,
        "open":       this.promptSummaryAccessor.getOpenQuestions(this.prompt, this.recentlyClosed),
        "closed":     this.promptSummaryAccessor.getClosedQuestions(this.prompt, this.recentlyClosed)
      }
    };
  }

  private onPromptSelection(selection: PromptSelection) {
    let key = selection.question.key;
    let existing = this.prompt.open[key];
    if (!existing) {
      return;
    }
    delete this.prompt[key];
    existing["selected_option"] = selection.option;
    this.recentlyClosed[selection.question.key] = existing;
  }

  private onCardSelection(id: string) {
    this.selectedCardId = id;
  }
}
