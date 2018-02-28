import { Observable, Subscription } from 'rxjs/Rx';
import { CoursesService } from 'app/services/courses.service';
import {
  Component,
  OnDestroy,
} from '@angular/core';
import { Course } from 'app/models/course';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/take';

@Component({
  selector: 'course-create',
  styleUrls: [ 'course-create.component.css' ],
  templateUrl: 'course-create.component.html',
})
export class CourseCreateComponent implements OnDestroy{
  public course: Course = {};
  private courseSubscription: Subscription = new Subscription();
  constructor(private route: ActivatedRoute, courseService: CoursesService) {
    this.route.params.subscribe( ({slug}) => {
      if (slug) {
        this.courseSubscription = courseService.getItemBySlug(slug)
          .subscribe((result) => this.course = result);
      }
    });
  }

  public ngOnDestroy() {
    this.courseSubscription.unsubscribe();
  }

  /**
   * Creates a course on a backend
   * @memberOf CourseCreateComponent
   */
  public submit(): void {
    console.log('Create course');
  }
}
