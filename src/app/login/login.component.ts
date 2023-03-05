import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';

  constructor(private auth: AuthService, private router: Router) {
    auth.user$.subscribe((user) => {
      if (!user) {
        return;
      }
      const returnUrl = localStorage.getItem('returnUrl');
      if (!returnUrl) {
        return;
      } else {
        localStorage.removeItem('returnUrl');
        router.navigateByUrl(returnUrl);
      }
    });
  }

  ngOnInit(): void {}

  login(email: string, password: string) {
    const result = this.auth.login(email, password);
  }
}
