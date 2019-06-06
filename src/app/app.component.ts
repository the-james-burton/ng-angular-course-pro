import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.Default,
  template: `
    <div>
      <button (click)="addProp()">Add property</button>
      <button (click)="changeUser()">Change user object</button>
      <button (click)="changeName()">Change name property</button>
      <div class="users">
        <example-one [user]="user"></example-one>
        <example-two [user]="user"></example-two>
      </div>
    </div>
  `
})
export class AppComponent {
  user: any = {
    name: 'John Marbles',
    age: 34,
    location: 'New York'
  };

  addProp() {
    this.user.email = 'someone@somewhere.net';
  }

  changeName() {
    this.user.name = 'Jane Wombat';
  }

  changeUser() {
    this.user = {
      name: 'Oscar Penguin',
      age: 28,
      location: 'New York '
    };
  }
}
