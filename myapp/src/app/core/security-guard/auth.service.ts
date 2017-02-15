import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';


@Injectable()
export class AuthService {
  private isLoggedIn: boolean = false;
  userName: string;
  constructor() { }

  login(userName,token) {
    this.userName = userName;
    this.setLoggedIn(true);
  }

  logout() {
    localStorage.removeItem('token');
    this.setLoggedIn(false);
  }
  
  getLoggedIn(): boolean {
    return this.isLoggedIn;
  }

  private setLoggedIn(status: boolean) {
    this.isLoggedIn = status;
  }
}
