import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {Router} from "@angular/router";
import {Credentials} from "./models/credentials";
import {LoginResult} from "./models/login-result";
import {LoginService} from "app/auth/login.service";

@Injectable()
export class AuthService {

  authenticated: boolean;
  authenticated$ = new BehaviorSubject<boolean>(this.authenticated);

  constructor(private router: Router, private loginService: LoginService) {
    this.setAuthenticated(this.authenticated);
  }

  setAuthenticated(value: boolean) {
    this.authenticated$.next(value);
    this.authenticated = value;
  }

  login(credentials: Credentials): Promise<LoginResult> {
    return this.loginService.login(credentials).then(result => {
      if (result.success) {
        localStorage.setItem('token', result.token);
        this.setAuthenticated(true);
      }
      return result;
    });
  }

}
