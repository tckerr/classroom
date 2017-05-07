import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./website/login/login.component";
import { LoginFormComponent } from './website/login/login-form/login-form.component';
import {AppRoutes} from "./routes";
import { LobbyComponent } from './website/lobby/lobby.component';
import {AnonymousGuard} from "./auth/guards/anonymous.guard";
import {AuthService} from "./auth/auth.service";
import {LoginService} from "./auth/login.service";
import {IsAuthenticatedGuard} from "./auth/guards/is-authenticated.guard";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginFormComponent,
    LobbyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [
    AnonymousGuard,
    IsAuthenticatedGuard,
    AuthService,
    LoginService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
