import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, mergeMap, tap, catchError } from 'rxjs/operators';
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
          tap(val => console.log('profile effect value:', val)),
          map(profile => new fromActions.LoadProfileSuccess(profile)),
          // TODO: Figure out why error types misbehave
          // catchError(() => new fromActions.LoadProfileError({ message: 'some LoadProfileError message' }))
        )
      )
    );

  constructor(
    private actions$: Actions,
    private profileService: fromServices.ProfileService
  ) {}
}
