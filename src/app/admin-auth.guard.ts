import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { filter, map, Observable, switchMap } from 'rxjs';
import { AuthService } from './auth.service';
import { AdminUser } from './model/adminUser';

@Injectable({
  providedIn: 'root',
})
export class AdminAuthGuard implements CanActivate {
  constructor(private auth: AuthService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.auth.adminUser$.pipe(
      map((adminUser) => {
        return adminUser.isAdmin;
      })
    );
  }
}
