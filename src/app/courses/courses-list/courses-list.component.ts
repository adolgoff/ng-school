import {
  Component,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { Observable, Subscription } from 'rxjs/Rx';
import { CoursesList, Course } from 'app/models/course';
import { CoursesService } from 'app/services/courses.service';
import { AppState } from 'app/app.service';

@Component({
  selector: 'courses-list',
  styleUrls: [ 'courses-list.component.css' ],
  templateUrl: 'courses-list.component.html',
  providers: [CoursesService],
})
export class CoursesListComponent implements OnInit, OnDestroy {
  public coursesList: CoursesList = [];
  public titleToDelete: string = '';
  private courseToDelete: Course;
  private coursesSubscription: Subscription;
  constructor(
    public appState: AppState,
    private courseService: CoursesService,
  ) {}

  public async ngOnInit() {
    console.log('`Courses list` component initialized');
    this.coursesSubscription = this.courseService.getList()
      .subscribe((list) => this.coursesList = list);
  }

  public async ngOnDestroy() {
    this.coursesSubscription.unsubscribe();
  }

  public editCourse(courseObj: Course) {
    console.log(`Edit course with ID ${courseObj.id}`);
  }

  public deleteCourse(courseObj: Course, dialog: any) {
    this.courseToDelete = this.coursesList
      .find((course) => course.id === courseObj.id);
    this.titleToDelete = this.courseToDelete.title;
    dialog.show();
  }

  public async approveDeleting(event: Event, dialog: any) {
    await this.courseService.removeItem(this.courseToDelete.id);
    this.courseToDelete.deleted = true;
    this.courseToDelete = null;
    this.titleToDelete = null;
    dialog.close();
  }

  public onKey($event: KeyboardEvent, dialog: any) {
    if ($event.key === 'Escape') {
      this.cancelDeleting($event, dialog);
    }
  }

  public cancelDeleting(event: Event, dialog: any) {
    this.courseToDelete = null;
    this.titleToDelete = null;
    dialog.close();
  }
}
