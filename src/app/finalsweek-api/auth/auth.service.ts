import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {Router} from "@angular/router";
import {Credentials} from "./models/credentials";
import {LoginResult} from "./models/login-result";
import {LogoutService} from "./logout/logout.service";
import {LoginService} from "./login/login.service";

@Injectable()
export class AuthService {

  private token_storage_key: string = 'token';
  authenticated: boolean;
  authenticated$ = new BehaviorSubject<boolean>(this.authenticated);

  constructor(private router: Router,
              private loginService: LoginService,
              private logoutService: LogoutService) {
    if (this.token)
      this.setAuthenticated(true);
  }

  private setAuthenticated(value: boolean) {
    this.authenticated$.next(value);
    this.authenticated = value;
  }

  private setToken(token: string) {
    localStorage.setItem('token', token);
    this.setAuthenticated(true);
  }

  private clearToken() {
    localStorage.removeItem(this.token_storage_key);
    console.log("Token cleared", this.token);
    this.setAuthenticated(false);
  }

  login(credentials: Credentials): Promise<LoginResult> {
    return this.loginService.login(credentials).then(result => {
      if (result.success)
        this.setToken(result.token);
      return result;
    });
  }

  logout() {
    return this.logoutService.logout().then(result => {
      if(result)
        this.clearToken();
      else
        alert("Logout failed.")
    });
  }

  get token() {
    return localStorage.getItem('token');
  }
}
