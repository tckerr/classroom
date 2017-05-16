import {Injectable} from "@angular/core";
import {Subject} from "rxjs/Subject";

@Injectable()
export class CardIdSelectionService {

   private idSelectionSource = new Subject<string>();

   public idSelected$ = this.idSelectionSource.asObservable();

   public broadcastSelection(id: string) {
      this.idSelectionSource.next(id);
   }
}
