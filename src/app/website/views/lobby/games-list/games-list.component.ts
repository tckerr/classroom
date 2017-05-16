import {Component, OnInit} from "@angular/core";
import {GamesService} from "../../../../finalsweek-api/game/games.service";
import {GameOverviewSummary} from "../../../../finalsweek-api/game/models/game-overview-summary";

@Component({
   selector:    "app-games-list",
   templateUrl: "./games-list.component.html",
   styleUrls:   ["./games-list.component.css"]
})
export class GamesListComponent implements OnInit {

   private gameSummaries: GameOverviewSummary[];
   private loading = false;

   constructor(private gamesService: GamesService) {
      this.loading = true;
      this.gamesService
         .summaryList()
         .subscribe(r => {
            this.gameSummaries = r;
            this.loading = false;
         });
   }

   getMetadataKeys(metadata: {}) {
      return Object.keys(metadata);
   }

   ngOnInit() {

   }

}
