import { Action } from '@ngrx/store';

import { Profile } from '../../models/profile.model';

export enum ProfileActionTypes {
  LoadProfileRequest = '[User Module] Load Profile',
  LoadProfileSuccess = '[User Module] Load Profile Success',
  LoadProfileError = '[User Module] Load Profile Error',
}

export class LoadProfileRequest implements Action {
  readonly type = ProfileActionTypes.LoadProfileRequest;

  constructor() { }
}

export class LoadProfileSuccess implements Action {
  readonly type = ProfileActionTypes.LoadProfileSuccess;

  constructor(public payload: Profile) { }
}

export class LoadProfileError implements Action {
  readonly type = ProfileActionTypes.LoadProfileError;

  constructor(public payload: any) { }
}

export type ProfileAction =
    LoadProfileRequest
  | LoadProfileSuccess
  | LoadProfileError;
