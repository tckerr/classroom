import { Injectable } from '@angular/core';
import {ActionType} from "../models/definitions";

@Injectable()
export class PhaseActionTypeResolverService {

  constructor() { }

  public resolve(phaseType: string) {
    switch (phaseType) {
      case "Class Time":
        return ActionType.ActionCard;
      case "Dismissal":
        return ActionType.Discipline;
      default:
        return ActionType.Base
    }
  }

}
