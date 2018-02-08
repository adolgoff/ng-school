import {
  Component,
} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'app/services/auth.service';

@Component({
  selector: 'login',
  providers: [ AuthService ],
  styleUrls: [ 'login.component.css' ],
  templateUrl: 'login.component.html'
})
export class LoginComponent {
  public username: string;
  public password: string;

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  public async login() {
    const result = await this.authService.login(
      this.username, this.password,
    );
    if (result) {
      this.router.navigate(['/']);
    }
  }
}
