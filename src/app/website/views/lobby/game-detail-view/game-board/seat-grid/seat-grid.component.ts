import {Component, Input, OnChanges, OnInit, SimpleChanges} from "@angular/core";
import {SeatSummary} from "../../../../../../finalsweek-api/game/models/summary/seat-summary";
import {StudentSummary} from "../../../../../../finalsweek-api/game/models/summary/student-summary";
import {ActorSummary} from "../../../../../../finalsweek-api/game/models/summary/actor-summary";

@Component({
  selector:    "app-seat-grid",
  templateUrl: "./seat-grid.component.html",
  styleUrls:   ["./seat-grid.component.css"]
})
export class SeatGridComponent implements OnInit, OnChanges {

  @Input() public seats: SeatSummary[];
  @Input() private currentTurnActor: ActorSummary;
  private grid: StudentSummary[][] = [];
  private maxRow: number;
  private maxCol: number;

  constructor() {
  }

  ngOnInit() {
    this.initializeGrid();
  }

  ngOnChanges(changes: SimpleChanges): void {
    try {
      this.seats = changes["seats"].currentValue;
      this.currentTurnActor = changes["currentTurnActor"].currentValue;
      this.initializeGrid();
    } catch (e) {
      console.error("Error updating game detail data.", e);
    }
  }

  private isCurrentTurnActor(student) {
    return student
      && student.actor
      && this.currentTurnActor
      && this.currentTurnActor.id === student.actor.id;
  }

  private initializeGrid() {
    let maxRow = 0;
    let maxCol = 0;
    for (let seat of this.seats) {
      if (seat.row > maxRow) {
        maxRow = seat.row;
      }
      if (seat.column > maxCol) {
        maxCol = seat.column;
      }
    }
    for (let col = 0; col <= maxCol; ++col) {
      for (let row = 0; row <= maxRow; ++row) {
        if (!this.grid[row]) {
          this.grid[row] = [];
        }
        if (!this.grid[row][col]) {
          this.grid[row][col] = null;
        }
      }
    }
    this.maxRow = maxRow;
    this.maxCol = maxCol;
    for (let seat of this.seats) {
      this.grid[seat.row][seat.column] = seat.student;
    }
  }

}
