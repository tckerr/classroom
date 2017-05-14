import {Component, Input, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {Credentials} from "../../../../finalsweek-api/auth/models/credentials";
import {AuthService} from "../../../../finalsweek-api/auth/auth.service";
import {LoginResult} from "../../../../finalsweek-api/auth/models/login-result";

@Component({
  selector:    "app-login-form",
  templateUrl: "./login-form.component.html",
  styleUrls:   ["./login-form.component.css"]
})
export class LoginFormComponent implements OnInit {
  private model: Credentials;
  private submitted: boolean;
  @Input() public onSubmit: (result: LoginResult) => any;

  constructor(private authService: AuthService, private router: Router) {
    this.model = new Credentials();
    this.submitted = false;
  }

  public login() {
    this.submitted = true;
    this.authService
      .login(this.model)
      .subscribe(result => this.onSubmit(result));
  }

  ngOnInit() {
  }

}
