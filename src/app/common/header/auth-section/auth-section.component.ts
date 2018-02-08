import { Component } from '@angular/core';
import { AppState } from 'app/app.service';
import { AuthService } from 'app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'auth-section',
  providers: [ AuthService ],
  styleUrls: ['auth-section.component.css'],
  templateUrl: 'auth-section.component.html',
})
export class AuthSectionComponent {
  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  public signOut() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
