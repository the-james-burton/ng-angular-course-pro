import { Component } from '@angular/core';

import { Mail } from '../../models/mail.interface';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

@Component({
  selector: 'mail-folder',
  styleUrls: ['mail-folder.component.scss'],
  template: `
    <h2>{{ title | async }}</h2>
    <mail-item
      *ngFor="let message of (messages | async)"
      [message]="message"
    >
    </mail-item>
  `
})
export class MailFolderComponent {
  constructor(private route: ActivatedRoute) {}

  // different from course - cannot use { messages: Mail[] } as type
  messages: Observable<Mail[]> = this.route.data.pipe(pluck('messages'));
  title: Observable<string> = this.route.params.pipe(pluck('name'));
}
