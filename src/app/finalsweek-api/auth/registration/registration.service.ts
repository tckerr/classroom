import {Injectable} from "@angular/core";
import {environment} from "../../../../environments/environment";
import {Http} from "@angular/http";
import {RegistrationModel} from "../models/registration-model";
import {RegistrationResult} from "../models/registration-result";

@Injectable()
export class RegistrationService {
  private registrationUrl: string;

  constructor(private http: Http) {
    this.registrationUrl = environment.finalsweekApi.endpoints.auth.registration;
  }

  public register(model: RegistrationModel): Promise<RegistrationResult> {
    return this.http
      .post(this.registrationUrl, model)
      .map(r => this.responseToRegistrationSuccess(r))
      .toPromise()
      .catch(e => this.responseToRegistrationError(e))
  }

  private responseToRegistrationError(exception) {
    console.log(exception);
    return new RegistrationResult(false, exception.json());
  }

  private responseToRegistrationSuccess(response) {
    console.log(response);
    return new RegistrationResult(true);
  }

}
