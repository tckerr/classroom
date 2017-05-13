import {Component, OnInit} from "@angular/core";
import {GameCreationNotificationService} from "../../../comm-services/game-creation-notification.service";
import {GameSummary} from "../../../../finalsweek-api/game/models/summary/game-summary";
import {TJsonViewerModule} from 't-json-viewer';

@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.css'],
  providers: [GameCreationNotificationService]
})
export class NewGameComponent implements OnInit {
  private gameSummary: GameSummary;

  constructor(private notificationService: GameCreationNotificationService) {
  }

  ngOnInit() {
    this.notificationService.gameCreated$.subscribe((gameSummary: GameSummary) => {
      console.log(gameSummary);
      this.gameSummary = gameSummary;
    });
  }

  private getRandomActorId(){
    return this.gameSummary.publicData.actors[0].id;
  }
}
