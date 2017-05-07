import { Injectable } from '@angular/core';
import {Credentials} from "./models/credentials";
import {LoginResult} from "./models/login-result";
import {Http} from "@angular/http";
import {environment} from "../../environments/environment";
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw'
import 'rxjs/add/observable/of';

@Injectable()
export class LoginService {

  constructor(private http: Http) {
    this.loginUrl = environment.finalsweekApi.endpoints.auth.login;
  }

  private loginUrl: string;

  public login(model: Credentials): Promise<LoginResult> {
    return this.http
      .post(this.loginUrl, model)
      .map(r => this.responseToLoginSuccess(r))
      .toPromise()
      .catch(e => this.responseToLoginError(e))
  }

  private responseToLoginError(e) {
    console.log(e);
    return new LoginResult(false, null, e._body);
  }

  private responseToLoginSuccess(response) {
    let token = response.json().key;
    return new LoginResult(response.ok, token)
  }
}
