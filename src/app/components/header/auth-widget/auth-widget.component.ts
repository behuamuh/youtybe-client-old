import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servises/auth.service';

@Component({
  selector: 'app-auth-widget',
  templateUrl: './auth-widget.component.html',
  styleUrls: ['./auth-widget.component.scss']
})
export class AuthWidgetComponent implements OnInit {
  isUserLoggedIn: boolean;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.getAuthState().subscribe(isLoggedIn => this.isUserLoggedIn = isLoggedIn);
  }

  handleClick() {
    this.isUserLoggedIn ? this.authService.handleLogout() : this.authService.handleLogin();
  }

}
