import { Injectable } from '@angular/core';
import {environment} from "../../../../environments/environment";
import {Http} from "@angular/http";

@Injectable()
export class LogoutService {
  private url: string;

  constructor(private http: Http) {
    this.url = environment.finalsweekApi.endpoints.auth.logout;
  }

  logout(): Promise<boolean> {
    return this.http
      .post(this.url, {})
      .map(r => r.ok)
      .toPromise();
  }
}
