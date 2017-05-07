import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import {Router, RouterModule} from "@angular/router";
import {LoginComponent} from "./website/login/login.component";
import { LoginFormComponent } from './website/login/login-form/login-form.component';
import {AppRoutes, LoginRoute} from "./routes";
import { LobbyComponent } from './website/lobby/lobby.component';
import {AnonymousGuard} from "./auth/guards/anonymous.guard";
import {AuthService} from "./auth/auth.service";
import {LoginService} from "./auth/login.service";
import {IsAuthenticatedGuard} from "./auth/guards/is-authenticated.guard";
import { LogoutComponent } from './website/logout/logout.component';
import {LogoutService} from "./auth/logout.service";
import {AuthListenerService} from "./auth/auth-listener.service";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginFormComponent,
    LobbyComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [
    LoginService,
    LogoutService,
    AuthService,
    AuthListenerService,
    AnonymousGuard,
    IsAuthenticatedGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private authListenerService: AuthListenerService, private router: Router) {
    authListenerService.listenForAuthenticationState(LoginRoute.path);
  }
}
