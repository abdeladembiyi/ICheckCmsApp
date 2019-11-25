import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constants } from 'src/app/shared/constants';

@Injectable({
  providedIn: 'root'
})
export class CheckListRefService {

  constructor(private http: HttpClient) { }

  getAllCheckListRef() {
    return this.http.get(`${Constants.api}checklistrefs`);
  }

  updateCheckList(id, checklist) {
    return this.http.put(`${Constants.api}checklistrefs/${id}`, checklist);
  }

  
}
