import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servises/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  login = '';
  password = '';
  error = '';

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  handleSubmit(event: KeyboardEvent | MouseEvent) {
    event.preventDefault();

    if (!this.login || !this.password) {
      this.error = 'Invalid credentials';
      return;
    };

    this.authService.handleLogin();
    this.router.navigateByUrl('/');
  }

}
