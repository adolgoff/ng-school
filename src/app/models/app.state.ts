import { CoursesList } from 'app/models/course';
import { User } from './user';

export interface AppState {
  readonly user: User;
  readonly coursesList: CoursesList;
}
