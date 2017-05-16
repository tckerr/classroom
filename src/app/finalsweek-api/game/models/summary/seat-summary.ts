import {StudentSummary} from "./student-summary";
export class SeatSummary {
   public row: number;
   public column: number;
   public student: StudentSummary;

   constructor(data: any) {
      this.row = data.row;
      this.column = data.column;
      if (data.student) {
         this.student = new StudentSummary(data.student);
      }
   }
}
