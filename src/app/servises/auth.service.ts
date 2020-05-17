import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

const AUTH_TOKEN = 'AUTH_TOKEN'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isUserLoggedIn$: BehaviorSubject<boolean>;

  constructor() {
    const initialState = localStorage.getItem(AUTH_TOKEN);
    this.isUserLoggedIn$ = new BehaviorSubject(!!initialState);
  }

  getAuthState() {
    return this.isUserLoggedIn$;
  }

  handleLogin() {
    localStorage.setItem(AUTH_TOKEN, AUTH_TOKEN);
    this.isUserLoggedIn$.next(true);
  }

  handleLogout() {
    localStorage.removeItem(AUTH_TOKEN);
    this.isUserLoggedIn$.next(false);
  }
}
