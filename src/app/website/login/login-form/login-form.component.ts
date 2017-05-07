import { Component, OnInit } from '@angular/core';
import {Credentials} from "../../../auth/models/credentials";
import {Router} from "@angular/router";
import {AuthService} from "../../../auth/auth.service";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  private model: Credentials;
  private submitted: boolean;

  constructor(private authService: AuthService, private router: Router) {
    this.model = new Credentials();
    this.submitted = false;
  }

  onSubmit(){
    this.submitted = true;
    this.authService.login(this.model).then(result => {
      if(result.success){
        this.router.navigate(["lobby"]);
      }
    });
  }

  ngOnInit() {
  }

}
