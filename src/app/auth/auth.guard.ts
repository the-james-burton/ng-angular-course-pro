import { Injectable } from '@angular/core';
import { CanLoad, CanActivate, CanActivateChild} from '@angular/router';

import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanLoad, CanActivate, CanActivateChild {
  canActivate() {
    return this.authService.isLoggedIn();
  }
  canActivateChild() {
    // will be able to navigate to parent at http://localhost:4200/mail
    return this.authService.isLoggedIn();
  }
  constructor(private authService: AuthService) {}
  canLoad() {
    return this.authService.checkPermissions();
  }
}
