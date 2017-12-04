import {
  Component,
  OnInit
} from '@angular/core';

import { AppState } from '../../app.service';
import { Title } from './../../home/title';
import { XLargeDirective } from './x-large';

@Component({
  selector: 'header',
  providers: [
    Title
  ],
  styles: [],
  template: `<div></div>`
})
export class HeaderComponent implements OnInit {
  public localState = { value: '' };
  constructor(
    public appState: AppState,
    public title: Title
  ) {}

  public ngOnInit() {
    console.log('hello `Header` component');
    /**
     * this.title.getData().subscribe(data => this.data = data);
     */
  }
}
