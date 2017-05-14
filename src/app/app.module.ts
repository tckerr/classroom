import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {Router, RouterModule} from "@angular/router";
import {AppComponent} from "./app.component";
import {LoginComponent} from "./website/views/login/login.component";
import {LoginFormComponent} from "./website/data-components/login-form/login-form.component";
import {AppRoutes, LoginRoute} from "./routes";
import {LobbyComponent} from "./website/views/lobby/lobby.component";
import {LogoutComponent} from "./website/views/navigation/logout/logout.component";
import {AuthListenerService} from "./finalsweek-api/auth/auth-listener.service";
import {AuthModule} from "./finalsweek-api/auth/auth.module";
import {NavigationComponent} from "./website/views/navigation/navigation.component";
import {GamesListComponent} from "./website/data-components/games-list/games-list.component";
import {FinalsweekApiModule} from "./finalsweek-api/finalsweek-api.module";
import {NewGameComponent} from "./website/views/lobby/new-game/new-game.component";
import {NewGameFormComponent} from "./website/data-components/new-game-form/new-game-form.component";
import {GameDetailViewComponent} from "./website/views/lobby/game-detail-view/game-detail-view.component";
import {GameDetailComponent} from "./website/data-components/game-detail/game-detail.component";
import {LoadingSpinnerComponent} from "./visuals/loading-spinner/loading-spinner.component";
import {RegistrationFormComponent} from "./website/data-components/registration-form/registration-form.component";
import {GameActionsComponent} from "./website/data-components/game-actions/game-actions.component";
import { CardSelectorComponent } from './website/data-components/selectors/card-selector/card-selector.component';
import { TJsonViewerModule } from 't-json-viewer';
import { ClasstimeActionComponent } from './website/data-components/game-actions/phase-type-actions/classtime-action/classtime-action.component';
import { BaseActionComponent } from './website/data-components/game-actions/phase-type-actions/base-action/base-action.component';
import { PromptSelectorComponent } from './website/data-components/selectors/prompt-selector/prompt-selector.component';
import { DisciplineActionComponent } from './website/data-components/game-actions/phase-type-actions/discipline-action/discipline-action.component';
import { GameBoardComponent } from './website/views/lobby/game-detail-view/game-board/game-board.component';
import { ActorListComponent } from './website/views/lobby/game-detail-view/game-board/actor-list/actor-list.component';
import { SeatGridComponent } from './website/views/lobby/game-detail-view/game-board/seat-grid/seat-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginFormComponent,
    LobbyComponent,
    LogoutComponent,
    NavigationComponent,
    GamesListComponent,
    GameDetailComponent,
    GameDetailViewComponent,
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
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(AppRoutes),
    NgbModule.forRoot(),
    AuthModule,
    FinalsweekApiModule,
    TJsonViewerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private authListenerService: AuthListenerService, private router: Router) {
    authListenerService.listenForAuthenticationState(LoginRoute.path);
  }
}
