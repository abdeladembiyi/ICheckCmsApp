import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';
import { Icons } from 'src/app/shared/icons';

@Component({
  selector: 'app-check-list-conducteur',
  templateUrl: './check-list-conducteur.component.html',
  styleUrls: ['./check-list-conducteur.component.scss'],
})
export class CheckListConducteurComponent implements OnInit {

  values = [];
  conducteurRating = 0;
  conducteurImg = Icons.conducteurImg;


  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.values['b1'] = false;
    this.values['b2'] = false;
    this.values['b3'] = false;
    this.values['b4'] = false;
    // this.values['b5'] = false;
    this.dataService.currentConducteurCheckList.subscribe();
    this.dataService.currentConducteurRating.subscribe();
    this.dataService.changeConducteurCheckList(this.values);
  }

  filter = (obj, predicate) =>
    Object.keys(obj)
      .filter(key => predicate(obj[key]))
      .reduce((res, key) => Object.assign(res, { [key]: obj[key] }), []);

  test(id) {
    console.log(id);
    const buttonID = `b${id}`;
    const button = document.getElementById(buttonID);
    // console.log(button.classList);
    if (button.classList.contains('isNotActive')) {
      button.classList.replace('isNotActive', 'isActive');
      this.values[`${buttonID}`] = true;
      this.conducteurRating++;
      console.log('Conducteur Rating: ', this.conducteurRating);
      this.dataService.changeConducteurRating(this.conducteurRating);
      // this.dataService.changeRatingCheckList(Math.round(this.values.filter(x => x === true).length))
    } else {
      if (button.classList.contains('isActive')) {
        button.classList.replace('isActive', 'isNotActive');
        this.values[`${buttonID}`] = false;
        this.conducteurRating--;
        console.log('Conducteur Rating: ', this.conducteurRating);
        this.dataService.changeConducteurRating(this.conducteurRating);
      }
    }
    this.dataService.changeConducteurCheckList(this.values);
  }

  arrayOfValues(values: []) {

  }
}
