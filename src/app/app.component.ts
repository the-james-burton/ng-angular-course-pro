import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <ul>
      <!-- the 'of' here is matched by angular to the 'Of' in the myForOf -->
        <li *myFor="let item of items; let i = index">
          {{ i }} Member: {{ item.name | json }}
        </li>
        <ng-template myFor [myForOf]="items" let-item let-i="index">
          <li>{{ i }} Member: {{ item.name | json }}</li>
        </ng-template>
      </ul>
    </div>
  `
})
export class AppComponent {
  items = [
    {
      name: 'Tony Norman',
      age: 41,
      location: 'New York'
    },
    {
      name: 'Isabel Purley',
      age: 42,
      location: 'New York'
    },
    {
      name: 'Adam Old',
      age: 40,
      location: 'New York'
    }
  ];
  constructor() {
    setTimeout(() => {
      this.items = [
        ...this.items,
        { name: 'Matt Skiba', age: 40, location: 'California' }
      ];
    }, 2000);
  }
}
