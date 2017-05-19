import {Component, OnChanges, SimpleChanges} from "@angular/core";
import {BaseActionComponent} from "../base-action/base-action.component";
import {PromptSelection} from "../../../../../comm-services/models/prompt";
import {PromptSummaryAccessor} from "../../../../../../finalsweek-api/game/models/summary/accessors/prompt-summary-accessor";

@Component({
   selector:    "app-classtime-action",
   templateUrl: "./classtime-action.component.html",
   styleUrls:   ["./classtime-action.component.css"]
})
export class ClasstimeActionComponent extends BaseActionComponent implements OnChanges {

   private selectedCardId: string;
   private recentlyClosed: {};
   private promptSummaryAccessor = new PromptSummaryAccessor();

   ngOnChanges(changes: SimpleChanges): void {
      this.recentlyClosed = {};
      super.ngOnChanges(changes);
      if (!this.prompt.hasQuestions) {
         this.selectedCardId = null;
      }
   }

   onSubmit(): any {
      return super.onSubmit();
   }

   protected selectCard(cardId: string) {
      this.selectedCardId = cardId;
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

   private get prompt() {
      return this.gameSummary.publicData.turn.prompt;
   }

   public get collapsedCardSection() {
      return this.loading || this.prompt.hasQuestions;
   }

   public buildAction() {
      return {
         type:    "ActionCardAction",
         card_id: this.selectedCardId,
         prompt:  {
            "id":         this.prompt.id,
            "context_id": this.selectedCardId,
            "open":       this.promptSummaryAccessor.getOpenQuestions(this.prompt, this.recentlyClosed),
            "closed":     this.promptSummaryAccessor.getClosedQuestions(this.prompt, this.recentlyClosed)
         }
      };
   }
}
