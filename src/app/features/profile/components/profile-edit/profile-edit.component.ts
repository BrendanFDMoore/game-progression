import { Component, OnInit, OnChanges } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { ProfileService } from '../../services/profile.service';

// interface MyFormModel {
//   firstName: string;
//   lastName: string;
//   averageHours: string;
//   avatarUrl: string;
// }

@Component({
  selector: 'gp-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.scss']
})
export class ProfileEditComponent implements OnInit {
  public profile: any;
  public ready = false;
  profileForm: FormGroup = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    averageHours: new FormControl(''),
    avatarUrl: new FormControl(''),
  });

  constructor (
    private profileService: ProfileService,
  ) { }

  cancel() {
    this.fillFormFromProfile();
    // nav to profile?
  }

  fillFormFromProfile() {
    // this.profileForm.firstName.setValue(this.profile.firstName);
    // this.profileForm.lastName.setValue(this.profile.lastName);
    // this.profileForm.averageHours.setValue(this.profile.averageNumberOfHoursPerDay);
    // this.profileForm.avatarUrl.setValue(this.profile.image);
    this.profileForm.patchValue({
      firstName: this.profile.firstName,
      lastName: this.profile.lastName,
      averageHours: this.profile.averageHours,
      avatarUrl: this.profile.image,
    });
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
