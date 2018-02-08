import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { User } from '../models/user';

const USER_STORAGE_KEY: string = 'user';

@Injectable()
export class AuthService {
  // TODO: make it promise to handle it asynchroniously
  constructor(private httpClient: HttpClient) {}

  /**
   * Stores fake user info and token to local storage)
   * @param {string} name 
   * @param {string} password 
   * @returns {Promise<User>} 
   * @memberOf AuthService
   */
  public async login(name: string, password: string): Promise<User> {
    const user: User = {
      email: 'johnsmith@yahoo.com',
      first: 'John',
      last: 'Smith',
      guid: 'alskjhdF&F',
      id: 210398,
      nickname: 'johnsmith',
      thumbnail: null,
    };
    localStorage.setItem('user', JSON.stringify(user));
    return user;
  }

  /**
   * Wipes fake user info and token from local storage)
   * @returns {Promise<boolean>} 
   * @memberOf AuthService
   */
  public async logout(): Promise<boolean> {
    localStorage.removeItem(USER_STORAGE_KEY);
    return true;
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
