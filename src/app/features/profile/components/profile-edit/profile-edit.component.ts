import { Component, OnInit, OnChanges } from '@angular/core';
import { FormControl } from '@angular/forms';

import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'gp-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.scss']
})
export class ProfileEditComponent implements OnInit {
  public profile: any;
  public ready = false;

  firstNameControl = new FormControl('');
  lastNameControl = new FormControl('');
  hoursControl = new FormControl('');
  avatarUrlControl = new FormControl('');

  constructor (
    private profileService: ProfileService,
  ) { }

  cancel() {
    this.fillFormFromProfile();
    // nav to profile?
  }

  fillFormFromProfile() {
    this.firstNameControl.setValue(this.profile.firstName);
    this.lastNameControl.setValue(this.profile.lastName);
    this.hoursControl.setValue(this.profile.averageNumberOfHoursPerDay);
    this.avatarUrlControl.setValue(this.profile.image);
  }

  ngOnInit() {
    console.log('profile ngOnInit');
    this.profileService.getProfile().subscribe((json) => {
      this.profile = json;
      this.ready = true;
      this.fillFormFromProfile();
    });
  }
}
