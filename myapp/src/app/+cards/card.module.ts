import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule  }    from '@angular/forms';
import { HttpModule, BaseRequestOptions }    from '@angular/http';
import { CardRoutingModule } from './card.routes.module'
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component'
import { CardService } from './card.services';
import {MaterialModule} from '@angular/material';
import { DrawCardComponent } from './drawcard/drawcard.component';
@NgModule({
  imports: [
      CommonModule, 
      FormsModule,
      CardRoutingModule,
       MaterialModule.forRoot()
  ],
  declarations: [CardComponent,DrawCardComponent],
  exports: [CardComponent,DrawCardComponent],
  providers: [CardService]
  
})
export class CardModule { }