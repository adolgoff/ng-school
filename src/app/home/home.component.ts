import {
  Component,
  OnInit
} from '@angular/core';

import { AppState } from 'app/app.service';

@Component({
  selector: 'home',  
  styleUrls: [ './home.component.css' ],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  /**
   * TypeScript public modifiers
   */
  constructor() {}

  public ngOnInit() {
    console.log('`Home` component initialized');
  }
}
