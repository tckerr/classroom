import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {Router, RouterModule} from "@angular/router";
import {AppComponent} from "./app.component";
import {LoginComponent} from "./website/login/login.component";
import {LoginFormComponent} from "./website/login/login-form/login-form.component";
import {AppRoutes, LoginRoute} from "./routes";
import {LobbyComponent} from "./website/lobby/lobby.component";
import {LogoutButtonComponent} from "./website/navigation/logout-button/logout-button.component";
import {AuthListenerService} from "./finalsweek-api/auth/auth-listener.service";
import {AuthModule} from "./finalsweek-api/auth/auth.module";
import {NavigationComponent} from "./website/navigation/navigation.component";
import {GamesListComponent} from "./website/lobby/games-list/games-list.component";
import {FinalsweekApiModule} from "./finalsweek-api/finalsweek-api.module";
import {NewGameComponent} from "./website/lobby/new-game/new-game.component";
import {NewGameFormComponent} from "./website/lobby/new-game/new-game-form/new-game-form.component";
import {GameDetailComponent} from "./website/lobby/game-detail/game-detail.component";
import {LoadingSpinnerComponent} from "./visuals/loading-spinner/loading-spinner.component";
import {RegistrationFormComponent} from "./website/login/registration-form/registration-form.component";
import {GameActionsComponent} from "./website/lobby/game-detail/game-actions/game-actions.component";
import {CardSelectorComponent} from "./website/lobby/game-detail/game-actions/phase-type-actions/selectors/card-selector/card-selector.component";
import {ClasstimeActionComponent} from "./website/lobby/game-detail/game-actions/phase-type-actions/classtime-action/classtime-action.component";
import {BaseActionComponent} from "./website/lobby/game-detail/game-actions/phase-type-actions/base-action/base-action.component";
import {PromptSelectorComponent} from "./website/lobby/game-detail/game-actions/phase-type-actions/selectors/prompt-selector/prompt-selector.component";
import {DisciplineActionComponent} from "./website/lobby/game-detail/game-actions/phase-type-actions/discipline-action/discipline-action.component";
import {GameBoardComponent} from "./website/lobby/game-detail/game-actions/game-board/game-board.component";
import {ActorListComponent} from "./website/lobby/game-detail/game-actions/game-board/actor-list/actor-list.component";
import {SeatGridComponent} from "./website/lobby/game-detail/game-actions/game-board/seat-grid/seat-grid.component";
import {TJsonViewerModule} from "t-json-viewer";
import {GameJsonComponent} from "./website/lobby/game-detail/game-actions/game-json/game-json.component";
import {RefreshStateService} from "./website/base-services/refresh-state.service";

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
      SeatGridComponent
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
   providers:    [RefreshStateService],
   bootstrap:    [AppComponent]
})
export class AppModule {
   constructor(private authListenerService: AuthListenerService, private router: Router) {
      authListenerService.listenForAuthenticationState(LoginRoute.path);
   }
}
