import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private enginDataSource = new BehaviorSubject<any[]>([]);
  currentEnginDataSource = this.enginDataSource.asObservable();

  private conducteurDataSource = new BehaviorSubject<any[]>([]);
  currentConducteurDataSource = this.conducteurDataSource.asObservable();
  private userDataSource = new BehaviorSubject<any[]>([]);
  currentUserDataSource = this.userDataSource.asObservable();

  private blockageDataSource = new BehaviorSubject<any[]>([]);
  currentBlockageDataSource = this.blockageDataSource.asObservable();

  private conducteurCheckList = new BehaviorSubject<any[]>([]);
  currentConducteurCheckList = this.conducteurCheckList.asObservable();

  private enginCheckList = new BehaviorSubject<any[]>([]);
  currentEnginCheckList = this.enginCheckList.asObservable();

  private equipementCheckList = new BehaviorSubject<any[]>([]);
  currentEquipementCheckList = this.equipementCheckList.asObservable();

  private ratingCheckList = new BehaviorSubject<number>(0);
  currentRatingCheckList = this.ratingCheckList.asObservable();

  private conducteurRating = new BehaviorSubject<number>(0);
  currentConducteurRating = this.conducteurRating.asObservable();

  private equipementRating = new BehaviorSubject<number>(0);
  currentEquipementRating = this.equipementRating.asObservable();

  private enginRating = new BehaviorSubject<number>(0);
  currentEnginRating = this.enginRating.asObservable();

  private vehiculeRating = new BehaviorSubject<number>(0);
  currentVehiculeRating = this.vehiculeRating.asObservable();

  private vehiculeID = new BehaviorSubject<number>(0);
  currentVehiculeID = this.vehiculeID.asObservable();

  private dateBlockage = new BehaviorSubject<Date>(new Date);
  currentDateBlockage = this.dateBlockage.asObservable();

  private blockageID = new BehaviorSubject<number>(0);
  currentBlockageID = this.blockageID.asObservable();

  private checkListID = new BehaviorSubject<string>('');
  currentCheckListID = this.checkListID.asObservable();
  constructor() { }

  changeEnginDataSource(data) {
    // console.log('Engin Data Service: ', data);
    this.enginDataSource.next([...data]);
  }
  
  changeConducteurDataSource(data) {
    // console.log('conducteur Data Service: ', data);
    this.conducteurDataSource.next([...data]);
  }

  changeUserDataSource(data){
    this.userDataSource.next([...data]);
  }

  changeBlockageDataSource(data) {
    console.log('blockage Data Service: ', data);
    this.blockageDataSource.next([...data]);
  }

  changeConducteurCheckList(data) {
    // console.log('Conducteur CheckList: ', data);
    this.conducteurCheckList.next(data);
  }

  changeEnginCheckList(data) {
    // console.log('Engin CheckList: ', data);
    this.enginCheckList.next(data);
  }

  changeEquipementCheckList(data) {
    console.log('Equipement CheckList: ', data);
    this.equipementCheckList.next(data);
  }

  changeRatingCheckList(data) {
    this.ratingCheckList.next(data);
  }

  changeConducteurRating(data) {
    this.conducteurRating.next(data);
  }

  changeEquipementRating(data) {
    this.equipementRating.next(data);
  }

  changeEnginRating(data) {
    this.enginRating.next(data);
  }

  changeVehiculeRating(data) {
    this.vehiculeRating.next(data);
  }

  changeVehiculeID(id) {
    this.vehiculeID.next(id);
  }

  changeDateBlockage(date) {
    this.dateBlockage.next(date);
  }

  changeBlockageID(id) {
    this.blockageID.next(id);
  }

  changeCheckListID(id) {
    this.checkListID.next(id);
  }
}
