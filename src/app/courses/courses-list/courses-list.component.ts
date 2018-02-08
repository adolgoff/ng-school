import {
  Component,
  OnInit
} from '@angular/core';
import { CoursesList, Course } from 'app/models/course';
import { CoursesService } from 'app/services/courses.service';

@Component({
  selector: 'courses-list',
  styleUrls: [ 'courses-list.component.css' ],
  templateUrl: 'courses-list.component.html',
  providers: [CoursesService],
})
export class CoursesListComponent implements OnInit {
  public coursesList: CoursesList;
  private courseToDelete: Course;
  private titleToDelete: string = '';

  constructor(
    private courseService: CoursesService,
  ) {}

  public async ngOnInit() {
    console.log('`Courses list` component initialized');
    this.coursesList = await this.courseService.getList();
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
    // this.coursesList = this.coursesList.filter((item) =>
    // item.id !== this.courseToDelete.id);
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