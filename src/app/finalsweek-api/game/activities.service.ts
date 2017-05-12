import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Observable} from "rxjs/Rx";

@Injectable()
export class ActivitiesService {

  constructor(private http: Http) {
  }

  public takeAction(actorId: string, action: object) {
    var array = [1, 2, 3];
    var source = Observable.from(array);
    return source;
  }

}
