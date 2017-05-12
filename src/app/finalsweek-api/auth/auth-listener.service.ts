import {Injectable} from "@angular/core";
import {AuthService} from "./auth.service";
import {Router} from "@angular/router";

@Injectable()
export class AuthListenerService {

  constructor(private authService: AuthService, private router: Router) {}

  listenForAuthenticationState(logoutRedirect: string) {
    this.authService.authenticated$.subscribe(isAuthenticated => {
      if (isAuthenticated == false) {
        this.router.navigate([logoutRedirect]);
      }
    })
  }

}
