import { AppState } from 'app/app.service';
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

  constructor(private appState: AppState) {}

  public search() {
    this.appState.set('search.value', this.searchString);
  }

  public onKey(event: KeyboardEvent, form: HTMLFormElement) {
    if (event.key === 'Escape') {
      form.reset();
      this.appState.set('search.value', this.searchString);
    }
  }
}
