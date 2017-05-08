// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

let finalsweekBaseUrl = "http://localhost:8000";

export const environment = {
  production: false,
  resources: {
    loadingSpinners: {
      network: "https://s-media-cache-ak0.pinimg.com/originals/a4/f2/cb/a4f2cb80ff2ae2772e80bf30e9d78d4c.gif",
      standard: "https://s-media-cache-ak0.pinimg.com/originals/0c/44/da/0c44dacf1b038014a6f941131c5e8aa2.gif",
    }
  },
  defaultGameConfig: {
    playerCount: 4,
    minPlayers: 2,
    maxPlayers: 16
  },
  finalsweekApi: {
    endpoints: {
      auth: {
        login: `${finalsweekBaseUrl}/auth/login/`,
        logout: `${finalsweekBaseUrl}/auth/logout/`
      },
      game: {
        root: `${finalsweekBaseUrl}/api/games/`,
        detail: (gameId, actorId) => `${finalsweekBaseUrl}/api/games/${gameId}/?actor_id=${actorId}`,
      }
    }
  }
};
