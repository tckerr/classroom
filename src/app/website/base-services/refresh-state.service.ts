import { Injectable } from "@angular/core";

@Injectable()
export class RefreshStateService {

   private _refreshing = false;

   public beginRefresh() {
      this._refreshing = true;
   }

   public onRefresh() {
      this._refreshing = false;
   }

   public get isRefreshing() {
      return this._refreshing;
   }

}
