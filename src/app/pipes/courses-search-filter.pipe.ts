import { CoursesList } from 'app/models/course';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'coursesSearchFilter',
})
export class CoursesSearchFilter implements PipeTransform {
  public transform(list: CoursesList, searchString: string): CoursesList {
    if (!searchString) {
      return list;
    } else {
      return list.filter((course) =>
        course.title.toLowerCase().indexOf(searchString.toLowerCase()) >= 0 ||
        course.description.toLowerCase().indexOf(searchString.toLowerCase()) >= 0);
    }
  }
}
