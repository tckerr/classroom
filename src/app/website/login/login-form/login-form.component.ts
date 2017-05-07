import { Component, OnInit } from '@angular/core';
import {Credentials} from "../../../auth/models/credentials";
import {LoginService} from "../../../auth/login.service";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  private model: Credentials;
  private submitted: boolean;

  constructor(private loginService: LoginService) {
    this.model = new Credentials();
    this.submitted = false;
  }

  onSubmit(){
    this.submitted = true;
    this.loginService.login(this.model).then(result => {
      console.log(result)
    });
  }

  ngOnInit() {
  }

}
