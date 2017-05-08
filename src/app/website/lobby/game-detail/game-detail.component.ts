import {Component, Input, OnInit, SimpleChange} from '@angular/core';
import {GamesService} from "../../../finalsweek-api/games.service";
import {GameDetail} from "../../../finalsweek-api/models/game-detail";


@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css']
})

export class GameDetailComponent implements OnInit {
  private details: GameDetail;
  @Input() public gameId: string;
  @Input() public actorId: string;

  constructor(private gamesService: GamesService) {

  }

  private getDetails(gameId: string, actorId: string) {
    this.gamesService.details(gameId, actorId).then(details =>
      this.details = details
    )
  }

  ngOnInit() {
    this.getDetails(this.gameId, this.actorId);
  }

  ngOnChanges(changes: object) {
    try {
      let gameId = changes["gameId"].currentValue;
      let actorId = changes["actorId"].currentValue;
      this.getDetails(gameId, actorId);
    } catch (e) {
      console.error("Error updating game detail data.", e);
    }
  }

  private setDetails(gameId: string, actorId: string) {
    this.gameId = gameId;
    this.actorId = actorId;
    this.getDetails(this.gameId, this.actorId);
  }
}
