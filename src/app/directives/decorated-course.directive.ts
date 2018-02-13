import { Course } from 'app/models/course';
import { Directive, Input, ElementRef, HostBinding } from '@angular/core';

@Directive({ selector: '[courseViewModificator]' })
export class DecoratedCourseDirective {
  @Input()
  @HostBinding('attr.deleted') public deleted;
  @HostBinding('attr.upcoming') private upcoming;
  @HostBinding('attr.starred') private top;
  @Input() public set courseDetail(course: Course) {
    this.upcoming = Date.parse(course.date) > new Date().getTime() || null;
    this.top = course.top || null;
  }
}
