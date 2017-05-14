import {Component, Input, OnInit} from "@angular/core";
import {ActorSummary} from "../../../../../../finalsweek-api/game/models/summary/actor-summary";

@Component({
  selector:    "app-actor-list",
  templateUrl: "./actor-list.component.html",
  styleUrls:   ["./actor-list.component.css"]
})
export class ActorListComponent implements OnInit {

  @Input() actors: ActorSummary[] = [];
  @Input() currentTurnActor: ActorSummary = null;

  constructor() {
  }

  ngOnInit() {
  }

}
