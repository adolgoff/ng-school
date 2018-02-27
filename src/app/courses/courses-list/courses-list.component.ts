import { Router } from '@angular/router';
import {
  Component,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { Observable, Subscription } from 'rxjs/Rx';
import { CoursesList, Course } from 'app/models/course';
import { CoursesService } from 'app/services/courses.service';

@Component({
  selector: 'courses-list',
  styleUrls: [ 'courses-list.component.css' ],
  templateUrl: 'courses-list.component.html',
})
export class CoursesListComponent implements OnInit, OnDestroy {
  public coursesList: CoursesList = [];
  public titleToDelete: string = '';
  private courseToDelete: Course;
  private coursesSubscription: Subscription;
  constructor(
    private courseService: CoursesService,
    private router: Router,
  ) {}

  public async ngOnInit() {
    this.coursesSubscription = this.courseService.getList()
      .subscribe((list) => this.coursesList = list);
  }

  public async ngOnDestroy() {
    this.coursesSubscription.unsubscribe();
  }

  public editCourse(courseObj: Course) {
    this.router.navigate([`courses/${courseObj.slug}`]);
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
