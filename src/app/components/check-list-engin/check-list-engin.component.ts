import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';
import { Icons } from 'src/app/shared/icons';

@Component({
  selector: 'app-check-list-engin',
  templateUrl: './check-list-engin.component.html',
  styleUrls: ['./check-list-engin.component.scss'],
})
export class CheckListEnginComponent implements OnInit {

  values = [];
  enginRating = 0;
  enginImg = Icons.enginImg;
  
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.values['b11'] = false;
    this.values['b12'] = false;
    this.values['b13'] = false;
    this.values['b14'] = false;
    this.values['b15'] = false;
    this.values['b16'] = false;
    this.values['b17'] = false;
    this.values['b18'] = false;
    this.values['b19'] = false;
    this.values['b20'] = false;
    this.values['b21'] = false;
    this.values['b22'] = false;
    this.dataService.currentEnginCheckList.subscribe();
    this.dataService.changeEnginCheckList(this.values);
    this.dataService.currentEnginRating.subscribe();
  }

  check(id) {
    console.log(id);
    const buttonID = `b${id}`;
    const button = document.getElementById(buttonID);
    // console.log(button.classList);
    if (button.classList.contains('isNotActive')) {
      button.classList.replace('isNotActive', 'isActive');
      this.values[`${buttonID}`] = true;
      this.enginRating++;
      this.dataService.changeEnginRating(this.enginRating);
    } else {
      if (button.classList.contains('isActive')) {
        button.classList.replace('isActive', 'isNotActive');
        this.values[`${buttonID}`] = false;
        this.enginRating--;
        this.dataService.changeEnginRating(this.enginRating);
      }
    }
    this.dataService.changeEnginCheckList(this.values);
  }

}
