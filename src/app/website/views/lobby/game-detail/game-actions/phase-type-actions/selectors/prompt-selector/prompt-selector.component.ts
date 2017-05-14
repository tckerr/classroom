import {Component, Input, OnChanges, OnInit, SimpleChanges} from "@angular/core";
import {PromptSummary} from "../../../../../../../../finalsweek-api/game/models/summary/prompt-summary";
import {PromptSelectionNotificationService} from "../../../../../../../comm-services/prompt-selection-notification.service";
import {PromptQuestion, PromptSelection} from "../../../../../../../comm-services/models/prompt";

@Component({
  selector:    "app-prompt-selector",
  templateUrl: "./prompt-selector.component.html",
  styleUrls:   ["./prompt-selector.component.css"]
})
export class PromptSelectorComponent implements OnInit, OnChanges {

  @Input() prompt: PromptSummary;
  @Input() disabled = false;
  private questions: PromptQuestion[];

  constructor(private promptSelectionNotificationService: PromptSelectionNotificationService) {
  }

  ngOnInit() {
  }

  init(prompt) {
    this.initializeQuestions(prompt);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes["prompt"]) {
      let prompt = changes["prompt"].currentValue;
      this.init(prompt);
    }
  }

  private initializeQuestions(prompt: PromptSummary) {
    this.prompt = prompt;
    this.questions = [];
    for (const key of Object.keys(prompt.open)) {
      let question = new PromptQuestion(key, prompt.open[key].options, false);
      this.questions.push(question);
      this.onSelect(question, question.options[0].id);
    }
    for (const key of Object.keys(prompt.closed)) {
      let question = new PromptQuestion(key, prompt.closed[key].options, true, prompt.closed[key].selected_option);
      this.questions.push(question);
      this.onSelect(question, prompt.closed[key].selected_option.id);
    }
    this.questions.reverse();
  }

  public amSelected(question: PromptQuestion, optionId: string) {
    return question.selected_option && optionId === question.selected_option.id;
  }

  public onSelect(question: PromptQuestion, optionId: string) {
    let selectedOption = null;
    for (let option of question.options) {
      if (option.id === optionId) {
        selectedOption = option;
        break;
      }
    }
    if (!selectedOption) {
      console.error("Option", optionId, "not found in", question.options);
      throw Error("Option was not found in question options list.");
    } else {
      console.log("Selecting", selectedOption, "via option", optionId, "for question", question.key);
    }
    let promptSelection = new PromptSelection(question, selectedOption);
    this.promptSelectionNotificationService.broadcastPromptSelection(promptSelection);
  }
}
