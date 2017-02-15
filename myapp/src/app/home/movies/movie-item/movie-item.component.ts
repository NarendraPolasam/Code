import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CONFIG } from '../../../core/config/config';
@Component({
  selector: 'movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent implements OnInit {
  private title :string;
  constructor( )
  {

  }
  ngOnInit(){
  }
}
