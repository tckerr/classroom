import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {Router, RouterModule} from "@angular/router";
import {AppComponent} from './app.component';
import {LoginComponent} from "./website/login/login.component";
import {LoginFormComponent} from './website/login/login-form/login-form.component';
import {AppRoutes, LoginRoute} from "./routes";
import {LobbyComponent} from './website/lobby/lobby.component';
import {LogoutComponent} from './website/navigation/logout/logout.component';
import {AuthListenerService} from "./auth/auth-listener.service";
import {AuthModule} from "./auth/auth.module";
import { NavigationComponent } from './website/navigation/navigation.component';
import { GamesListComponent } from './website/lobby/games-list/games-list.component';
import {FinalsweekApiModule} from "./finalsweek-api/finalsweek-api.module";
import { GameDetailComponent } from './website/lobby/game-detail/game-detail.component';
import { NewGameComponent } from './website/lobby/new-game/new-game.component';


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
    NewGameComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(AppRoutes),
    NgbModule.forRoot(),
    AuthModule,
    FinalsweekApiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private authListenerService: AuthListenerService, private router: Router) {
    authListenerService.listenForAuthenticationState(LoginRoute.path);
  }
}
