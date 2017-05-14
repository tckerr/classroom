import {Injectable} from "@angular/core";
import {Credentials} from "../models/credentials";
import {LoginResult} from "../models/login-result";
import {Http} from "@angular/http";
import {environment} from "../../../../environments/environment";
import "rxjs/add/operator/toPromise";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/throw";
import "rxjs/add/observable/of";

import {Observable} from "rxjs/Rx";

@Injectable()
export class LoginService {

  private loginUrl: string;

  constructor(private http: Http) {
    this.loginUrl = environment.finalsweekApi.endpoints.auth.login;
  }

  public login(model: Credentials): Observable<LoginResult> {
    return this.http
      .post(this.loginUrl, model)
      .map(r => this.responseToLoginSuccess(r))
      .catch(e => Observable.from([this.responseToLoginError(e)]));
  }

  private responseToLoginError(e) {
    let adaptedResult = new LoginResult(false, null, e._body);
    console.log("Login exception:", e, "returning", adaptedResult);
    return adaptedResult;
  }

  private responseToLoginSuccess(response) {
    const token = response.json().key;
    return new LoginResult(response.ok, token);
  }
}
