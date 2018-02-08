import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/*
 * Platform and Environment providers/directives/pipes
 */
import { environment } from 'environments/environment';
import { ROUTES } from './app.routes';
// App is our top level component
import { AppComponent } from './app.component';
import { APP_RESOLVER_PROVIDERS } from './app.resolver';
import { AppState, InternalStateType } from './app.service';
import { HomeComponent } from './home';
import { LoginComponent } from './login/login.component';
import { CoursesListComponent } from './courses/courses-list/courses-list.component';
import { CoursesThumbnailComponent } from './courses/course-thumbnail/course-thumbnail.component';
import { HeaderComponent } from './common/header/header.component';
import { LogoComponent } from './common/header/logo/logo.component';
import { ToolbarComponent } from './common/toolbar/toolbar.component';
import { AuthSectionComponent } from './common/header/auth-section/auth-section.component';
import { FooterComponent } from './common/footer/footer.component';
import { NoContentComponent } from './no-content';

import '../styles/styles.scss';
import '../styles/headings.scss';

// Application wide providers
const APP_PROVIDERS = [
  ...APP_RESOLVER_PROVIDERS,
  AppState
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
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    CoursesListComponent,
    CoursesThumbnailComponent,
    LogoComponent,
    ToolbarComponent,
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
