import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CONFIG } from '../../../core/config/config';
@Component({
  selector: 'movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MovieListComponent implements OnInit {
  private title :string;
  constructor( )
  {
      
  }
  ngOnInit(){
  }
}
