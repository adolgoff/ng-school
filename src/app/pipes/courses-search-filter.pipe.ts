import { CoursesList } from 'app/models/course';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'coursesSearchFilter',
})
export class CoursesSearchFilter implements PipeTransform {
  public transform(list: CoursesList, searchTerm: string): CoursesList {
    if (!searchTerm) {
      return list;
    } else {
      return list.filter((course) =>
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.description.toLowerCase().includes(searchTerm.toLowerCase()));
    }
  }
}
