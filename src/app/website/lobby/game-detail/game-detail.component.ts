import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs/Subscription";
import {GamesService} from "../../../finalsweek-api/games.service";
import {GameDetail} from "../../../finalsweek-api/models/game-detail";
import {Location} from '@angular/common';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css']
})
export class GameDetailComponent implements OnInit {
  private sub: Subscription;
  private gameId: string;
  private actorId: string;
  private details: GameDetail;

  constructor(
    private route: ActivatedRoute,
    private gamesService: GamesService,
    private location: Location) { }

  private updateRouteParams(params){
    let gameId = params['gameId'];
    let actorId = params['actorId'];
    if (this.actorId != actorId || this.gameId != gameId)
      this.getDetails(gameId, actorId);
    this.gameId = gameId;
    this.actorId = actorId;
  }

  private getDetails(gameId: string, actorId: string) {
    this.gamesService.details(gameId, actorId).then(details =>
      this.details = details
    )
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(result => {
      this.updateRouteParams(result);
    });
  }

  public goBack(){
    this.location.back();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
