export class GameOverviewSummary {
  private id: string;
  private actorIds: string[];
  private metadata: any;

  constructor(data: any) {
    this.id = data.id;
    this.actorIds = data.actors;
    this.metadata = data.metadata;
  }
}
