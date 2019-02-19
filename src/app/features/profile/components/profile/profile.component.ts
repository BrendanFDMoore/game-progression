import { Component, OnInit, OnChanges } from '@angular/core';
import { ProfileService } from '../../services/profile.service';
import { Store, select, createSelector } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LoadUser } from '../../services/profile.service';

export const selectProfile = (state: any) => {
  console.log({state});
  return state.profile;
};

export const selectProfileData = createSelector(
  selectProfile,
  (state: any) => state.profile
);


@Component({
  selector: 'gp-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  public profile: any;
  public ready = false;
  profileNgrx$: Observable<any>;

  constructor (
    private profileService: ProfileService,
    private store: Store<any>
  ) {
    console.log('profile constructor');
    this.store.select(selectProfile).subscribe(p => console.log(p));
    this.profileNgrx$ = this.store.select(selectProfile);
    this.profileData$ = this.store.select(selectProfileData);
  }

  ngOnInit() {
    console.log('profile ngOnInit');
    this.store.dispatch(new LoadUser());
    this.profileService.getProfile().subscribe((json) => {
      this.profile = json;
      this.ready = true;
    });
  }
}
