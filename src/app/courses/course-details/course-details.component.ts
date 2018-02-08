import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'course-details',
  styleUrls: [ './course-details.component.css' ],
  templateUrl: './course-details.component.html'
})
export class CourseDetailsComponent implements OnInit {
  public ngOnInit() {
    console.log('`CourseDetails` component initialized');
    /**
     * this.title.getData().subscribe(data => this.data = data);
     */
  }
}
