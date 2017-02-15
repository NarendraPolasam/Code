import {Component} from '@angular/core';

@Component({
  selector: 'theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css'],
})
export class ThemeComponent {
  isDarkTheme: boolean = false;

  constructor(){}
  
}