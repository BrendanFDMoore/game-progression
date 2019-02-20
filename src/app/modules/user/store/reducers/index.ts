import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import * as fromProfile from './profile.reducer';

export interface UserState {
  profile: fromProfile.ProfileState;
}

export const reducers: ActionReducerMap<UserState> = {
  profile: fromProfile.profileReducer,
};

export const getUserState = createFeatureSelector<UserState>(
  'user'
);
