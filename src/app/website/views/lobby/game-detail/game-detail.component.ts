import {Component, OnDestroy, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector:    "app-game-detail",
  templateUrl: "./game-detail.component.html",
  styleUrls:   ["./game-detail.component.css"]
})
export class GameDetailComponent implements OnInit, OnDestroy {
  private sub: Subscription;
  private gameId: string;
  private actorId: string;

  constructor(private route: ActivatedRoute) {
  }

  private updateRouteParams(params) {
    this.gameId = params["gameId"];
    this.actorId = params["actorId"];
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
