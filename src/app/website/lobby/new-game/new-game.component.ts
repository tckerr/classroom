import {Component, OnInit} from "@angular/core";
import {GameSummary} from "../../../finalsweek-api/game/models/summary/game-summary";
import {Router} from "@angular/router";
import {GameSummaryUpdateNotifierService} from "../../comm-services/game-summary-update-notification.service";

@Component({
   selector:    "app-new-game",
   templateUrl: "./new-game.component.html",
   styleUrls:   ["./new-game.component.css"],
   providers:   [GameSummaryUpdateNotifierService]
})
export class NewGameComponent implements OnInit {

   constructor(private notificationService: GameSummaryUpdateNotifierService, private router: Router) {}

   ngOnInit() {
      this.notificationService.gameSummaryUpdated$
         .subscribe((gameSummary: GameSummary) => {
            this.navigateToGame(gameSummary);
         });
   }

   private navigateToGame(gameSummary: GameSummary) {
      let gameId = gameSummary.publicData.gameId;
      let actorId = gameSummary.publicData.actors[0].id;
      this.router.navigate(["/lobby/games/", gameId, actorId]);
   }

}
