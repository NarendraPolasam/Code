import { Component,OnInit,OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { CONFIG } from '../../../core/config/config';
import { HomeServices } from '../../home.services';

@Component({
  selector: 'movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MovieListComponent implements OnInit {
  private movies= [];
  private isMovies:boolean = false;
  constructor(private router: Router,
              private homeService:HomeServices,){
      
  }
  ngOnInit(){
      this.getMovies();
  }
  getMovies()
  {
     this.homeService.getPopularMovies().subscribe(data=>{
       if(data.results!=null && data.results.length > 0)
       {
        this.movies = data.results;
       }
       else
       {
         this.movies = [];
       }
     });
  }
  ngOnDestroy(){
    this.movies = [];
  }
  details(id:number){
    this.router.navigate(['/movie', id]);
  }
}
