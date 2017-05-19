import {Component, Input, Output, EventEmitter} from "@angular/core";

@Component({
   selector:    "app-card-selector",
   templateUrl: "./card-selector.component.html",
   styleUrls:   ["./card-selector.component.css"]
})
export class CardSelectorComponent {

   @Input() protected cards: any[] = [];
   @Input() protected selectedCardId: string;
   @Input() protected disabled: boolean;
   @Output() private cardSelected = new EventEmitter<string>();

   constructor() {}

   public onSelect(selectedCard) {
      this.cardSelected.emit(selectedCard.id);
   }
}
