import {ActionCardTemplateSummary} from "./action-card-template-summary";
export class ActionCardSummary {
  public id: string;
  public template: any;

  constructor(data:any){
    this.id = data.id;
    this.template = new ActionCardTemplateSummary(data.template);
  }
}
