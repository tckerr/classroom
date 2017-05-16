import {ActorSummary} from "./actor-summary";

export class StudentSummary {
   public name: string;
   public studentInfoId: string;
   public actor: ActorSummary;

   constructor(data: any) {
      this.name = data.name;
      this.studentInfoId = data.studentInfoId;
      if (data.actor) {
         this.actor = new ActorSummary(data.actor);
      }
   }
}
