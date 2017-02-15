import { Injectable } from '@angular/core';
import { CanActivate ,Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class CanActivatedAuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate() {
      if (this.authService.getLoggedIn()) { return true; }
        this.router.navigate(['/login']);
    return false;
  }
}