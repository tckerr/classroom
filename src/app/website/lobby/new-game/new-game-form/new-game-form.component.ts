import { Component, OnInit } from '@angular/core';
import {GamesService} from "../../../../finalsweek-api/games.service";
import {environment} from "../../../../../environments/environment";
import {GameCreateModel} from "../../../../finalsweek-api/models/game-create-model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-game-form',
  templateUrl: './new-game-form.component.html',
  styleUrls: ['./new-game-form.component.css']
})
export class NewGameFormComponent implements OnInit {
  private model: GameCreateModel;
  private minPlayers: number = 2;
  private maxPlayers: number = 16;
  private gameId: string;
  private actorId: string;
  private loading: boolean = false;

  constructor(private gamesService: GamesService, private router: Router) {
    this.model = new GameCreateModel(environment.defaultGameConfig.playerCount)
  }

  public createGame(){
    this.loading = true;
    this.gamesService.create(this.model).then((result:any) => {
      let publicData = result.json.public;
      this.gameId = publicData.game_id;
      this.actorId = publicData.actors[0].id;
      this.loading = false;
    });
  }

  ngOnInit() {
  }

}
