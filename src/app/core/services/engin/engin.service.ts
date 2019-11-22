import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Engin } from 'src/app/shared/models/engin';
import { Constants } from 'src/app/shared/constants';
import { tap, catchError } from 'rxjs/operators';

const API = Constants.api + 'engins/'
@Injectable({
  providedIn: 'root'
})
export class EnginService {

  constructor(private http: HttpClient) { }

  getEngins(): Observable<Engin[]> {
    return this.http.get<Engin[]>(`${Constants.api}engins`);
  }

  getEnginsByName(nomEngin: string): Observable<Engin>{
    return this.http.get<Engin>(`${Constants.api}engins/name/${nomEngin}`);
  }
  AddEngin(data){
    return this.http.post(`${API}`,data)
    .pipe(
      tap(_ => this.log('add rule')),
      catchError(this.handleError('add rule', []))
    );
  }

  updateEngin(id, data) {
    return this.http.put(`${API}${id}`, data)
      .pipe(
        tap(_ => this.log('update engin')),
        catchError(this.handleError('update engin', []))
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
