import { Injectable } from '@angular/core';
import { CourseCreateComponent } from './courses/course-create/course-create.component';
import { HomeComponent } from './home';
import { LoginComponent } from './login/login.component';
import { NoContentComponent } from './no-content';
import {
  Router,
  Routes,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthService } from 'app/services/auth.service';
import { User } from 'app/models/user';

@Injectable()
export class AppGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}
  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.authService.isAuthenticated()) {
      return true;
    } else {
      this.router.navigate(['login'], {
        queryParams: { returnUrl: state.url },
        skipLocationChange: true});
    }
  }
}

export const ROUTES: Routes = [
  { path: '',      component: HomeComponent, canActivate: [AppGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'courses/new', component: CourseCreateComponent, canActivate: [AppGuard] },
  { path: 'courses/:slug', component: CourseCreateComponent, canActivate: [AppGuard] },
  { path: '**',    component: NoContentComponent },
];
