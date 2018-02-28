import { Observable, Subscription } from 'rxjs/Rx';
import { User } from 'app/models/user';
import {
  Component,
  Input,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthService } from 'app/services/auth.service';
import { LoginState, LoginActions } from 'app/login/login.actions';
import { OnDestroy } from '@angular/core';
import { RootState } from '../../redux/root.reducer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css']
})
export class HeaderComponent implements OnDestroy {
  public user: User;
  private userSubscription: Subscription = new Subscription();
  @Input() public pageTitle: string = 'Angular Courses';

  constructor(public actions: LoginActions, store: Store<RootState>, router: Router) {
    this.userSubscription = store.select('login').subscribe((login: LoginState) => {
      this.user = login && login.user;
      if (login && !login.user) router.navigate(['login']);
    })
  }

  public ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }
 }
