import {LoginComponent} from "./website/login/login.component";
import {Routes} from "@angular/router";
import {AnonymousGuard} from "./auth/guards/anonymous.guard";
import {IsAuthenticatedGuard} from "./auth/guards/is-authenticated.guard";
import {LobbyComponent} from "./website/lobby/lobby.component";
import {AppComponent} from "./app.component";


export const AppRoutes: Routes = [
  {
    path: '',
    component: AppComponent,
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full',
    canActivate: [AnonymousGuard]
  },
  {
    path: 'lobby',
    component: LobbyComponent,
    pathMatch: 'full',
    canActivate: [IsAuthenticatedGuard]
  }
];
