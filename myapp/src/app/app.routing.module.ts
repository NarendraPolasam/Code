import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeModule } from './home/home.module';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path:'', loadChildren:'./home/home.module#HomeModule'},
      { path:'Cards',loadChildren:'./+cards/card.module#CardModule'},
      { path:'mtheme',loadChildren:'./+changeTheme/theme.module#ThemeModule'},
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }