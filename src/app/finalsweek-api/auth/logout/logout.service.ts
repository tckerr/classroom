import {Injectable} from "@angular/core";
import {environment} from "../../../../environments/environment";
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class LogoutService {
   private url: string;

   constructor(private http: Http) {
      this.url = environment.finalsweekApi.endpoints.auth.logout;
   }

   logout(): Observable<boolean> {
      return this.http
         .post(this.url, {})
         .map(r => r.ok);
   }
}
