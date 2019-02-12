import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
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
