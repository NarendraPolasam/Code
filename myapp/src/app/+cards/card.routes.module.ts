import { NgModule }             from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { CardComponent } from './card.component';
const cardRoutes : Routes = [
   { path: '',
    component: CardComponent,
    children: [
          { path: 'Cards', component:CardComponent  },  
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