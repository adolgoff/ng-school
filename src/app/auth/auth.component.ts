import {
  Component,
  OnInit
} from '@angular/core';

import { AppState } from 'app/app.service';

@Component({
  selector: 'auth',
  styleUrls: [ './auth.component.css' ],
  templateUrl: './auth.component.html'
})
export class AuthComponent implements OnInit {
  public localState = { value: '' };
  constructor(
    public appState: AppState,
  ) {}

  public ngOnInit() {
    console.log('`Auth` component');
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
