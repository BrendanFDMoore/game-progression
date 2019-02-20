
import { createSelector } from '@ngrx/store';

// import * as fromRoot from '../../../app/store';
import * as fromFeature from '../reducers';
// import * as fromPizzas from '../reducers/pizzas.reducer';

import { Profile } from '../../models/profile.model';

export const selectProfile = createSelector(
  fromFeature.getUserState,
  (state: fromFeature.UserState) => state.profile
);

export const selectProfileLoading = createSelector(
  selectProfile,
  (profileState) => profileState.loading
);

export const selectProfileDetails = createSelector(
  selectProfile,
  (profileState) => profileState.details
);
