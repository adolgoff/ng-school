import {
  Component,
  OnInit
} from '@angular/core';

import { AppState } from 'app/app.service';

@Component({
  selector: 'app-footer',
  styleUrls: [ './footer.component.css' ],
  templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit {
  public ngOnInit() {
    console.log('`Footer` component initialized');
    /**
     * this.title.getData().subscribe(data => this.data = data);
     */
  }
}
