import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constants } from 'src/app/shared/constants';
import { tap, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

const API = Constants.api + 'conducteurs/';
@Injectable({
  providedIn: 'root'
})
export class ConducteurService {

  constructor(private http: HttpClient) { }
  
  getAllConducteur() {
    return this.http.get<any>(`${API}`);
  }

  AddConducteur(data) {
    return this.http.post(`${API}postev`, data);
  }
  updateConducteur(id, data) {
    return this.http.put(`${API}${id}`, data)
      .pipe(
        tap(_ => this.log('update conducteur')),
        catchError(this.handleError('update conducteur', []))
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
