import { AuthorsService } from 'app/services/authors.service';
import {
  OnInit,
  Component,
  EventEmitter,
  forwardRef,
} from '@angular/core';
import {
  ControlValueAccessor,
  Validator,
  FormControl,
  NG_VALUE_ACCESSOR,
  NG_VALIDATORS,
 } from '@angular/forms';

@Component({
  selector: 'authors-list',
  styleUrls: [ 'authors-list.component.css' ],
  templateUrl: 'authors-list.component.html',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => AuthorsListComponent),
    multi: true,
  }, {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => AuthorsListComponent),
    multi: true,
  }]
})

export class AuthorsListComponent implements ControlValueAccessor, Validator {

  public availableAuthors: string[] = [];

  private propagateChange;
  private onTouched;
  private parseError: boolean;
  private authors: string[] = [];

  constructor(authorsService: AuthorsService) {
    authorsService.getAuthors().subscribe((authors) =>
      this.availableAuthors = authors);
  }

  public validate(c: FormControl) {
    return (!this.parseError) ? null : {
      required: {valid: false}
    }
  }

  public writeValue(obj: any) {
    this.authors = obj && obj.toString().split(',').map((a) => a.trim()) || [];
    this.onChange();
  }

  public registerOnChange(fn: any) {
    this.propagateChange = fn;
    this.onChange();
  }

  public registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  // public ngOnInit() {
  //   // handle async issues of registerOnChange
  //   this.onChange();
  // }

  public authorsInclude(author: string) {
    return this.authors.indexOf(author) > -1;
  }

  public onChange(event?: any) {
    if (event) {
      const author = event.target.name;
      const checked = event.target.checked;
      if (checked && !this.authorsInclude(author)) {
        this.authors.push(author)
      } else if (!checked && this.authorsInclude(author)) {
        this.authors = this.authors.filter((a) => a !== author);
      }
    }
    this.parseError = this.authors.length === 0;
    if (this.propagateChange) {
      this.propagateChange(this.authors.join(', '));
    }
  }
}
