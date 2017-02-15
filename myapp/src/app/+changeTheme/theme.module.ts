import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule  }    from '@angular/forms';
import { HttpModule, BaseRequestOptions }    from '@angular/http';
import { ThemeRoutingModule } from './theme.routes.module'
import { CommonModule } from '@angular/common';
import { ThemeComponent } from './theme.component'
import {MaterialModule} from '@angular/material';
@NgModule({
  imports: [
        CommonModule, 
        FormsModule,
        ThemeRoutingModule,
        MaterialModule.forRoot()
      ],
  declarations: [ThemeComponent],
  exports: [ThemeComponent],
  providers: []
  
})
export class ThemeModule { }