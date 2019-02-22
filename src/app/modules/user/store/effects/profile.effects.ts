import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, mergeMap, tap, catchError, switchMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

// import * as fromRoot from '../../../app/store';
import * as fromActions from '../actions/profile.actions';
import * as fromServices from '../../services';

@Injectable()
export class ProfileEffects {
  @Effect()
  loadProfile$ = this.actions$
    .pipe(
      ofType(fromActions.ProfileActionTypes.LoadProfileRequest),
      mergeMap(() => this.profileService.getProfile()
        .pipe(
          tap(val => console.log('profile load effect value:', val)),
          map(profile => new fromActions.LoadProfileSuccess(profile)),
          // TODO: Figure out why error types misbehave
          // catchError(() => new fromActions.LoadProfileError({ message: 'some LoadProfileError message' }))
        )
      )
    );

  @Effect()
  updateProfile$ = this.actions$
    .pipe(
      ofType(fromActions.ProfileActionTypes.UpdateProfileRequest),
      tap(val => console.log('profile update effect value 1:', val)),
      map((action: fromActions.UpdateProfileRequest) => action.profile),
      switchMap(profile => {
        return this.profileService
          .updateProfile(profile)
          .pipe(
            tap(val => console.log('profile update effect value 2:', val)),
            map(prf => new fromActions.UpdateProfileSuccess(prf)),
            // catchError(() => new fromActions.UpdateProfileError({ message: 'some UpdateProfileError message' }))
          );
      }),
      // catchError(() => new fromActions.UpdateProfileError({ message: 'some UpdateProfileError message' }))
    );

  // TODO: NAVIGATE AFTER UPDATE SUCCESS
  // @Effect()
  // updateProfileSuccess$ = this.actions$
  //   .ofType(fromActions.UpdateProfileSuccess)
  //   .pipe(
  //     map((action: fromActions.UpdateProfileSuccess) => action.payload),
  //     map(p => {
  //       return new fromRoot.Go({
  //         path: ['/my-profile'],
  //       });
  //     })
  //   );

  constructor(
    private actions$: Actions,
    private profileService: fromServices.ProfileService
  ) {}
}
