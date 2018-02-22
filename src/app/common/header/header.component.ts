import { User } from 'app/models/user';
import {
  Component,
  OnInit,
  Input,
} from '@angular/core';
import { AuthService } from 'app/services/auth.service';

@Component({
  selector: 'app-header',
  providers: [ AuthService ],
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css']
})
export class HeaderComponent implements OnInit {
  public user: User;
  @Input() public pageTitle: string = 'Angular Courses';

  constructor(private authService: AuthService) {}

  public ngOnInit() {
    console.log('`Header` component initialized');
    this.authService.getUserObservable()
      .subscribe((user: User) => this.user = user);
  }
}
