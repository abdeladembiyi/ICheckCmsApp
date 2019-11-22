import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CustomFormComponent } from './components/custom-form/custom-form.component';
import { CheckListComponent } from './components/check-list/check-list.component';
import { EnginsComponent } from './components/engins/engins.component';
import { AddEnginsComponent } from './components/add-engins/add-engins.component';
import { SyntheseComponent } from './components/synthese/synthese.component';
import { LoginComponent } from './components/auth/login/login.component';
import { AdminComponent } from './components/admin/admin.component';
import { AuthGuard } from './core/guard/auth.guard';
import { ConducteurComponent } from './components/conducteur/conducteur.component';
import { AddConducteurComponent } from './components/conducteur/add-conducteur/add-conducteur.component';
import { DetailsComponent } from './components/details/details.component';
import { CheckListConducteurComponent } from './components/check-list-conducteur/check-list-conducteur.component';
import { CheckListEquipementComponent } from './components/check-list-equipement/check-list-equipement.component';
import { CheckListEnginComponent } from './components/check-list-engin/check-list-engin.component';
import { BenneComponent } from './components/attelages/benne/benne.component';
import { CiterneComponent } from './components/attelages/citerne/citerne.component';
import { PlateauComponent } from './components/attelages/plateau/plateau.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HistoryComponent } from './components/history/history.component';
import { UploadComponent } from './components/upload/upload.component';
import { UserComponent } from './components/user/user.component';
import { ListUserComponent } from './components/user/list-user/list-user.component';

const routes: Routes = [
  { path: '', component: LoginComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'admin', component: AdminComponent, children: [
      { path: '', component: DashboardComponent, outlet: 'admin' },
      { path: 'dashboard', component: DashboardComponent, outlet: 'admin' },
      { path: 'conducteur', component: ConducteurComponent, outlet: 'admin'/*, canActivate: [AuthGuard]*/ },
      { path: 'conducteur/new', component: AddConducteurComponent, outlet: 'admin' },
      { path: 'user',component: ListUserComponent, outlet : 'admin'},
      { path : 'user/new', component: UserComponent, outlet : 'admin'},
      { path: 'synthese', component: SyntheseComponent, outlet: 'admin'/*, canActivate: [AuthGuard]*/ },
      { path: 'synthese/:id', component: DetailsComponent, outlet: 'admin' },
      { path: 'history', component: HistoryComponent, outlet: 'admin' },
      // { path: 'engin', component: AddEnginsComponent, outlet: 'admin', canActivate: [AuthGuard] }
    ]
  },
  { path: 'benne', component: BenneComponent },
  { path: 'citerne', component: CiterneComponent },
  { path: 'plateau', component: PlateauComponent },
  { path: 'motif', component: UploadComponent },
  { path: 'checklistConducteur', component: CheckListConducteurComponent },
  { path: 'checklistEquipement', component: CheckListEquipementComponent },
  { path: 'checklistEngin', component: CheckListEnginComponent },
  { path: 'checklist/:image', component: CheckListComponent },
  { path: 'engins', component: EnginsComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: 'login' },
  // { path: 'edit-conducteur', loadChildren: './pages/conducteur/edit-conducteur/edit-conducteur.module#EditConducteurPageModule' },


  // { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
