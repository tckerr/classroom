import {Component, Input, OnChanges, OnInit, SimpleChanges} from "@angular/core";
import {GameSummaryAccessor} from "../../../../../finalsweek-api/game/models/summary/accessors/game-summary-accessor";
import {GameSummary} from "../../../../../finalsweek-api/game/models/summary/game-summary";

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.css']
})
export class GameBoardComponent implements OnInit, OnChanges {

  @Input() private gameSummary: GameSummary;
  private loading: boolean = true;
  private accessor: GameSummaryAccessor;

  ngOnInit(){
    this.accessor = new GameSummaryAccessor(this.gameSummary);
    this.loading = false;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes["gameSummary"]){
      this.gameSummary = changes["gameSummary"].currentValue;
      this.accessor = new GameSummaryAccessor(this.gameSummary);
    }
  }

}
