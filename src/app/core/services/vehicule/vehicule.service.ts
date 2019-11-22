import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constants } from 'src/app/shared/constants';
import { Vehicule } from 'src/app/shared/models/vehicule';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehiculeService {

  constructor(private http: HttpClient) { }

  getAllVehicules(engin): Observable<Vehicule[]> {
    return this.http.get<Vehicule[]>(`${Constants.api}vehicules/${engin}`);
  }
}
