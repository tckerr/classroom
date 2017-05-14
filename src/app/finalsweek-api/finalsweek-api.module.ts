import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {GamesService} from "./game/games.service";
import {ActivitiesService} from "./game/activities.service";
import {GameCreateModel} from "./game/models/creation-models/game-create-model";

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [GamesService, ActivitiesService],
  exports: [GameCreateModel],
  declarations: []
})
export class FinalsweekApiModule {
}
