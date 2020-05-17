import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servises/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-widget',
  templateUrl: './auth-widget.component.html',
  styleUrls: ['./auth-widget.component.scss']
})
export class AuthWidgetComponent implements OnInit {
  isUserLoggedIn: boolean;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.authService.getAuthState().subscribe(isLoggedIn => this.isUserLoggedIn = isLoggedIn);
  }

  onLogin() {
    this.authService.handleLogin();
  }

  onLogout() {
    this.authService.handleLogout();
    this.router.navigateByUrl('/login');
  }

  handleClick() {
    this.isUserLoggedIn ? this.onLogout() : this.onLogin();
  }

}
