import {InPlayEffectSummary} from "./in-play-effect-summary";
import {HandSummary} from "./hand-summary";

export class ActorSummary {
  public hand: any;
  public id: string;
  public label: string;
  public name: string;
  public inPlayEffects: InPlayEffectSummary;

  constructor(private data: any) {
    this.id = data.id;
    this.label = data.label;
    this.name = data.name;
    this.inPlayEffects = new InPlayEffectSummary(data.in_play_effects);
    this.hand = new HandSummary(data.hand);
  }
}
