import { Observable, BehaviorSubject } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { User } from '../models/user';

const USER_STORAGE_KEY: string = 'user';

@Injectable()
export class AuthService {
  private userSubject: BehaviorSubject<User> = new BehaviorSubject<User>(null);
  constructor(private http: HttpClient) {
    if (this.isAuthenticated()) {
      this.userSubject.next(this.getUserInfo());
    }
  }

  /**
   * Stores fake user info and token to local storage)
   * @param {string} name
   * @param {string} password
   * @returns {Promise<User>}
   * @memberOf AuthService
   */
  public login(name: string, password: string): Observable<User> {
    const userObservable: Observable<User> =
      this.http.get<User>('/assets/mock-data/mock-user.json');

    userObservable.subscribe((user) => {
      this.userSubject.next(user);
      localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user));
    });

    return this.userSubject.asObservable();
  }

  /**
   * Wipes fake user info and token from local storage)
   * @returns {Promise<boolean>}
   * @memberOf AuthService
   */
  public logout(): boolean {
    localStorage.removeItem(USER_STORAGE_KEY);
    this.userSubject.next(null);
    return true;
  }

  /**
   * @returns {Observable<User>}
   * @memberOf AuthService
   */
  public getUserObservable(): Observable<User> {
    return this.userSubject.asObservable();
  }

  /**
   * @returns {boolean}
   * @memberOf AuthService
   */
  public isAuthenticated(): boolean {
    return !!localStorage.getItem(USER_STORAGE_KEY);
  }

  /**
   * @returns {User}
   * @memberOf AuthService
   */
  public getUserInfo(): User {
    return JSON.parse(localStorage.getItem(USER_STORAGE_KEY)) as User;
  }

}
