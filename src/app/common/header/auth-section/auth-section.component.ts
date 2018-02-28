import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AppState } from 'app/app.service';
import { AuthService } from 'app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'auth-section',
  styleUrls: ['auth-section.component.css'],
  templateUrl: 'auth-section.component.html',
})
export class AuthSectionComponent {
  @Input() public first: string;
  @Input() public last: string;
  @Output() public logout = new EventEmitter();
}
