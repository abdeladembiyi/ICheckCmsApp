import { Injectable } from '@angular/core';
import { Constants } from 'src/app/shared/constants';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { CheckList } from 'src/app/shared/models/checkList';

const API = Constants.api + 'checkList';

@Injectable({
  providedIn: 'root'
})
export class CheckListService {

  constructor(private http: HttpClient) { }

  getAllCheckList() {
    return this.http.get(`${API}`)
      .pipe(
        tap(_ => this.log('Get All CheckList')),
        catchError(this.handleError('Get All CheckList', []))
      );
  }

  getCheckListByID(id): Observable<CheckList[]> {
    return this.http.get<CheckList[]>(`${API}/${id}`)
      .pipe(
        tap(_ => this.log('Get CheckList By ID')),
        catchError(this.handleError('Get CheckList By ID', []))
      );
  }

  addCheckList(data) {
    return this.http.post(`${API}`, data)
      .pipe(
        tap(_ => this.log('Add CheckList')),
        // catchError(this.handleError('Add CheckList', []))
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
