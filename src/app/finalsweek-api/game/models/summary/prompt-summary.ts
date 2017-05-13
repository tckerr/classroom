export class PromptSummary {
  public id: string;
  public closed: {};
  public open: {};
  constructor(data: any){
    this.id = data.id;
    this.closed = data.closed;
    this.open = data.open;
  }

  public get hasQuestions(): boolean{
    return Object.keys(this.open).length > 0;
  }
}
