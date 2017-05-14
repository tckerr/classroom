import {LoginComponent} from "./website/views/login/login.component";
import {Routes} from "@angular/router";
import {AnonymousGuard} from "./finalsweek-api/auth/guards/anonymous.guard";
import {IsAuthenticatedGuard} from "./finalsweek-api/auth/guards/is-authenticated.guard";
import {LobbyComponent} from "./website/views/lobby/lobby.component";
import {GamesListComponent} from "./website/views/lobby/games-list/games-list.component";
import {NewGameComponent} from "./website/views/lobby/new-game/new-game.component";
import {GameDetailComponent} from "./website/views/lobby/game-detail/game-detail.component";

export const LoginRoute = {
  path:        "login",
  component:   LoginComponent,
  pathMatch:   "full",
  canActivate: [AnonymousGuard]
};

export const LobbyRoute = {
  path:        "lobby",
  component:   LobbyComponent,
  canActivate: [IsAuthenticatedGuard],
  children:    [
    {
      path:       "",
      pathMatch:  "full",
      redirectTo: "games"
    },
    {
      path:     "games",
      children: [
        {
          path:      "",
          component: GamesListComponent
        },
        {
          path:      "new",
          pathMatch: "full",
          component: NewGameComponent
        },
        {
          path:      ":gameId/:actorId",
          pathMatch: "full",
          component: GameDetailComponent
        }
      ]
    }

  ]
};

export const DefaultRoute = {
  path:       "",
  redirectTo: LobbyRoute.path,
  pathMatch:  "full"
};

export const AppRoutes: Routes = [
  DefaultRoute,
  LoginRoute,
  LobbyRoute
];
