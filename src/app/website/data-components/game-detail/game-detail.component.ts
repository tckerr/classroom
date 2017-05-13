import {Component, Input, OnInit} from "@angular/core";
import {GamesService} from "../../../finalsweek-api/game/games.service";
import {GameSummary} from "../../../finalsweek-api/game/models/summary/game-summary";


@Component({
  selector: "app-game-detail",
  templateUrl: "./game-detail.component.html",
  styleUrls: ["./game-detail.component.css"]
})

export class GameDetailComponent implements OnInit {
  @Input() public gameSummary: GameSummary;

  ngOnInit(): void {}

  ngOnChanges(changes: object) {
    try {
      this.gameSummary = changes["gameSummary"].currentValue;
    } catch (e) {
      console.error("Error updating game detail data.", e);
    }
  }
}
