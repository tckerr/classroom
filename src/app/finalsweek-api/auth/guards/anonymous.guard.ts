import {Injectable} from "@angular/core";
import {CanActivate, Router} from "@angular/router";
import {AuthService} from "../auth.service";

@Injectable()
export class AnonymousGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {
  }

  canActivate() {
    if (this.authService.authenticated) {
      this.router.navigate(["/lobby"]);
      return false;
    }
    return true;
  }
}
