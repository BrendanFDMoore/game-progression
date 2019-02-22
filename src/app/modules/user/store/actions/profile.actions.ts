import { Action } from '@ngrx/store';

import { Profile } from '../../models/profile.model';

export enum ProfileActionTypes {
  LoadProfileRequest = '[User Module] Load Profile',
  LoadProfileSuccess = '[User Module] Load Profile Success',
  LoadProfileError = '[User Module] Load Profile Error',
  UpdateProfileRequest = '[User Module] Update Profile',
  UpdateProfileSuccess = '[User Module] Update Profile Success',
  UpdateProfileError = '[User Module] Update Profile Error',
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

export class UpdateProfileRequest implements Action {
  readonly type = ProfileActionTypes.UpdateProfileRequest;

  constructor(public profile: Profile) { }
}

export class UpdateProfileSuccess implements Action {
  readonly type = ProfileActionTypes.UpdateProfileSuccess;

  constructor(public payload: Profile) { }
}

export class UpdateProfileError implements Action {
  readonly type = ProfileActionTypes.UpdateProfileError;

  constructor(public payload: any) { }
}

export type ProfileAction =
    LoadProfileRequest
  | LoadProfileSuccess
  | LoadProfileError
  | UpdateProfileRequest
  | UpdateProfileSuccess
  | UpdateProfileError;
