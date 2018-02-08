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
  // @Output() public search = new EventEmitter();

  public search() {
    console.log(this.searchString);
  }
}
