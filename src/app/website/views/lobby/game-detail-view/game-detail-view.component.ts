import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs/Subscription";


@Component({
  selector: 'app-game-detail-view',
  templateUrl: './game-detail-view.component.html',
  styleUrls: ['./game-detail-view.component.css']
})
export class GameDetailViewComponent implements OnInit {
  private sub: Subscription;
  private gameId: string;
  private actorId: string;

  constructor(private route: ActivatedRoute) {
  }

  private updateRouteParams(params) {
    this.gameId = params['gameId'];
    this.actorId = params['actorId'];
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(result => {
      this.updateRouteParams(result);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
