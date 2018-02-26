import { User } from 'app/models/user';
import {
  Component,
  Input,
} from '@angular/core';
import { AuthService } from 'app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css']
})
export class HeaderComponent {
  public user: User;
  @Input() public pageTitle: string = 'Angular Courses';

  constructor(authService: AuthService) {
    authService.getUserObservable()
      .subscribe((user: User) => this.user = user);
  }
}
