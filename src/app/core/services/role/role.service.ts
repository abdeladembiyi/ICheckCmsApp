import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constants } from 'src/app/shared/constants';
import { tap, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

const API = Constants.api + 'roles/';
@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private http: HttpClient) { }

  getRoles() {
    return this.http.get(`${API}`)
      .pipe(
        tap(_ => this.log('get all roles')),
        catchError(this.handleError('get all roles', []))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  private log(message: string) {
    console.log(message);
  }
}
