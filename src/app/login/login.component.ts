import {
  Component, OnDestroy,
} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'app/services/auth.service';
import { Observable, Subscription } from 'rxjs/Rx';
import { User } from 'app/models/user';

@Component({
  selector: 'login',
  providers: [ AuthService ],
  styleUrls: [ 'login.component.css' ],
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnDestroy {
  public username: string;
  public password: string;
  private loginSubscription: Subscription;

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  public login(): void {
    this.loginSubscription = this.authService.login(
        this.username, this.password,
      ).subscribe((user: User) => {
        if (user) {
          this.router.navigate(['/']);
        }
      });
  }

  public ngOnDestroy(): void {
    this.loginSubscription.unsubscribe();
  }
}
