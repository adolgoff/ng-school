import { Author } from './author';

export interface CoursesList extends Array<Course> {}

export interface Course {
  id: number;
  guid: string;
  author: Author;
  title: string;
  description: string;
  date: number;
  length: number;
  permalink: string;
  thumbnail: string;
  deleted: boolean;
  top: boolean;
}
