import { Observable, BehaviorSubject } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { catchError } from 'rxjs/operators';
import { CoursesList, Course } from '../models/course';
import { AuthorizedHttp } from 'app/services/authorized-http';

const MSEC_14_DAYS: number = 1209600000;
const OUTDATED_FILTER = (course: Course): boolean => {
  return Date.parse(course.date) > (new Date().getTime() - MSEC_14_DAYS)
};

@Injectable()
export class CoursesService {
  // private list: Observable<CoursesList>;
  private list: BehaviorSubject<CoursesList> = new BehaviorSubject<CoursesList>([]);

  constructor(private http: AuthorizedHttp) {}

  public getList(searchTerm: string = null): Observable<CoursesList> {
    this.http.get<CoursesList>('/assets/mock-data/mock-data.json', {params:{searchTerm}})
      .subscribe((response: CoursesList) => this.list.next(
        response.filter(searchTerm ?
          (course: Course) => this.searchFilter(course, searchTerm) : OUTDATED_FILTER)
      ));
    return this.list.asObservable();
  }

  public async createCourse(): Promise<boolean> {
    return true;
  }

  public async getItemById(id: number): Promise<Course> {
    return null;
  }

  public async updateItem(id: number): Promise<boolean> {
    return true;
  }

  public async removeItem(id: number): Promise<boolean> {
    return true;
  }

  /**
   *
   * Search filter helper method for array.filter
   *
   * @private
   * @param {Course} course
   * @param {string} searchTerm
   * @returns {boolean}
   * @memberOf CoursesService
   */
  private searchFilter(course: Course, searchTerm: string): boolean {
    searchTerm = searchTerm.toLowerCase().trim();
    return course.title.toLowerCase().includes(searchTerm) ||
      course.description.toLowerCase().includes(searchTerm);
  }

}
