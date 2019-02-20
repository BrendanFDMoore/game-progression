import { Component, OnInit, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Profile } from 'src/app/modules/user/models/profile.model';
import * as fromUserStore from 'src/app/modules/user/store';
import { currentId } from 'async_hooks';

// import { ProfileService } from '../../services/profile.service';

// interface ProfileForm {
//   firstName: string;
//   lastName: string;
//   averageHours: string;
//   avatarUrl: string;
// }

const isAlpha = s => {
  const result = /^[a-zA-Z][a-zA-Z ]+[a-zA-Z]$/.test(s);
  // console.log({isAlpha: result});
  return result;
};

export function regexValidator(regex: RegExp): ValidatorFn {
  // console.log('regexValidator outer');
  return (control: AbstractControl): {[key: string]: any} | null => {
    // console.log('regexValidator inner', control.value);
    return regex.test(control.value) ? null : {'regexValidator': {value: control.value}};
  };
}

export function alphaValidator(control: AbstractControl): {[key: string]: any} | null {
  // console.log('alphaValidator inner', control.value);
  // const alpha = isAlpha(control.value);
  return isAlpha(control.value) ? null : {'alphaValidator': {value: control.value}};
}

export interface AllValidationErrors {
  control_name: string;
  error_name: string;
  error_value: any;
}

export interface FormGroupControls {
  [key: string]: AbstractControl;
}

export function getFormValidationErrors(controls: FormGroupControls): AllValidationErrors[] {
  let errors: AllValidationErrors[] = [];
  Object.keys(controls).forEach(key => {
    const control = controls[ key ];
    if (control instanceof FormGroup) {
      errors = errors.concat(getFormValidationErrors(control.controls));
    }
    const controlErrors: ValidationErrors = controls[ key ].errors;
    if (controlErrors !== null) {
      Object.keys(controlErrors).forEach(keyError => {
        errors.push({
          control_name: key,
          error_name: keyError,
          error_value: controlErrors[ keyError ]
        });
      });
    }
  });
  return errors;
}

@Component({
  selector: 'gp-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.scss']
})
export class ProfileEditComponent implements OnInit {
  profile$: Observable<Profile>;
  loading$: Observable<boolean>;
  currentProfile: Profile;

  firstName = new FormControl('', [Validators.required, regexValidator(/^[a-zA-Z][a-zA-Z ]+[a-zA-Z]$/)]);
  lastName = new FormControl('', [Validators.required, alphaValidator]);
  averageHours = new FormControl('', [Validators.required, regexValidator(/^[1-9][0-9]*$/)]);
  avatarUrl = new FormControl('', Validators.required);
  profileForm: FormGroup = new FormGroup({
    firstName: this.firstName,
    lastName: this.lastName,
    averageHours: this.averageHours,
    avatarUrl: this.avatarUrl,
  });

  constructor (
    private router: Router,
    private store: Store<fromUserStore.UserState>
  ) {
    this.loading$ = this.store.select(fromUserStore.selectProfileLoading);
    this.profile$ = this.store.select(fromUserStore.selectProfileDetails);
    if (!this.currentProfile) {
      this.store.select(fromUserStore.selectProfileDetails).subscribe(p => {
        console.log({profileDetails: p});
        this.currentProfile = p;
        this.fillFormFromProfile();
      });
    }

  }

  navigateToProfile() {
    this.router.navigate(['/my-profile']);
  }

  cancel() {
    // confirmation dialog
    if (this.profileForm.dirty) {
      if (confirm('Are you sure you want to reset your changes?')) {
        this.fillFormFromProfile();
        this.navigateToProfile();
      }
    } else {
      this.navigateToProfile();
    }
  }

  save() {
    const formIsValid = this.profileFormIsValid();
    if (formIsValid) {
      console.log('ok saving!');
      this.navigateToProfile();
    } else {
      console.log('form not valid!');
    }
  }

  fillFormFromProfile() {
    console.log('fillFormFromProfile ... currently disabled!', {cp: this.currentProfile});
    // TODO: FIGURE OUT BETTER WAY WITH OBSERVABLE PROFILE
    if (this.currentProfile) {
      this.profileForm.patchValue({
        firstName: this.currentProfile.firstName,
        lastName: this.currentProfile.lastName,
        averageHours: this.currentProfile.averageNumberOfHoursPerDay,
        avatarUrl: this.currentProfile.image,
      });
    }
  }

  profileFormIsValid() {
    const formErrors = getFormValidationErrors(this.profileForm.controls);
    return formErrors.length === 0;
  }

  ngOnInit() {
    console.log('profile ngOnInit');
    this.store.dispatch(new fromUserStore.LoadProfileRequest());
  }
}
