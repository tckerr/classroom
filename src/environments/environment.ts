// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

const host = "http://localhost:8000";
const apiBaseUrl = `${host}/api`;

export const environment = {
   production:        false,
   resources:         {
      loadingSpinners: {
         network:  "/assets/img/spinners/network.gif",
         standard: "/assets/img/spinners/standard.gif",
         circular: "/assets/img/spinners/circular.gif"
      }
   },
   defaultGameConfig: {
      playerCount: 4,
      minPlayers:  2,
      maxPlayers:  16,
      seed:        "608uc3undzz158sl9zq25nzf1pmnl84eweyk"
   },
   finalsweekApi:     {
      host: host,
      apiBaseUrl: apiBaseUrl,
      endpoints: {
         auth:       {
            login:        `${apiBaseUrl}/auth/login/`,
            logout:       `${apiBaseUrl}/auth/logout/`,
            registration: `${apiBaseUrl}/auth/registration/`
         },
         game:       {
            root:   `${apiBaseUrl}/games/`,
            detail: (gameId, actorId, fresh) => `${apiBaseUrl}/games/${gameId}/?actor_id=${actorId}&fresh=${fresh}`
         },
         activities: {
            root: `${apiBaseUrl}/activities/`
         }
      }
   }
};
