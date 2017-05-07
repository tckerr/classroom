import {LoginComponent} from "./website/login/login.component";
import {Routes} from "@angular/router";
import {AnonymousGuard} from "./auth/guards/anonymous.guard";
import {IsAuthenticatedGuard} from "./auth/guards/is-authenticated.guard";
import {LobbyComponent} from "./website/lobby/lobby.component";


export const LoginRoute = {
  path: 'login',
  component: LoginComponent,
  pathMatch: 'full',
  canActivate: [AnonymousGuard]
};

export const LobbyRoute = {
  path: 'lobby',
  component: LobbyComponent,
  pathMatch: 'full',
  canActivate: [IsAuthenticatedGuard]
};

export const DefaultRoute = {
  path: '',
  redirectTo: LobbyRoute.path,
  pathMatch: 'full'
};

export const AppRoutes: Routes = [
  DefaultRoute,
  LoginRoute,
  LobbyRoute
];
