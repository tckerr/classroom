import {Component, Input, OnInit} from "@angular/core";
import {GamesService} from "../../../../finalsweek-api/game/games.service";
import {ActivitiesService} from "../../../../finalsweek-api/game/activities.service";
import {GameSummary} from "../../../../finalsweek-api/game/models/summary/game-summary";
import {GameSummaryAccessor} from "app/finalsweek-api/game/models/summary/accessors/game-summary-accessor";
import {PhaseActionTypeResolverService} from "../../../../finalsweek-api/game/helpers/phase-action-type-resolver.service";
import {ActionType} from "../../../../finalsweek-api/game/definitions";
import {GameSummaryUpdateNotifierService} from "../../../comm-services/game-summary-update-notification.service";
import {RefreshStateService} from "../../../base-services/refresh-state.service";

@Component({
   selector:    "app-game-actions",
   templateUrl: "./game-actions.component.html",
   styleUrls:   ["./game-actions.component.css"],
   providers:   [
      PhaseActionTypeResolverService,
      GameSummaryUpdateNotifierService,
      ActivitiesService,
      GamesService]
})
export class GameActionsComponent implements OnInit {
   @Input() public gameId: string;
   @Input() public actorId: string;
   private accessor: GameSummaryAccessor;
   private ActionType = ActionType;

   constructor(private gamesService: GamesService,
               private gameSummaryUpdateNotifierService: GameSummaryUpdateNotifierService,
               private phaseActionTypeResolver: PhaseActionTypeResolverService,
               protected refresher: RefreshStateService) {
   }

   ngOnInit() {
      this.refresher.beginRefresh();
      this.gamesService
         .details(this.gameId, this.actorId, false)
         .subscribe(gameSummary => this.refreshFromGameDetail(gameSummary));

      this.gameSummaryUpdateNotifierService
         .gameSummaryUpdated$
         .subscribe(gameSummary => this.refreshFromGameDetail(gameSummary));
   }

   private refreshFromGameDetail(gameSummary: GameSummary) {
      this.accessor = new GameSummaryAccessor(gameSummary);
      this.refresher.onRefresh();
   }

   private get currentPhase(){
      return this.phaseActionTypeResolver.resolve(this.accessor.phaseType);
   }

}
