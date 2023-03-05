import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAuthGuard } from './admin-auth.guard';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { WetapLocationsComponent } from './wetap-locations/wetap-locations.component';
import { WetapUsersComponent } from './wetap-users/wetap-users.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'wetap-locations',
    component: WetapLocationsComponent,
    canActivate: [AdminAuthGuard],
  },
  {
    path: 'wetap-users',
    component: WetapUsersComponent,
    canActivate: [AdminAuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
