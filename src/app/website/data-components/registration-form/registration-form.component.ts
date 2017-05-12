import {Component, OnInit} from "@angular/core";
import {RegistrationModel} from "../../../finalsweek-api/auth/models/registration-model";
import {RegistrationService} from "../../../finalsweek-api/auth/registration/registration.service";

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {

  private model: RegistrationModel;

  constructor(private registrationService: RegistrationService) {
    this.model = new RegistrationModel("", "", "", "");
  }

  public register() {
    return this.registrationService
      .register(this.model)
      .then(r => console.log(r))
  }

  ngOnInit() {
  }

}
