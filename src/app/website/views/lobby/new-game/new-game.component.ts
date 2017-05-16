import {Component, OnInit} from "@angular/core";
import {GameCreationNotificationService} from "../../../comm-services/game-creation-notification.service";
import {GameSummary} from "../../../../finalsweek-api/game/models/summary/game-summary";
import {Router} from "@angular/router";

@Component({
   selector:    "app-new-game",
   templateUrl: "./new-game.component.html",
   styleUrls:   ["./new-game.component.css"],
   providers:   [GameCreationNotificationService]
})
export class NewGameComponent implements OnInit {

   constructor(private notificationService: GameCreationNotificationService, private router: Router) {
   }

   ngOnInit() {
      this.notificationService.gameCreated$.subscribe((gameSummary: GameSummary) => {
         let gameId = gameSummary.publicData.gameId;
         let actorId = gameSummary.publicData.actors[0].id;
         this.router.navigate(["/lobby/games/", gameId, actorId]);
      });
   }

}
