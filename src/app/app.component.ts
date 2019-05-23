import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <ng-container [ngTemplateOutlet]="tmpl" [ngTemplateOutletContext]="ctx">
      </ng-container>
      <!-- different from course prefix with ng -->
      <ng-template #tmpl let-name let-location="location">
        {{ name }} : {{ location }}
      </ng-template>
    </div>
  `
})
export class AppComponent {
  ctx = { $implicit: 'Julia', location: 'Somewhere, UK' };
}
