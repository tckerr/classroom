import {Component, Input, OnInit} from "@angular/core";
import {GamesService} from "../../../finalsweek-api/game/games.service";
import {GameSummary} from "../../../finalsweek-api/game/models/summary/game-summary";


@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css']
})

export class GameDetailComponent implements OnInit {
  private gameSummary: GameSummary;
  @Input() public gameId: string;
  @Input() public actorId: string;

  constructor(private gamesService: GamesService) {

  }

  private getSummary(gameId: string, actorId: string) {
    this.gamesService
      .details(gameId, actorId)
      .subscribe(details => this.gameSummary = details)
  }

  ngOnInit() {
    this.getSummary(this.gameId, this.actorId);
  }

  ngOnChanges(changes: object) {
    try {
      let gameId = changes["gameId"].currentValue;
      let actorId = changes["actorId"].currentValue;
      this.getSummary(gameId, actorId);
    } catch (e) {
      console.error("Error updating game detail data.", e);
    }
  }

  private setDetails(gameId: string, actorId: string) {
    this.gameId = gameId;
    this.actorId = actorId;
    this.getSummary(this.gameId, this.actorId);
  }
}
