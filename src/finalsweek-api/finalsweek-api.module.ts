import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GamesService} from "./game/games.service";

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [GamesService],
  declarations: []
})
export class FinalsweekApiModule { }