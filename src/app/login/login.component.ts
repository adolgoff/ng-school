import {
  Component, OnDestroy, OnInit,
} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'app/services/auth.service';
import { Observable, Subscription } from 'rxjs/Rx';
import { User } from 'app/models/user';

@Component({
  selector: 'login',
  styleUrls: [ 'login.component.css' ],
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit, OnDestroy {
  public username: string;
  public password: string;
  private loginSubscription: Subscription = new Subscription();
  private returnUrl: string;

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  public ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    if (this.authService.isAuthenticated()) {
      this.router.navigate([this.returnUrl]);
    }
  }

  /**
   * Submit handler for login form
   *
   * @memberOf LoginComponent
   */
  public login(): void {
    this.loginSubscription = this.authService.login(
        this.username, this.password,
      ).subscribe((user: User) => {
        if (user) {
          this.router.navigate([this.returnUrl]);
        }
      });
  }

  public ngOnDestroy(): void {
    this.loginSubscription.unsubscribe();
  }
}
