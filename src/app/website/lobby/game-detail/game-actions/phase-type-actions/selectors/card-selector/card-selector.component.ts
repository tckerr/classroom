import {Component, Input, OnChanges, SimpleChanges} from "@angular/core";
import {CardIdSelectionService} from "../../../../../../comm-services/card-id-selection-notification.service";

@Component({
   selector:    "app-card-selector",
   templateUrl: "./card-selector.component.html",
   styleUrls:   ["./card-selector.component.css"]
})
export class CardSelectorComponent implements OnChanges {

   @Input() private cards: any[] = [];
   @Input() private selectedCardId: string;
   @Input() private disabled: boolean;
   private selectedCard: any;

   constructor(private actorIdSelectionService: CardIdSelectionService) {
   }

   public onSelect(selectedCard) {
      this.selectedCard = selectedCard;
      this.actorIdSelectionService.broadcastSelection(selectedCard.id);
   }

   ngOnChanges(changes: SimpleChanges): void {
      for (let card of this.cards) {
         if (card.id === this.selectedCardId) {
            this.selectedCard = card;
         }
      }
   }
}
