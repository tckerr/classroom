import {InPlayEffectSummary} from "./in-play-effect-summary";
import {HandSummary} from "./hand-summary";
import {StatsSummary} from "./stats-summary";
import {SeatSummary} from "./seat-summary";

export class ActorSummary {
  public hand: HandSummary;
  public id: string;
  public label: string;
  public name: string;
  public inPlayEffects: InPlayEffectSummary;
  public stats: StatsSummary;
  public seat: SeatSummary;

  constructor(private data: any) {
    this.id = data.id;
    this.label = data.label;
    this.name = data.name;
    this.inPlayEffects = new InPlayEffectSummary(data.in_play_effects);
    this.hand = new HandSummary(data.hand);
    this.stats = new StatsSummary(data.stats);
    this.seat = new SeatSummary(data.seat);
  }
}
