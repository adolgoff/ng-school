import { Router } from '@angular/router';
import { CoursesService } from 'app/services/courses.service';
import {
  Component,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-toolbar',
  styleUrls: [ 'toolbar.component.css' ],
  templateUrl: 'toolbar.component.html',
})

export class ToolbarComponent {
  public searchString: string = '';

  constructor(private courseService: CoursesService, public router: Router) {}

  public search() {
    this.courseService.getList(this.searchString);
  }

  public onKey(event: KeyboardEvent, form: HTMLFormElement) {
    if (event.key === 'Escape') {
      form.reset();
      this.search();
    }
  }
}
