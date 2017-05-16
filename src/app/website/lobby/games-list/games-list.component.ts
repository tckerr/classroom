import {Component} from "@angular/core";
import {GamesService} from "../../../finalsweek-api/game/games.service";
import {GameOverviewSummary} from "../../../finalsweek-api/game/models/game-overview-summary";
import {RefreshStateService} from "../../base-services/refresh-state.service";

@Component({
   selector:    "app-games-list",
   templateUrl: "./games-list.component.html",
   styleUrls:   ["./games-list.component.css"]
})
export class GamesListComponent {

   private gameSummaries: GameOverviewSummary[];

   constructor(private gamesService: GamesService, private refresher: RefreshStateService) {
      this.loadGames();
   }

   private loadGames() {
      this.refresher.beginRefresh();
      this.gamesService
         .summaryList()
         .subscribe((gameSummaryList: GameOverviewSummary[]) => {
            this.gameSummaries = gameSummaryList;
            this.refresher.onRefresh();
         });
   }
}
