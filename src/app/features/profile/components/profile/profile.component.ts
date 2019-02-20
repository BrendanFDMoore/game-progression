import { Component, OnInit, OnChanges } from '@angular/core';
// import { ProfileService } from '../../services/profile.service';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
// import { LoadProfileRequest, selectProfileDetails, selectProfileLoading, UserState } from 'src/app/modules/user/store';
import { Profile } from 'src/app/modules/user/models/profile.model';

import * as fromUserStore from 'src/app/modules/user/store';

// export const selectProfile = (state: any) => {
//   console.log({state});
//   return state.profile;
// };

// export const selectProfileData = createSelector(
//   selectProfile,
//   (state: any) => state.profile
// );


@Component({
  selector: 'gp-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profile$: Observable<Profile>;
  loading$: Observable<boolean>;

  constructor (
    private store: Store<fromUserStore.UserState>
  ) {
    console.log('profile constructor');
    // this.store.select(selectProfile).subscribe(p => console.log(p));
    this.loading$ = this.store.select(fromUserStore.selectProfileLoading);
    this.profile$ = this.store.select(fromUserStore.selectProfileDetails);
  }

  ngOnInit() {
    console.log('profile ngOnInit');
    this.store.dispatch(new fromUserStore.LoadProfileRequest());
  }
}
