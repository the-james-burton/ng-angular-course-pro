import { Injectable } from '@angular/core';
import { CanLoad, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanLoad, CanActivate {
  canActivate() {
    return this.authService.isLoggedIn();
  }
  constructor(private authService: AuthService) {}
  canLoad() {
    return this.authService.checkPermissions();
  }
}
