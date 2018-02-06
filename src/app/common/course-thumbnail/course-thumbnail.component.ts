import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
} from '@angular/core';
import { AppState } from '../../app.service';
import { Course } from '../../models/course';

@Component({
  selector: 'course-thumbnail',
  styleUrls: [ 'course-thumbnail.component.css' ],
  templateUrl: 'course-thumbnail.component.html'
})
export class CoursesThumbnailComponent implements OnInit {
  @Input() public courseDetail: Course;
  @Output() public edit = new EventEmitter();

  public localState = { value: '' };

  constructor(
    public appState: AppState,
  ) {}

  public editCourse(event) {
    this.edit.emit(this.courseDetail);
  }

  public deleteCourse(event) {
    console.log(`Deleting is not implemented yet`);
  }

  public ngOnInit() {
    console.log('`Course thumbnail` component initialized');
    /**
     * this.title.getData().subscribe(data => this.data = data);
     */
  }

  public submitState(value: string) {
    console.log('submitState', value);
    this.appState.set('value', value);
    this.localState.value = '';
  }
}
