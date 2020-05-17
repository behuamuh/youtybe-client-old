import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../servises/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  isUserLoggedIn: boolean;

  constructor(private authService: AuthService, private router: Router) {
    authService.getAuthState().subscribe(state => this.isUserLoggedIn = state);
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (!this.isUserLoggedIn) {
      this.router.navigateByUrl('/login');
      return false;
    }

    return true;
  }

}
