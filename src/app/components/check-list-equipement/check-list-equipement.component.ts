import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';
import { Icons } from 'src/app/shared/icons';

@Component({
  selector: 'app-check-list-equipement',
  templateUrl: './check-list-equipement.component.html',
  styleUrls: ['./check-list-equipement.component.scss'],
})
export class CheckListEquipementComponent implements OnInit {

  values = [];
  equipementRating = 0;
  equipementImg = Icons.equipementImg;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.values['b5'] = false;
    this.values['b6'] = false;
    this.values['b7'] = false;
    this.values['b8'] = false;
    this.values['b9'] = false;
    this.dataService.currentEquipementCheckList.subscribe();
    this.dataService.changeEquipementCheckList(this.values);
    this.dataService.currentEquipementRating.subscribe();
  }

  check(id) {
    console.log(id);
    const buttonID = `b${id}`;
    const button = document.getElementById(buttonID);
    // console.log(button.classList);
    if (button.classList.contains('isNotActive')) {
      button.classList.replace('isNotActive', 'isActive');
      this.values[`${buttonID}`] = true;
      this.equipementRating++;
      this.dataService.changeEquipementRating(this.equipementRating);
    } else {
      if (button.classList.contains('isActive')) {
        button.classList.replace('isActive', 'isNotActive');
        this.values[`${buttonID}`] = false;
        --this.equipementRating;
        this.dataService.changeEquipementRating(this.equipementRating);
      }
    }
    this.dataService.changeEquipementCheckList(this.values);
  }

}
