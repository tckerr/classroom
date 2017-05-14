import {Component, OnInit} from "@angular/core";
import {GamesService} from "../../../finalsweek-api/game/games.service";
import {environment} from "../../../../environments/environment";
import {GameSummary} from "../../../finalsweek-api/game/models/summary/game-summary";
import {GameCreationNotificationService} from "../../comm-services/game-creation-notification.service";
import {GameCreateModel} from "../../../finalsweek-api/game/models/creation-models/game-create-model";

@Component({
  selector: "app-new-game-form",
  templateUrl: "./new-game-form.component.html",
  styleUrls: ["./new-game-form.component.css"]
})
export class NewGameFormComponent implements OnInit {
  private model: GameCreateModel;
  private minPlayers: number = environment.defaultGameConfig.minPlayers;
  private maxPlayers: number = environment.defaultGameConfig.maxPlayers;
  private loading = false;

  constructor(private gamesService: GamesService, private notificationService: GameCreationNotificationService) {
    this.model = new GameCreateModel(environment.defaultGameConfig.playerCount);
  }

  public createGame() {
    this.loading = true;
    this.gamesService
      .create(this.model)
      .subscribe(r => this.handleCreateGameResponse(r));
  }

  public handleCreateGameResponse(result: GameSummary){
      this.loading = false;
      this.notificationService.broadcastGameCreation(result);
  }

  ngOnInit() {
  }

}
