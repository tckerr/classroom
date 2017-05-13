import {PublicSummary} from "./public-summary";

interface JsonRepresentable{
  asJson(): any
}

export class GameSummary implements JsonRepresentable {
  public publicData: any;
  private _data: any;

  constructor(data: any) {
    this._data = data;
    this.publicData = new PublicSummary(data.public);
  }

  public asJson(){
    return this._data;
  }
}
