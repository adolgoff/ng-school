import {
  Component,
} from '@angular/core';
import { Course } from 'app/models/course';

@Component({
  selector: 'course-create',
  styleUrls: [ 'course-create.component.css' ],
  templateUrl: 'course-create.component.html',
})
export class CourseCreateComponent {

  /**
   * Creates a course on a backend
   * @memberOf CourseCreateComponent
   */
  public submit(): void {
    console.log('Create course');
  }
}
