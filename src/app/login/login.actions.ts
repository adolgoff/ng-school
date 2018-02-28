import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { RootState } from '../redux/root.reducer';
import { User } from 'app/models/user';
import { AuthService } from 'app/services/auth.service';
import { createAction } from 'app/redux/action.factory';

export interface LoginState {
  readonly fetching: boolean,
  readonly user: User,
}

@Injectable()
export class LoginActions {

  // public static LOGIN = 'login';
  public static LOGIN_START = 'loginStarted';
  public static LOGIN_SUCCESS = 'loginSuccess';
  public static LOGIN_FAILURE = 'loginFailure';
  public static LOGOUT = 'logout';

  constructor(
    private store: Store<RootState>,
    private authService: AuthService,
  ) {}

  public async login(username: string, password: string) {
    this.store.dispatch(createAction(LoginActions.LOGIN_START));
    try {
      const user: User = await this.authService.asyncLogin(username, password);
      this.store.dispatch(createAction(LoginActions.LOGIN_SUCCESS, {user}));
    } catch (e) {
      this.store.dispatch(createAction(LoginActions.LOGIN_FAILURE));
    }
  }

  public logout() {
    this.store.dispatch(createAction(LoginActions.LOGOUT));
  }

}
