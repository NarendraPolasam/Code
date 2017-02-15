import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule  }    from '@angular/forms';
import { HttpModule, BaseRequestOptions }    from '@angular/http';
import { CardRoutingModule } from './card.routes.module'
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component'
import { CardService } from './card.services';

@NgModule({
  imports: [
      CommonModule, 
      FormsModule,
      CardRoutingModule,
  ],
  declarations: [CardComponent],
  exports: [CardComponent],
  providers: [CardService]
  
})
export class CardModule { }