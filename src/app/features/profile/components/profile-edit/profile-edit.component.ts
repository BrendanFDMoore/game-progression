import { Component, OnInit, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

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
  public profile: any;
  public ready = false;
  profileForm: FormGroup = new FormGroup({
    firstName: new FormControl('', [Validators.required, regexValidator(/^[a-zA-Z][a-zA-Z ]+[a-zA-Z]$/)]),
    lastName: new FormControl('', [Validators.required, alphaValidator]),
    averageHours: new FormControl('', [Validators.required, regexValidator(/^[1-9][0-9]*$/)]),
    avatarUrl: new FormControl('', Validators.required),
  // }, getFormValidationErrors);
  });

  constructor (
    private router: Router,
    private profileService: ProfileService,
  ) { }

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
    this.profileForm.patchValue({
      firstName: this.profile.firstName,
      lastName: this.profile.lastName,
      averageHours: this.profile.averageNumberOfHoursPerDay,
      avatarUrl: this.profile.image,
    });
  }

  profileFormIsValid() {
    const formErrors = getFormValidationErrors(this.profileForm.controls);
    return formErrors.length === 0;
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
