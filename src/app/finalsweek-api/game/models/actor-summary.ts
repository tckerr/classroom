export class ActorSummary {
  public hand: any;
  public id: string;
  public label: string;
  public name: string;
  public inPlayEffects: any[];

  constructor(private data:any){
    this.id = data.id;
    this.label = data.label;
    this.name = data.name;
    this.inPlayEffects = data.in_play_effects;
    this.hand = data.hand;
  }
}
