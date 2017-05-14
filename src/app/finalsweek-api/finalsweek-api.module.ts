import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {GamesService} from "./game/games.service";
import {ActivitiesService} from "./game/activities.service";

@NgModule({
  imports:      [
    CommonModule
  ],
  providers:    [GamesService, ActivitiesService],
  exports:      [],
  declarations: []
})
export class FinalsweekApiModule {
}
