import { CourseCreateComponent } from './courses/course-create/course-create.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './home';
import { LoginComponent } from './login/login.component';
import { NoContentComponent } from './no-content';

export const ROUTES: Routes = [
  { path: '',      component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'create', component: CourseCreateComponent },
  // { path: 'detail', loadChildren: './+detail#DetailModule'},
  // { path: 'barrel', loadChildren: './+barrel#BarrelModule'},
  { path: '**',    component: NoContentComponent },
];
