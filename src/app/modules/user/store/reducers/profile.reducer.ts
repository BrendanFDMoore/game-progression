
import { ProfileAction, ProfileActionTypes } from '../actions';

import { Profile } from '../../models/profile.model';

export interface ProfileState {
  details: Profile;
  loading: boolean;
  error: any;
}

export const initialState = {
  details: null,
  loading: false,
  error: null,
};

export const profileReducer = (state: ProfileState = initialState, action: ProfileAction) => {
  // console.log('profileReducer');
  // console.log({action});
  switch (action.type) {
    case ProfileActionTypes.LoadProfileRequest:
      console.log('case ProfileActionTypes.LoadProfileRequest');
      return {
        ...state,
        loading: true,
      };

    case ProfileActionTypes.LoadProfileSuccess:
      console.log('case ProfileActionTypes.LoadProfileSuccess');
      return {
        ...state,
        loading: false,
        details: action.payload,
      };

    case ProfileActionTypes.LoadProfileError:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
