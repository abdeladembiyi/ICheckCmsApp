import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPrintModule } from 'ngx-print';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { DynamicFormQuestionComponent } from './components/dynamic-form-question/dynamic-form-question.component';
import { CustomFormComponent } from './components/custom-form/custom-form.component';
import { CheckListComponent } from './components/check-list/check-list.component';
import { EnginsComponent } from './components/engins/engins.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddEnginsComponent } from './components/add-engins/add-engins.component';
import { EditEnginsComponent } from './components/edit-engins/edit-engins.component';
import { SyntheseComponent } from './components/synthese/synthese.component';
import { LoginComponent } from './components/auth/login/login.component';
import { AdminComponent } from './components/admin/admin.component';
import { MenuComponent } from './components/admin/menu/menu.component';
import { JwtModule } from '@auth0/angular-jwt';
import { EditConducteurComponent } from './components/conducteur/edit-conducteur/edit-conducteur.component';
import { ConducteurComponent } from './components/conducteur/conducteur.component';
import { AddConducteurComponent } from './components/conducteur/add-conducteur/add-conducteur.component';
import { DetailsComponent } from './components/details/details.component';
import { CheckListConducteurComponent } from './components/check-list-conducteur/check-list-conducteur.component';
import { CheckListEquipementComponent } from './components/check-list-equipement/check-list-equipement.component';
import { CheckListEnginComponent } from './components/check-list-engin/check-list-engin.component';
import { CiterneComponent } from './components/attelages/citerne/citerne.component';
import { BenneComponent } from './components/attelages/benne/benne.component';
import { PlateauComponent } from './components/attelages/plateau/plateau.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { HistoryComponent } from './components/history/history.component';
import { UploadComponent } from './components/upload/upload.component';
import { Camera } from '@ionic-native/camera/ngx';
import { ChartsModule } from 'ng2-charts';
import { GrueMobileComponent } from './components/attelages/grue-mobile/grue-mobile.component';
import { NacelleComponent } from './components/attelages/nacelle/nacelle.component';
import { MiniPelleComponent } from './components/attelages/mini-pelle/mini-pelle.component';
import { CamionComponent } from './components/attelages/camion/camion.component';
import { UserComponent } from './components/user/user.component';
import { ListUserComponent } from './components/user/list-user/list-user.component';

export function getToken() {
  return localStorage.getItem('token');
}
@NgModule({
  declarations: [
    AppComponent,
    CustomFormComponent,
    DynamicFormComponent,
    DynamicFormQuestionComponent,
    CheckListComponent,
    EnginsComponent,
    AddEnginsComponent,
    EditEnginsComponent,
    SyntheseComponent,
    LoginComponent,
    AdminComponent,
    MenuComponent,
    EditConducteurComponent,
    ConducteurComponent,
    AddConducteurComponent,
    DetailsComponent,
    CheckListConducteurComponent,
    CheckListEquipementComponent,
    CheckListEnginComponent,
    BenneComponent,
    CiterneComponent,
    PlateauComponent,
    DashboardComponent,
    HistoryComponent,
    UploadComponent,
    GrueMobileComponent,
    NacelleComponent,
    MiniPelleComponent,
    CamionComponent,
    UserComponent,
    ListUserComponent
  ],
  entryComponents: [EditEnginsComponent,EditConducteurComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    FontAwesomeModule,
    ChartsModule,
    NgxPrintModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: getToken,
        whitelistedDomains: [
          'http://localhost:4772',
          'http://192.168.1.105:1020'
        ]
      }
    }),
  ],
  
  providers: [
    Camera,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent],
  exports: [],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
