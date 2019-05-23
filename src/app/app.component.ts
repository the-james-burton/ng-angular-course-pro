import {
  Component,
  ViewChild,
  ViewContainerRef,
  AfterContentInit,
  TemplateRef
} from '@angular/core';

import { AuthFormComponent } from './auth-form/auth-form.component';

import { User } from './auth-form/auth-form.interface';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <div #entry></div>
      <!-- different from course prefix with ng -->
      <ng-template #tmpl>
        John : Somewhere, UK
      </ng-template>
    </div>
  `
})
export class AppComponent implements AfterContentInit {

  @ViewChild('entry', { read: ViewContainerRef }) entry: ViewContainerRef;
  @ViewChild('tmpl') tmpl: TemplateRef<any>;

  ngAfterContentInit(): void {
    this.entry.createEmbeddedView<any>(this.tmpl);
  }
}
