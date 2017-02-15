import { NgModule }             from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { ThemeComponent } from './theme.component';
const themeRoutes : Routes = [
   { path: '',
    component: ThemeComponent,
    children: [
          { path: 'mtheme', component:ThemeComponent  },  
       ]
   }
];

@NgModule({
  imports: [
    RouterModule.forChild(themeRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
  ]
})

export class ThemeRoutingModule { }