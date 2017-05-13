import {Component, Input, OnInit} from "@angular/core";
import {CardIdSelectionService} from "../../../comm-services/card-id-selection.service";

@Component({
  selector: "app-card-selector",
  templateUrl: "./card-selector.component.html",
  styleUrls: ["./card-selector.component.css"]
})
export class CardSelectorComponent implements OnInit {
  @Input() private cards: any[] = [];
  @Input() private selectedCardId: string;
  private selectedCard: any;

  constructor(private actorIdSelectionService: CardIdSelectionService) { }

  public onSelect(){
    this.actorIdSelectionService.broadcastSelection(this.selectedCard.id);
  }

  ngOnInit() {
    for(let card of this.cards){
      if (card.id == this.selectedCardId){
        this.selectedCard = card;
      }
    }
  }
}
