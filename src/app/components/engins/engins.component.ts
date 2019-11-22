import { Component, OnInit } from '@angular/core';
import { Conducteur } from 'src/app/shared/models/conducteur';
import { Engin } from 'src/app/shared/models/engin';
import { CheckListService } from 'src/app/core/services/check-list/check-list.service';
import { EnginService } from 'src/app/core/services/engin/engin.service';
import { Constants } from 'src/app/shared/constants';
import { Icons } from 'src/app/shared/icons';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-engins',
  templateUrl: './engins.component.html',
  styleUrls: ['./engins.component.scss'],
})
export class EnginsComponent implements OnInit {

  conducteur: Conducteur;
  engins: Engin[];
  logoutIcon = Icons.logoutIcon;

  constructor(private enginService: EnginService,
      private router: Router,
      private platform: Platform) {
        // this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(res => {
      if(!this.platform.is('android') || !this.platform.is('tablet')) {
        console.log('is not a tablet');
        this.router.navigate(['login']);
      }
    });
  }



  ngOnInit() {
    this.enginService.getEngins().subscribe(res => { this.engins = res; console.log(res); });
  }

  createImagePath(serverPath: string) {
    return `${Constants.serverImg}${serverPath}`;
    // return `http://localhost:4772/${serverPath}`;
  }

  onClick(nomEngin, id) {
    console.log(nomEngin, id);
  }
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    this.router.navigate(['login']);
  }
}
