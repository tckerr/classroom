export class SeatSummary {
  public row: number;
  public column: number;

  constructor(data: any){
    this.row = data.row;
    this.column = data.column;
  }
}
