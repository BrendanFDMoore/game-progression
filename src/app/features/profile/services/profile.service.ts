import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Action } from '@ngrx/store';

import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class ProfileService {

  private profileUrl = 'http://localhost:3000/profile';  // URL to web api

  constructor(
    private http: HttpClient,
  ) { }

  /** GET profile JSON data from the server */
  getProfile (): Observable<any> {
    console.log('start getProfile');
    return this.http.get<any>(this.profileUrl)
      .pipe(
        tap(_ => console.log('fetched profile')),
        // catchError(console.error('error in getProfile', []))
      );
  }
}

export enum ActionTypes {
  LoadUser = '[Profile Service] Load User',
  LoadUserSuccess = '[Profile Service] Load User Success',
  LoadUserError = '[Profile Service] Load User Error',
}

export class LoadUser implements Action {
  readonly type = ActionTypes.LoadUser;

  constructor() { }
}



export class LoadUserSuccess implements Action {
  readonly type = ActionTypes.LoadUserSuccess;

  constructor(public payload: any) { }
}

export class LoadUserError implements Action {
  readonly type = ActionTypes.LoadUserError;

  constructor(public payload: any) { }
}

export type ActionsUnion = LoadUser|LoadUserSuccess|LoadUserError;

export const initialProfileState = {
  loading: false,
  // ready: false,
  profile: null,
  error: null,
};

export const profileReducer = (state = initialProfileState, action: ActionsUnion) => {
  console.log('profileReducer');
  console.log({action});
  switch (action.type) {
    case ActionTypes.LoadUser:
      console.log('case ActionTypes.LoadUser');
      return {
        ...state,
        loading: true,
      };

    case ActionTypes.LoadUserSuccess:
      console.log('case ActionTypes.LoadUserSuccess');
      return {
        ...state,
        loading: false,
        // ready: true,
        profile: action.payload,
      };

    case ActionTypes.LoadUserError:
      return {
        ...state,
        loading: false,
        // ready: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

// import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { mergeMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';
@Injectable()
export class ProfileEffects {

  @Effect()
  loadProfile$ = this.actions$
    .pipe(
      ofType(ActionTypes.LoadUser),
      // I don't think mergemap is right...
      mergeMap(() => this.profileService.getProfile()
        .pipe(
          tap(val => console.log('profile effect value:', val)),
          map(profile => new LoadUserSuccess(profile)),
          // catchError(() => EMPTY)
          catchError(() => of({ type: ActionTypes.LoadUserError, payload: { message: 'error' } }))
        )
      )
    );

  constructor(
    private actions$: Actions,
    private profileService: ProfileService
  ) {}
}
