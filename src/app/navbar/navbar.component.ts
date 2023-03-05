import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { AdminUser } from '../model/adminUser';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  adminUser!: AdminUser | null;
  // isLocalServer: boolean;

  constructor(
    private auth: AuthService,
    private location: Location,
    private router: Router
  ) {
    this.auth.adminUser$.subscribe((user) => {
      console.log(user);
      this.adminUser = user;
    });
  }

  logout() {
    this.auth.Logout();
    // this.router.navigate(['/login']);
    window.location.replace('/login');
  }
}
