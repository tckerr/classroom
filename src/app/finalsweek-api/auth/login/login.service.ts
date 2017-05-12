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
export class LoginMockService {
  public login(model: Credentials): Promise<LoginResult> {
    const loginResult = new LoginResult(true, "mock_token");
    return Observable
      .from<LoginResult>([loginResult])
      .toPromise();
  }
}

@Injectable()
export class LoginService {

  private loginUrl: string;

  constructor(private http: Http) {
    this.loginUrl = environment.finalsweekApi.endpoints.auth.login;
  }

  public login(model: Credentials): Observable<LoginResult> {
    const loginStream = this.http.post(this.loginUrl, model);
    const exceptionStream = loginStream
      .catch(e => loginStream)
      .map(e => this.responseToLoginError(e));
    const resultStream = loginStream.map(r => this.responseToLoginSuccess(r));

    return Observable.concat(exceptionStream, resultStream);
  }

  private responseToLoginError(e) {
    console.log(e);
    return new LoginResult(false, null, e._body);
  }

  private responseToLoginSuccess(response) {
    const token = response.json().key;
    return new LoginResult(response.ok, token);
  }
}
