import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CONFIG } from '../core/config/config';
@Component({
  selector: 'ht-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private title :string;
  constructor()
  {
  }
  ngOnInit(){
   
  }
}
