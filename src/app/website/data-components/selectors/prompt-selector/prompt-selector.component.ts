import {Component, Input, OnChanges, OnInit, SimpleChanges} from "@angular/core";
import {PromptSummary} from "../../../../finalsweek-api/game/models/summary/prompt-summary";
import {PromptSelectionNotificationService} from "../../../comm-services/prompt-selection-notification.service";
import {PromptSelection, PromptQuestion} from "../../../comm-services/models/prompt-selection";

@Component({
  selector: 'app-prompt-selector',
  templateUrl: './prompt-selector.component.html',
  styleUrls: ['./prompt-selector.component.css']
})
export class PromptSelectorComponent implements OnInit, OnChanges {

  @Input() prompt: PromptSummary;
  private questions: PromptQuestion[];

  constructor(private promptSelectionNotificationService: PromptSelectionNotificationService) { }

  ngOnInit() {
  }

  init(prompt){
    this.initializeQuestions(prompt);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes["prompt"]){
      let prompt = changes["prompt"].currentValue;
      this.init(prompt);
    }
  }

  private initializeQuestions(prompt: PromptSummary) {
    this.prompt = prompt;
    this.questions = [];
    for (let key in prompt.open) {
      let question = new PromptQuestion(key, prompt.open[key].options, false);
      this.questions.push(question)
      this.onSelect(question, question.options[0].id)
    }
    for (let key in prompt.closed) {
      let question = new PromptQuestion(key, prompt.closed[key].options, true);
      this.questions.push(question);
      this.onSelect(question, prompt.closed[key].selected_option.id)
    }
    this.questions.reverse();
  }

  public onSelect(question:PromptQuestion, optionId: string){
    let selectedOption = null;
    for (let option of question.options){
      if(option.id == optionId){
        selectedOption = option;
        break;
      }
    }
    if (!selectedOption){
      console.error("Option", optionId, "not found in", question.options);
      throw Error("Option was not found in question options list.")
    }
    let promptSelection = new PromptSelection(question, selectedOption);
    this.promptSelectionNotificationService.broadcastPromptSelection(promptSelection);
  }
}
