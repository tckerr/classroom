import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {Router, RouterModule} from "@angular/router";
import {AppComponent} from "./app.component";
import {LoginComponent} from "./website/views/login/login.component";
import {LoginFormComponent} from "./website/views/login/login-form/login-form.component";
import {AppRoutes, LoginRoute} from "./routes";
import {LobbyComponent} from "./website/views/lobby/lobby.component";
import {LogoutButtonComponent} from "./website/views/navigation/logout-button/logout-button.component";
import {AuthListenerService} from "./finalsweek-api/auth/auth-listener.service";
import {AuthModule} from "./finalsweek-api/auth/auth.module";
import {NavigationComponent} from "./website/views/navigation/navigation.component";
import {GamesListComponent} from "./website/views/lobby/games-list/games-list.component";
import {FinalsweekApiModule} from "./finalsweek-api/finalsweek-api.module";
import {NewGameComponent} from "./website/views/lobby/new-game/new-game.component";
import {NewGameFormComponent} from "./website/views/lobby/new-game/new-game-form/new-game-form.component";
import {GameDetailComponent} from "./website/views/lobby/game-detail/game-detail.component";
import {LoadingSpinnerComponent} from "./visuals/loading-spinner/loading-spinner.component";
import {RegistrationFormComponent} from "./website/views/login/registration-form/registration-form.component";
import {GameActionsComponent} from "./website/views/lobby/game-detail/game-actions/game-actions.component";
import {CardSelectorComponent} from "./website/views/lobby/game-detail/game-actions/phase-type-actions/selectors/card-selector/card-selector.component";
// tslint:disable-next-line
import {ClasstimeActionComponent} from "./website/views/lobby/game-detail/game-actions/phase-type-actions/classtime-action/classtime-action.component";
import {BaseActionComponent} from "./website/views/lobby/game-detail/game-actions/phase-type-actions/base-action/base-action.component";
import {PromptSelectorComponent} from "./website/views/lobby/game-detail/game-actions/phase-type-actions/selectors/prompt-selector/prompt-selector.component";
// tslint:disable-next-line
import {DisciplineActionComponent} from "./website/views/lobby/game-detail/game-actions/phase-type-actions/discipline-action/discipline-action.component";
import {GameBoardComponent} from "./website/views/lobby/game-detail/game-actions/game-board/game-board.component";
import {ActorListComponent} from "./website/views/lobby/game-detail/game-actions/game-board/actor-list/actor-list.component";
import {SeatGridComponent} from "./website/views/lobby/game-detail/game-actions/game-board/seat-grid/seat-grid.component";
import {TJsonViewerModule} from "t-json-viewer";
import {GameJsonComponent} from "./website/views/lobby/game-detail/game-actions/game-json/game-json.component";
import {NgbdPopoverConfig} from "./visuals/ngbd-popover-config";

@NgModule({
   declarations: [
      AppComponent,
      LoginComponent,
      LoginFormComponent,
      LobbyComponent,
      LogoutButtonComponent,
      NavigationComponent,
      GamesListComponent,
      GameJsonComponent,
      GameDetailComponent,
      NewGameComponent,
      NewGameFormComponent,
      LoadingSpinnerComponent,
      RegistrationFormComponent,
      GameActionsComponent,
      CardSelectorComponent,
      ClasstimeActionComponent,
      BaseActionComponent,
      PromptSelectorComponent,
      DisciplineActionComponent,
      GameBoardComponent,
      ActorListComponent,
      SeatGridComponent,
      NgbdPopoverConfig
   ],
   imports:      [
      TJsonViewerModule,
      BrowserModule,
      FormsModule,
      HttpModule,
      RouterModule.forRoot(AppRoutes),
      NgbModule.forRoot(),
      AuthModule,
      FinalsweekApiModule
   ],
   providers:    [NgbdPopoverConfig],
   bootstrap:    [AppComponent]
})
export class AppModule {
   constructor(private authListenerService: AuthListenerService, private router: Router) {
      authListenerService.listenForAuthenticationState(LoginRoute.path);
   }
}
