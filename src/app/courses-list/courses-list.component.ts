import {
  Component,
  OnInit
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppState } from '../app.service';
import { CoursesList, Course } from '../models/course';

@Component({
  selector: 'courses-list',
  styleUrls: [ 'courses-list.component.css' ],
  templateUrl: 'courses-list.component.html',
  providers: [HttpClient],
})
export class CoursesListComponent implements OnInit {
  public localState = { value: '' };
  public coursesList: CoursesList;

  constructor(
    public appState: AppState,
    private http: HttpClient,
  ) {}

  public async ngOnInit() {
    console.log('`Courses list` component initialized');
    this.http.get<CoursesList>('/assets/mock-data/mock-data.json')
      .subscribe((list) => this.coursesList = list);
  }

  public editCourse(course: Course) {
    console.log(`Edit course with ID ${course.id}`);
  }

  public submitState(value: string) {
    console.log('submitState', value);
    this.appState.set('value', value);
    this.localState.value = '';
  }
}
