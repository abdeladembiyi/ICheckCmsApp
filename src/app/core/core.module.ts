import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialModule,
    FontAwesomeModule,
    // HttpClientModule
  ],
  exports: [
    MaterialModule,
    FontAwesomeModule,
    // HttpClientModule
  ]
})
export class CoreModule { }
