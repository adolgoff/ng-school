import { Observable, BehaviorSubject } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { User } from 'app/models/user';
import { Store } from '@ngrx/store';
import { createAction } from 'app/redux/action.factory';
import { RootState } from 'app/redux/root.reducer';
import { LoginState } from 'app/login/login.actions';

const USER_STORAGE_KEY: string = 'user';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient, store:Store<RootState>) {
    // put actual login status on app initalizing
    const user: User = this.getUserInfo();
    if (user) {
      store.dispatch(createAction('loginSuccess', {user}));
    } else {
      store.dispatch(createAction('logout'));
    }

    // push user data to localstorage if got new user data (skiping initial store state)
    store.select((state) => state.login.user)
      .skip(1)
      .subscribe((user: User) => {
        if (user) localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user));
        else localStorage.removeItem(USER_STORAGE_KEY);
      });
  }

  /**
   * Requests mocked user info and token
   * @param {string} name
   * @param {string} password
   * @returns {Promise<User>}
   * @memberOf AuthService
   */
  public async asyncLogin(name: string, password: string): Promise<User> {
    return this.http.get<User>('/assets/mock-data/mock-user.json').toPromise();
  }

  /**
   * Wipes fake user info and token from local storage)
   * @returns {Promise<boolean>}
   * @memberOf AuthService
   */
  public logout(): boolean {
    localStorage.removeItem(USER_STORAGE_KEY);
    return true;
  }

  /**
   * @returns {Observable<User>}
   * @memberOf AuthService
   */
  // public getUserObservable(): Observable<User> {
    // return this.userSubject.asObservable();
  // }

  /**
   * @returns {boolean}
   * @memberOf AuthService
   */
  public isAuthenticated(): boolean {
    const user = localStorage.getItem(USER_STORAGE_KEY);
    console.log(user);
    return !!user;
  }

  /**
   * @returns {User}
   * @memberOf AuthService
   */
  public getUserInfo(): User {
    return JSON.parse(localStorage.getItem(USER_STORAGE_KEY)) as User;
  }

}
