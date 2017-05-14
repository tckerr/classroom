import {Component, Input, OnChanges, OnInit} from "@angular/core";
import {GameSummary} from "../../../finalsweek-api/game/models/summary/game-summary";

@Component({
  selector:    "app-game-detail",
  templateUrl: "./game-detail.component.html",
  styleUrls:   ["./game-detail.component.css"]
})

export class GameDetailComponent implements OnInit, OnChanges {
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
