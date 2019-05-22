import {
  Component,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
  AfterContentInit
} from '@angular/core';

import { AuthFormComponent } from './auth-form/auth-form.component';

import { User } from './auth-form/auth-form.interface';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <div #entry></div>
    </div>
  `
})
export class AppComponent implements AfterContentInit {
  @ViewChild('entry', { read: ViewContainerRef }) entry: ViewContainerRef;

  constructor(private resolver: ComponentFactoryResolver) {}

  loginUser(user: User) {
    console.log('Login', user);
  }

  ngAfterContentInit(): void {
    const authFormFactory = this.resolver.resolveComponentFactory(
      AuthFormComponent
    );
    const component = this.entry.createComponent(authFormFactory);
    component.instance.title = 'Create account';
  }
}
