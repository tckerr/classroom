import {Component, Input, OnChanges, OnInit} from "@angular/core";
import {GameSummary} from "../../../../../../finalsweek-api/game/models/summary/game-summary";

@Component({
   selector:    "app-game-json",
   templateUrl: "./game-json.component.html",
   styleUrls:   ["./game-json.component.css"]
})

export class GameJsonComponent implements OnInit, OnChanges {
   @Input() public gameSummary: GameSummary;

   ngOnInit(): void {
   }

   ngOnChanges(changes: object) {
      try {
         this.gameSummary = changes["gameSummary"].currentValue;
      } catch (e) {
         console.error("Error updating game detail data.", e);
      }
   }
}
