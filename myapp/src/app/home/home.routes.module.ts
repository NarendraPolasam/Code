import { NgModule }             from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { MovieListComponent, MovieItemComponent } from './movies/index'
import { CanActivatedAuthGuard } from '../core/index'
const homeRoutes : Routes = [
   { path:'',
       component:HomeComponent ,
        children:[
          {path:"Home",component:MovieListComponent},
          {path:"movie",component:MovieItemComponent},
          { path:'', redirectTo:'/Home',pathMatch:'full'}],
    }
];

@NgModule({
  imports: [
    RouterModule.forChild(homeRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
  ]
})

export class HomeRoutingModule { }