import { Component, OnInit, OnChanges } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl } from '@angular/forms';

import { ProfileService } from '../../services/profile.service';

// interface ProfileForm {
//   firstName: string;
//   lastName: string;
//   averageHours: string;
//   avatarUrl: string;
// }

const isAlpha = s => {
  const result = /^[a-zA-Z][a-zA-Z ]+[a-zA-Z]$/.test(s);
  console.log({isAlpha: result});
  return result;
};

export function regexValidator(regex: RegExp): ValidatorFn {
  console.log('regexValidator outer');
  return (control: AbstractControl): {[key: string]: any} | null => {
    console.log('regexValidator inner', control.value);
    return regex.test(control.value) ? null : {'regexValidator': {value: control.value}};
  };
}

export function alphaValidator(control: AbstractControl): {[key: string]: any} | null {
  console.log('alphaValidator inner', control.value);
  // const alpha = isAlpha(control.value);
  return isAlpha(control.value) ? null : {'alphaValidator': {value: control.value}};
}

@Component({
  selector: 'gp-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.scss']
})
export class ProfileEditComponent implements OnInit {
  public profile: any;
  public ready = false;
  profileForm: FormGroup = new FormGroup({
    firstName: new FormControl('', [Validators.required, regexValidator(/^[a-zA-Z][a-zA-Z ]+[a-zA-Z]$/)]),
    lastName: new FormControl('', [Validators.required, alphaValidator]),
    averageHours: new FormControl('', [Validators.required, regexValidator(/^[1-9][0-9]*$/)]),
    avatarUrl: new FormControl('', Validators.required),
  });

  constructor (
    private profileService: ProfileService,
  ) { }

  cancel() {
    // confirmation dialog
    console.log(this.profileForm.controls.firstName);
    // this.fillFormFromProfile();
    // nav to profile?
  }

  fillFormFromProfile() {
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
