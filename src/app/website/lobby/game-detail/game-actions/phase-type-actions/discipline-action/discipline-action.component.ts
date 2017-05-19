import {Component, Input, OnChanges, SimpleChanges} from "@angular/core";
import {GameSummary} from "../../../../../../finalsweek-api/game/models/summary/game-summary";
import {PromptSummaryAccessor} from "../../../../../../finalsweek-api/game/models/summary/accessors/prompt-summary-accessor";
import {BaseActionComponent} from "../base-action/base-action.component";
import {PromptSelection} from "../../../../../comm-services/models/prompt";

@Component({
   selector:    "app-discipline-action",
   templateUrl: "./discipline-action.component.html",
   styleUrls:   ["./discipline-action.component.css"]
})
export class DisciplineActionComponent extends BaseActionComponent implements OnChanges {
   @Input() gameSummary: GameSummary;
   private promptSummaryAccessor = new PromptSummaryAccessor();
   private recentlyClosed: {};

   ngOnChanges(changes: SimpleChanges): void {
      this.recentlyClosed = {};
      super.ngOnChanges(changes);
   }

   public buildAction() {
      return {
         type:   "DisciplineAction",
         prompt: {
            "id":         this.prompt.id,
            "context_id": null,
            "open":       this.promptSummaryAccessor.getOpenQuestions(this.prompt, this.recentlyClosed),
            "closed":     this.promptSummaryAccessor.getClosedQuestions(this.prompt, this.recentlyClosed)
         }
      };
   }

   private get prompt() {
      return this.gameSummary.publicData.turn.prompt;
   }

   protected selectPrompt(selection: PromptSelection) {
      let key = selection.question.key;
      let existing = this.prompt.open[key];
      if (!existing) {
         return;
      }
      delete this.prompt[key];
      existing["selected_option"] = selection.option;
      this.recentlyClosed[selection.question.key] = existing;
   }

}
