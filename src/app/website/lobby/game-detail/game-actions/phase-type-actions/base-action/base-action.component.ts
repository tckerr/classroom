import {Component, Input, OnChanges, OnInit, SimpleChanges} from "@angular/core";
import {GameSummary} from "../../../../../../finalsweek-api/game/models/summary/game-summary";
import {GameSummaryAccessor} from "../../../../../../finalsweek-api/game/models/summary/accessors/game-summary-accessor";
import {ActionSubmitter} from "../action-submitter";
import {GameSummaryUpdateNotifierService} from "../../../../../comm-services/game-summary-update-notification.service";
import {ActivitiesService} from "../../../../../../finalsweek-api/game/activities.service";
import {GamesService} from "../../../../../../finalsweek-api/game/games.service";

@Component({
   selector:    "app-base-action",
   templateUrl: "./base-action.component.html",
   styleUrls:   ["./base-action.component.css"]
})
export class BaseActionComponent implements OnInit, OnChanges, ActionSubmitter {
   @Input() protected gameSummary: GameSummary;
   protected accessor: GameSummaryAccessor;
   protected loading = true;

   constructor(protected gameSummaryUpdateNotifierService: GameSummaryUpdateNotifierService,
               protected activitiesService: ActivitiesService,
               protected gamesService: GamesService) {
   }

   ngOnInit() {
      this.setGameSummary(this.gameSummary);
      this.loading = false;
   }

   ngOnChanges(changes: SimpleChanges): void {
      if (changes["gameSummary"]) {
         let gameSummary = changes["gameSummary"].currentValue;
         this.setGameSummary(gameSummary);
      }
   }

   private setGameSummary(gameSummary: GameSummary) {
      this.gameSummary = gameSummary;
      this.accessor = new GameSummaryAccessor(gameSummary);
   }

   onSubmit() {
      let action = this.buildAction();
      this.loading = true;
      this.activitiesService
         .takeAction(this.accessor.gameId, this.accessor.currentTurnActor.id, action)
         .subscribe(gameSummary => this.broadcastUpdate(gameSummary));
   }

   protected refresh() {
      this.loading = true;
      this.gamesService
         .details(this.accessor.gameId, this.accessor.currentTurnActor.id, true)
         .subscribe(gameSummary => this.broadcastUpdate(gameSummary));
   }

   private broadcastUpdate(gameSummary: GameSummary) {
      this.gameSummaryUpdateNotifierService.broadcastUpdate(gameSummary);
      this.loading = false;
   }

   public buildAction() {
      return {
         type: null
      };
   }

}
