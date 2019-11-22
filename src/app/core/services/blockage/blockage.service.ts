import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constants } from 'src/app/shared/constants';

@Injectable({
  providedIn: 'root'
})
export class BlockageService {

  constructor(private http: HttpClient) { }

  getBolckedEngins() {
    return this.http.get(`${Constants.api}blockages`);
  }
  updateBlockage(id, data) {
    return this.http.put(`${Constants.api}blockages/${id}`, data);
  }
  deblocked(id){
    return this.http.get(`${Constants.api}blockages/debloquage/${id}`);
  }
  blocked(id){
    return this.http.get(`${Constants.api}blockages/bloquage/${id}`);
  }
}
