import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constants } from 'src/app/shared/constants';
import { tap, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

const API = Constants.api + 'auth/';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  login(data) {
    return this.http.post<any>(`${API}`, data)
      .pipe(
        tap(_ => this.log('login')),
        catchError(this.handleError('login', []))
      );
  }

  // register(data: any): Observable<any> {
  //   return this.http.post<any>(`${API}register`, data)
  //     .pipe(
  //       tap(_ => this.log('register')),
  //       catchError(this.handleError('register', []))
  //     );
  // }

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
