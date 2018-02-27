// import { Author } from './author';

export interface CoursesList extends Array<Course> {}

export interface Course {
  id?: number;
  guid?: string;
  author?: string;
  title?: string;
  description?: string;
  date?: string;
  length?: number;
  slug?: string;
  thumbnail?: string;
  deleted?: boolean;
  top?: boolean;
}
