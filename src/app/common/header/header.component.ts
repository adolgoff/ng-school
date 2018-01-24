import {
  Component,
  OnInit
} from '@angular/core';

import { AppState } from 'app/app.service';
import { Title } from 'app/home/title';

@Component({
  selector: 'app-header',
  providers: [
    Title
  ],
  template: `<header></header>`
})
export class HeaderComponent implements OnInit {
  public localState = { value: '' };
  constructor(
    public appState: AppState,
    public title: Title
  ) {}

  public ngOnInit() {
    console.log('`Header` component');
    /**
     * this.title.getData().subscribe(data => this.data = data);
     */
  }
}
