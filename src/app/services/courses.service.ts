import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { catchError } from 'rxjs/operators';
import { CoursesList, Course } from '../models/course';

const MSEC_14_DAYS: number = 1209600000;
const OUTDATED_FILTER = (course: Course): boolean => {
  return Date.parse(course.date) > (new Date().getTime() - MSEC_14_DAYS)
};

@Injectable()
export class CoursesService {
  constructor(private http: HttpClient) {}

  public getList(): Observable<CoursesList> {
    return this.http.get<CoursesList>('/assets/mock-data/mock-data.json')
      .map((list: CoursesList) => list.filter(OUTDATED_FILTER));
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

}
