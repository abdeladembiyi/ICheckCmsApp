import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constants } from 'src/app/shared/constants';

const API= Constants.api + 'TypePermis/'
@Injectable({
  providedIn: 'root'
})
export class PermisService {

  constructor(private http:HttpClient) { }

  getPermis(){
    return this.http.get(`${API}`);
  }
}
