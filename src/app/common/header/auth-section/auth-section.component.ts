import { Component, Input } from '@angular/core';
import { AppState } from 'app/app.service';
import { AuthService } from 'app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'auth-section',
  styleUrls: ['auth-section.component.css'],
  templateUrl: 'auth-section.component.html',
})
export class AuthSectionComponent {
  @Input() public first: string;
  @Input() public last: string;

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  public signOut() {
    if (this.authService.logout()) {
      this.router.navigate(['/login']);
    }
  }
}
