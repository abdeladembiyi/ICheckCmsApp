import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constants } from 'src/app/shared/constants';
const API = Constants.api + 'users/';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  addUsers(data){
    return this.http.post(`${API}`,data);
  }
  getAllUser(){
    return this.http.get(`${API}`);
  }
}