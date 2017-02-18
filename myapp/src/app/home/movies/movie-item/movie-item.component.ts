import { Component,OnInit,OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { CONFIG } from '../../../core/config/config';
import { ActivatedRoute } from '@angular/router';
import { HomeServices } from '../../home.services';
@Component({
  selector: 'movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent implements OnInit {
  
  private id: number;
  private sub: any;
  private movieItem:any;
  constructor(private route: ActivatedRoute,
              private homeService:HomeServices ) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.id = +params['id']; 
       if(this.id!=null)
       {
          this.homeService.getMovieById(this.id).subscribe(data=>{
              if(data!=null){
                this.movieItem = data;
              }
              else{
                this.movieItem = null;
              }
          })
       }
       
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
    this.movieItem = null;
  }

}
