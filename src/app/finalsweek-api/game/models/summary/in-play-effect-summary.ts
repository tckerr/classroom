export class InPlayEffectSummary {
   public cardsInPlay: any;

   constructor(private data: any) {
      this.cardsInPlay = data.cards_in_play;
   }

}
