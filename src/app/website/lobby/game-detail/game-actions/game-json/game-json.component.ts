import {Component, Input, OnChanges, OnInit} from "@angular/core";
import {GameSummary} from "../../../../../finalsweek-api/game/models/summary/game-summary";
import {Observable} from "rxjs/Observable";

@Component({
   selector:    "app-game-json",
   templateUrl: "./game-json.component.html",
   styleUrls:   ["./game-json.component.css"]
})

export class GameJsonComponent implements OnInit, OnChanges {
   @Input() public gameSummary: GameSummary;
   private loading = true;

   ngOnInit(): void {}

   ngOnChanges(changes: object) {
      try {
         this.loading = true;
         this.gameSummary = changes["gameSummary"].currentValue;
         Observable.timer(1).subscribe(() => this.loading = false);
      } catch (e) {
         console.error("Error updating game detail data.", e);
      }
   }
}
