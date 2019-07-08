import { Component, Input } from '@angular/core';

import { Mail } from '../../models/mail.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'mail-item',
  styleUrls: ['mail-item.component.scss'],
  template: `
    <!-- (click)="navigateToMessage()" -->
    <a
      class="mail-item"
      [routerLink]="['/mail', { outlets: { pane: ['message', message.id] } }]"
      routerLinkActive="active"
    >
      <h3>
        {{ message.from }}
        <span>{{ message.timestamp | date: 'shortTime' }}</span>
      </h3>
      <p>{{ message.summary }}</p>
    </a>
  `
})
export class MailItemComponent {
  constructor(private router: Router) {}

  @Input()
  message: Mail;

  navigateToMessage() {
    // note that doing this means that the 'active' state is not set in the dom
    // meaning that the style is not applied...
    this.router.navigate([
      '',
      { outlets: { pane: ['message', this.message.id] } }
    ]);
  }
}
