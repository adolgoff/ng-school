import {
  Component, OnDestroy, OnInit,
} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'app/services/auth.service';
import { Observable, Subscription } from 'rxjs/Rx';
import { User } from 'app/models/user';
// redux stuff
import { Store } from '@ngrx/store';
import { LoginActions, LoginState } from './login.actions';
import { RootState } from '../redux/root.reducer';

@Component({
  selector: 'login',
  styleUrls: [ 'login.component.css' ],
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnDestroy {
  public username: string;
  public password: string;
  private userSubscription: Subscription = new Subscription();

  constructor(
    public actions: LoginActions,
    private store: Store<RootState>,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    const returnUrl = route.snapshot.queryParams['returnUrl'] || '/';
    const login = store.select('login');
    this.userSubscription = login.subscribe((login: LoginState) => {
      console.log('user: ' + JSON.stringify(login && login.user));
      login && login.user && router.navigate([returnUrl]);
    });
  }

  public ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }
}
