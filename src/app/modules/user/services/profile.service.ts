import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Action } from '@ngrx/store';

import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Profile } from '../models/profile.model';

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
  getProfile (): Observable<Profile> {
    console.log('start getProfile');
    return this.http
      .get<Profile>(this.profileUrl)
      .pipe(
        tap(_ => console.log('fetched profile')),
        catchError((error: any) => Observable.throw(error.json()))
      );
  }
}
