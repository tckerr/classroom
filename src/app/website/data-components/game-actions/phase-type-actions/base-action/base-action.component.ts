import {Component, Input, OnChanges, OnInit, SimpleChanges} from "@angular/core";
import {GameSummary} from "../../../../../finalsweek-api/game/models/summary/game-summary";
import {GameSummaryAccessor} from "../../../../../finalsweek-api/game/models/summary/accessors/game-summary-accessor";
import {ActionSubmitter} from "../action-submitter";
import {ActionSubmissionNotifierService} from "../../../../comm-services/action-submission-notifier.service";
import {ActivitiesService} from "../../../../../finalsweek-api/game/activities.service";

@Component({
  selector: "app-base-action",
  templateUrl: "./base-action.component.html",
  styleUrls: ["./base-action.component.css"]
})
export class BaseActionComponent implements OnInit, OnChanges, ActionSubmitter {
  @Input() protected gameSummary: GameSummary;
  protected accessor: GameSummaryAccessor;
  protected loading: boolean = true;
  constructor(
    protected actionSubmissionNotifierService: ActionSubmissionNotifierService,
    protected activitiesService: ActivitiesService) {}

  ngOnInit() {
    console.log("CREATED");
    this.setGameSummary(this.gameSummary);
    this.loading = false;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes["gameSummary"]){
      let gameSummary = changes["gameSummary"].currentValue;
      this.setGameSummary(gameSummary);
    }
  }

  private setGameSummary(gameSummary: GameSummary){
    this.gameSummary = gameSummary;
    this.accessor = new GameSummaryAccessor(gameSummary);
  }

  onSubmit() {
    this.loading = true;
    let action = this.buildAction();
    console.log("Submitting action:", this.accessor.gameId, this.accessor.currentTurnActor.id, action);
    this.activitiesService
      .takeAction(this.accessor.gameId, this.accessor.currentTurnActor.id, action)
      .subscribe(gameDetail => {
        this.actionSubmissionNotifierService.broadcastActionSubmission(gameDetail);
        this.loading = false;
      });
  }

  public buildAction() {
    return {
      type: null,
    };
  }

}
