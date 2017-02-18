import { NgModule }             from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { CardComponent } from './card.component';
import { DrawCardComponent } from './drawcard/drawcard.component';
const cardRoutes : Routes = [
   { path: '',
    component: CardComponent,
    children: [
          { path: '', component:DrawCardComponent },  
       ]
   }
];

@NgModule({
  imports: [
    RouterModule.forChild(cardRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
  ]
})

export class CardRoutingModule { }