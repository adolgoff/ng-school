import {
  Component,
  OnInit
} from '@angular/core';

import { AppState } from 'app/app.service';
import { Title } from 'app/home/title';

@Component({
  selector: 'app-footer',
  providers: [
    Title
  ],
  styleUrls: [ './footer.component.css' ],
  templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit {
  public localState = { value: '' };
  constructor(
    public appState: AppState,
    public title: Title
  ) {}

  public ngOnInit() {
    console.log('`Footer` component initialized');
    /**
     * this.title.getData().subscribe(data => this.data = data);
     */
  }

  public submitState(value: string) {
    console.log('submitState', value);
    this.appState.set('value', value);
    this.localState.value = '';
  }
}
