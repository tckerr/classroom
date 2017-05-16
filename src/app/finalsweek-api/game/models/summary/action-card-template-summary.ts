export class ActionCardTemplateSummary {
   public id: string;
   public name: string;
   public description: string;
   public cardType: string;
   public troubleCost: number;

   constructor(data: any) {
      this.id = data.id;
      this.name = data.name;
      this.description = data.description;
      this.cardType = data.card_type;
      this.troubleCost = data.trouble_cost;
   }
}
