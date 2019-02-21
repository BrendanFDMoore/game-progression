import { Component, OnInit, OnChanges } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Profile } from 'src/app/modules/user/models/profile.model';
import * as fromUserStore from 'src/app/modules/user/store';

@Component({
  selector: 'gp-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss']
})
export class ProfileCardComponent implements OnInit {
  profile$: Observable<Profile>;
  loading$: Observable<boolean>;

  constructor (
    private store: Store<fromUserStore.UserState>
  ) {
    this.loading$ = this.store.select(fromUserStore.selectProfileLoading);
    this.profile$ = this.store.select(fromUserStore.selectProfileDetails);
  }

  ngOnInit() {
    console.log('profile ngOnInit');
    this.store.dispatch(new fromUserStore.LoadProfileRequest());
  }
}
