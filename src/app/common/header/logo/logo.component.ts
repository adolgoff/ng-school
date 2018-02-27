import {
  Component,
} from '@angular/core';

import { AppState } from 'app/app.service';

@Component({
  selector: 'logo',
  styles: [``],
  template: `<a routerLink="/"><img src="/assets/img/school.jpg"
    width="200" height="200" alt="Angular School"></a>`,
})
export class LogoComponent {
}
