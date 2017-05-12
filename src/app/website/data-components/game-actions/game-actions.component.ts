import {Component, Input, OnInit} from "@angular/core";
import {GamesService} from "../../../finalsweek-api/game/games.service";
import {ActivitiesService} from "../../../finalsweek-api/game/activities.service";
import {ActorSummary} from "../../../finalsweek-api/game/models/actor-summary";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-game-actions',
  templateUrl: './game-actions.component.html',
  styleUrls: ['./game-actions.component.css']
})
export class GameActionsComponent implements OnInit {
  @Input() public gameId: string;
  @Input() public actorId: string;

  private actors: any[] = [];
  private actorsStream: Observable<ActorSummary>;

  constructor(private gamesService: GamesService, private activitiesService: ActivitiesService) {
  }

  ngOnInit() {
    // TODO: port all services to return observables
    this.actorsStream = this.gamesService
      .details(this.gameId, this.actorId)
      .flatMap((response: any) => response.json.public.actors)
      .map(actorData => new ActorSummary(actorData))
      .do(r => console.log("Received actor data:", r));

    this.actorsStream.subscribe(r => this.actors.push(r));
  }
}
