import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { catchError } from 'rxjs/operators';
import { CoursesList, Course } from '../models/course';

@Injectable()
export class CoursesService {
  constructor(private http: HttpClient) {}

  public async getList(): Promise<CoursesList> {
    return this.http
      .get<CoursesList>('/assets/mock-data/mock-data.json')
      .toPromise();
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
