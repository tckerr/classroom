import {PromptSummary} from "../prompt-summary";

export class PromptSummaryAccessor {

   public getOpenQuestions(prompt: PromptSummary, exclusions: {} = {}) {
      let result = {};
      for (let key in prompt.open) {
         if (!exclusions[key]) {
            result[key] = prompt.open[key];
         }
      }
      return result;
   }

   public getClosedQuestions(existing: PromptSummary, newlyClosed: {} = {}) {
      return Object.assign(existing.closed, newlyClosed);
   }
}
