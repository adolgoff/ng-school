import { AppGuard } from 'app/app.routes';
import { AuthorsService } from 'app/services/authors.service';
import { CoursesService } from 'app/services/courses.service';
import { AuthService } from 'app/services/auth.service';
import { AuthorizedHttp } from 'app/services/tools/authorized-http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { rootReducer } from 'app/redux/root.reducer';
/*
* Platform and Environment providers/directives/pipes
*/
import { environment } from 'environments/environment';
import { ROUTES } from 'app/app.routes';
import { UpcomingFilter } from 'app/pipes/upcoming-filter.pipe';
import { TimeFormat } from 'app/pipes/time-format.pipe';
import { DecoratedCourseDirective } from 'app/directives/decorated-course.directive';
// App is our top level component
import { AppComponent } from 'app/app.component';
import { APP_RESOLVER_PROVIDERS } from 'app/app.resolver';
import { AppState, InternalStateType } from 'app/app.service';
import { HomeComponent } from 'app/home';
import { LoginComponent } from 'app/login/login.component';
import { LoginActions } from 'app/login/login.actions';
import { CoursesListComponent } from 'app/courses/courses-list/courses-list.component';
import { CourseCreateComponent } from 'app/courses/course-create/course-create.component';
import { CoursesThumbnailComponent } from 'app/courses/course-thumbnail/course-thumbnail.component';
import { HeaderComponent } from 'app/common/header/header.component';
import { LogoComponent } from 'app/common/header/logo/logo.component';
import { ToolbarComponent } from 'app/common/toolbar/toolbar.component';
import { AuthorsListComponent } from 'app/common/authors-list/authors-list.component'
import { AuthSectionComponent } from 'app/common/header/auth-section/auth-section.component';
import { FooterComponent } from 'app/common/footer/footer.component';
import { NoContentComponent } from 'app/no-content';

import '../styles/styles.scss';
import '../styles/headings.scss';

// Application wide providers & services
const APP_PROVIDERS = [
  ...APP_RESOLVER_PROVIDERS,
  LoginActions,
  AuthorizedHttp,
  AuthService,
  CoursesService,
  AuthorsService,
  AppState,
  AppGuard,
];

type StoreType = {
  state: InternalStateType,
  restoreInputValues: () => void,
  disposeOldHosts: () => void
};

/**
 * Main entry point into Angular2's bootstraping process
 */
@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [
    // Pipes&Directives
    UpcomingFilter,
    TimeFormat,
    DecoratedCourseDirective,
    // Components
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    CoursesListComponent,
    CourseCreateComponent,
    CoursesThumbnailComponent,
    LogoComponent,
    ToolbarComponent,
    AuthorsListComponent,
    AuthSectionComponent,
    FooterComponent,
    NoContentComponent,
  ],
  /**
   * Import Angular's modules.
   */
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES, {
      useHash: Boolean(history.pushState) === false,
      preloadingStrategy: PreloadAllModules
    }),
    StoreModule.forRoot(rootReducer),
    StoreDevtoolsModule.instrument({maxAge: 25}),
  ],
  /**
   * Expose our Services and Providers into Angular's dependency injection.
   */
  providers: [
    environment.ENV_PROVIDERS,
    APP_PROVIDERS
  ]
})
export class AppModule {}
