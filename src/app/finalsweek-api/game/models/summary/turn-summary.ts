import {PromptSummary} from "./prompt-summary";
export class TurnSummary {
   public prompt: PromptSummary;
   public id: string;
   public actorId: string;

   constructor(data: any) {
      this.id = data.id;
      this.actorId = data.current_turn_actor_id;
      this.prompt = new PromptSummary(data.prompt);
   }
}
