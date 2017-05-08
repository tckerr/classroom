import { Component, OnInit } from '@angular/core';
import {LoginService} from "../../../../finalsweek-api/auth/login/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  private onSubmit(result){
    if(result.success){
      this.router.navigate(["lobby"]);
    }
  }

  ngOnInit() {
  }

}
