
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { Router } from '@angular/router';
import { MovieItemComponent,MovieListComponent } from './movies/index'
import { HomeRoutingModule } from './home.routes.module'
import { HomeServices } from './home.services'
import {MaterialModule} from '@angular/material';
@NgModule({
  imports: [
      CommonModule,
      HomeRoutingModule,
      MaterialModule.forRoot()
    ],
  declarations: [HomeComponent,MovieItemComponent,MovieListComponent],
  exports: [HomeComponent,MovieItemComponent,MovieListComponent],
  providers: [HomeServices]
  
})
export class HomeModule {
    
 }
