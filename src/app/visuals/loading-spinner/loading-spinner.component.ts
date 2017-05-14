import {Component, Input, OnInit} from "@angular/core";
import {environment} from "../../../environments/environment";

@Component({
  selector:    "app-loading-spinner",
  templateUrl: "./loading-spinner.component.html",
  styleUrls:   ["./loading-spinner.component.css"]
})
export class LoadingSpinnerComponent implements OnInit {
  private imageUrl: string;
  @Input() public inline = false;
  @Input() public spinnerWidth = 50;

  constructor() {
    this.imageUrl = environment.resources.loadingSpinners.circular;
  }

  ngOnInit() {
  }

}
