import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-check-list',
  templateUrl: './check-list.component.html',
  styleUrls: ['./check-list.component.scss'],
})
export class CheckListComponent implements OnInit {
  // engin = 'Grue Auxiliaire';
  engin: string = '';
  constructor(private activatedRoute: ActivatedRoute) { }

  async ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      if(params['image']) {
        this.engin = params['image'][0].toUpperCase() + params['image'].slice(1);
      }
      // this.engin = params['image']
    });
  }
}
