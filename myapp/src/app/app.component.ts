import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderComponent,FooterComponent } from './layouts/index'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {
  constructor(private router: Router){}
}
