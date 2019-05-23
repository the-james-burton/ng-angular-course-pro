import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <ng-container
        [ngTemplateOutlet]="tmpl">
      </ng-container>
      <!-- different from course prefix with ng -->
      <ng-template #tmpl>
        Julia : Somewhere, UK
      </ng-template>
    </div>
  `
})
export class AppComponent {}
