import {
  Component,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { Course } from 'app/models/course';

@Component({
  selector: 'course-thumbnail',
  styleUrls: [ 'course-thumbnail.component.css' ],
  templateUrl: 'course-thumbnail.component.html'
})
export class CoursesThumbnailComponent {
  @Input() public courseDetail: Course;
  @Input() public deleted: boolean = false;
  @Output() public edit = new EventEmitter();
  @Output() public delete = new EventEmitter();

  public editCourse(event) {
    this.edit.emit(this.courseDetail);
  }
  
  public deleteCourse(event) {    
    this.delete.emit(this.courseDetail);
  }
}
