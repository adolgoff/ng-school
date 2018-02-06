import {
  Component,
  // Output,
  OnInit,
  EventEmitter,
} from '@angular/core';
import { AppState } from '../../app.service';

@Component({
  selector: 'app-toolbar',
  styleUrls: [ 'toolbar.component.css' ],
  templateUrl: 'toolbar.component.html'
})
export class ToolbarComponent implements OnInit {
  public localState = { value: '' };
  public searchString: String = '';
  // @Output('search') public searchSubmitted = new EventEmitter();

  constructor(
    public appState: AppState,
  ) {}

  public ngOnInit() {
    console.log('`Toolbar` component initialized');
  }

  public submitState(value: string) {
    this.appState.set('value', value);
    this.localState.value = '';
  }

  public search() {
    console.log(this.searchString);
  }
}
