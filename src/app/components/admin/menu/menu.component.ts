import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { faTruck, faClipboardList, faTruckLoading, faUser } from '@fortawesome/free-solid-svg-icons';
import { Icons } from 'src/app/shared/icons';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {

  constructor(private route: ActivatedRoute, private router: Router) { }
  faTruck = faTruck;
  faClipboardList = faClipboardList;
  faTruckLoading = faTruckLoading;
  faUser = faUser;
  role;


  conducteurIcon = Icons.conducteurIcon;
  enginIcon = Icons.enginIcon;
  syntheseIcon = Icons.syntheseIcon;
  logoutIcon = Icons.logoutIcon;
  statsIcon = Icons.statsIcon;
  dashboardIcon = Icons.dashboardIcon;
  adminIcon = Icons.adminIcon;



  pages = [
    {
      title: 'Dashboard',
      url: 'dashboard',
      icon: Icons.dashboardIcon
    },
    {
      title: 'Synthèse de controle',
      url: 'synthese',
      icon: Icons.syntheseIcon
    },
    {
      title: 'Historiques des camions suspendus',
      url: 'history',
      icon: Icons.historyIcon
    },
    {
      title: 'Conducteurs',
      icon: Icons.conducteurIcon,
      children: [
        {
          title: 'Nouveau',
          url: 'conducteur/new'
        },
        {
          title: 'Liste des conducteurs',
          url: 'conducteur'
        }
      ]
    },
    {
      title: 'Gestion des utilisateurs',
      icon: Icons.adminIcon,
      children: [
        {
          title: 'Nouveau',
          url: 'user/new'
        },
        {
          title: 'Liste des utilisateurs',
          url: 'user'
        }
      ]
    },
    /*{
      title: 'Vehicules',
      icon: Icons.vehiculeIcon,
      children: [
        {
          title: 'Nouveau',
          url: 'vehicule/new'
        },
        {
          title: 'Liste des vehicules',
          url: 'vehicules'
        }
      ]
    }, */
    {
      title: 'Logout',
      icon: Icons.logoutIcon,
      url: 'logout'
    }
  ];




  goToSynthese() {
    console.log('Test');
    this.router.navigate([{ outlets: { admin: ['synthese'] } }], { relativeTo: this.route });
  }

  goToEngin() {
    console.log('Engin');
    this.router.navigate([{ outlets: { admin: ['engin'] } }], { relativeTo: this.route });
  }

  navigateTo(url) {
    console.log(url);
    this.router.navigate([{ outlets: { admin: url } }], { relativeTo: this.route });
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    console.log('Logout');
    this.router.navigate(['login']);
  }
}
