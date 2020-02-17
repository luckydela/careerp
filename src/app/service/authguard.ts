import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot,Router } from '@angular/router';
import { Observable } from 'rxjs';

import { ServiceService } from './service.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private auth: ServiceService,private router: Router){ }


  canActivate(next: ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if (!this.auth.isLoggedIn) {
      this.router.navigate(['']);
      return false;
    }

    return true;
  }


  canActivateChild(next: ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if (!this.auth.isLoggedIn) {
      this.router.navigate(['']);
      return false;
    }

    return true;
  }
}
