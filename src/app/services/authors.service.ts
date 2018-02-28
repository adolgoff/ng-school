import { Observable, BehaviorSubject } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { catchError } from 'rxjs/operators';
import { AuthorizedHttp } from 'app/services/tools/authorized-http';

@Injectable()
export class AuthorsService {
  private list: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);

  constructor(private http: AuthorizedHttp) {}

  public getAuthors(): Observable<string[]> {
    if (!this.list.value.length) {
      this.http.get<string[]>('/assets/mock-data/mock-authors.json',)
      .subscribe((response: string[]) => this.list.next(response));
    }
    return this.list.asObservable();
  }
}
