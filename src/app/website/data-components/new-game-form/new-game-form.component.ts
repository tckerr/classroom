import {Component, OnInit} from "@angular/core";
import {GamesService} from "../../../finalsweek-api/game/games.service";
import {environment} from "../../../../environments/environment";
import {GameCreateModel} from "../../../finalsweek-api/game/models/game-create-model";
import {GameDetail} from "../../../finalsweek-api/game/models/game-detail";

@Component({
  selector: 'app-new-game-form',
  templateUrl: './new-game-form.component.html',
  styleUrls: ['./new-game-form.component.css']
})
export class NewGameFormComponent implements OnInit {
  private model: GameCreateModel;
  private minPlayers: number = environment.defaultGameConfig.minPlayers;
  private maxPlayers: number = environment.defaultGameConfig.maxPlayers;
  private gameId: string;
  private actorId: string;
  private loading: boolean = false;

  constructor(private gamesService: GamesService) {
    this.model = new GameCreateModel(environment.defaultGameConfig.playerCount)
  }

  public createGame() {
    this.loading = true;
    this.gamesService
      .create(this.model)
      .subscribe(r => this.handleCreateGameResponse(r));
  }

  public handleCreateGameResponse(result: GameDetail){
      console.log(result)
      let publicData = result.json.public;
      this.gameId = publicData.game_id;
      this.actorId = publicData.actors[0].id;
      this.loading = false;
  }

  ngOnInit() {
  }

}
