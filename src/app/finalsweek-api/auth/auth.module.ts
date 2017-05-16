import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {LoginService} from "./login/login.service";
import {LogoutService} from "./logout/logout.service";
import {AuthService} from "./auth.service";
import {AuthListenerService} from "./auth-listener.service";
import {AnonymousGuard} from "./guards/anonymous.guard";
import {IsAuthenticatedGuard} from "./guards/is-authenticated.guard";
import {RegistrationService} from "./registration/registration.service";

@NgModule({
   imports:      [
      CommonModule
   ],
   providers:    [
      LoginService,
      LogoutService,
      RegistrationService,
      AuthService,
      AuthListenerService,
      AnonymousGuard,
      IsAuthenticatedGuard
   ],
   declarations: []
})
export class AuthModule {
}
