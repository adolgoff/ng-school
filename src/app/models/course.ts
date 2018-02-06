import { Author } from './author';

export interface CoursesList extends Array<Course>{}

export interface Course {
  id: Number;
  author: Author;
  title: String;
  description: String;
  date: Number;
  length: Number;
  permalink: String;
  thumbnail: String;
}