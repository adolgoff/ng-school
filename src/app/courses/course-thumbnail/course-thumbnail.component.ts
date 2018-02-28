import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core';
import { Course } from 'app/models/course';

@Component({
  selector: 'course-thumbnail',
  styleUrls: [ 'course-thumbnail.component.css' ],
  templateUrl: 'course-thumbnail.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoursesThumbnailComponent {
  @Input() public courseDetail: Course;
  @Output() public edit = new EventEmitter();
  @Output() public delete = new EventEmitter();
}
