import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {Http} from "@angular/http";
import {RegistrationModel} from "../models/registration-model";

@Injectable()
export class RegistrationService {
  private registrationUrl: string;

  constructor(private http: Http) {
    this.registrationUrl = environment.finalsweekApi.endpoints.auth.registration;
  }

  public register(model: RegistrationModel): Promise<boolean> {
    return this.http
      .post(this.registrationUrl, model)
      .map(r => this.responseToRegistrationSuccess(r))
      .toPromise()
      .catch(e => this.responseToRegistrationError(e))
  }

  private responseToRegistrationError(e) {
    console.log(e);
    return false;
  }

  private responseToRegistrationSuccess(response) {
    let token = response.json().key;
    return true;
  }

}
