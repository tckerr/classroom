import { Component, OnInit } from '@angular/core';
import {GameSummary} from "../../../finalsweek-api/models/game-summary";
import {GamesService} from "../../../finalsweek-api/games.service";

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.css']
})
export class GamesListComponent implements OnInit {

  private gameSummaries: GameSummary[];

  constructor(private gamesService: GamesService) {
    this.gamesService
       .summaryList()
       .then(r => this.gameSummaries = r);
  }



  ngOnInit() {

  }

}
