import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpHandler, HttpEvent, HttpParams } from '@angular/common/http';
import { AuthService } from 'app/services/auth.service';
import { Store } from '@ngrx/store';
import { RootState } from '../../redux/root.reducer';

export interface RequestOptions {
  headers?: HttpHeaders | { [header: string]: string | string[]; };
  observe?: 'body';
  params?: HttpParams | {[param: string]: string | string[]};
  reportProgress?: boolean;
  responseType?: 'json';
  withCredentials?: boolean;
  body?: any;
}
/**
 *
 * Just a class to pass authorization token with each request
 * @export
 * @class AuthorizedHttp
 */
@Injectable()
export class AuthorizedHttp {

  private token: string;

  private headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  });

  constructor(private http: HttpClient, store: Store<RootState>){
    store.select((state) => state.login.user).subscribe((user: any) => {
      this.token = user && user.token;
    });
  }

  public get<T>(url: string, options?: RequestOptions): Observable<T> {
    if (this.token) {
      this.headers = this.headers.append('Auth-Token', this.token);
    }
    options = options || {};
    options.headers = this.headers;
    return this.http.get<T>(url, options);
  }
}
