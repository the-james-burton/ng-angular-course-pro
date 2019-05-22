import {
  Component,
  Output,
  EventEmitter,
  ContentChildren,
  QueryList,
  AfterContentInit,
  AfterViewInit,
  ViewChildren,
  ChangeDetectorRef,
  ViewChild,
  ElementRef
} from '@angular/core';

import { AuthRememberComponent } from './auth-remember.component';
import { AuthMessageComponent } from './auth-message.component';

import { User } from './auth-form.interface';

@Component({
  selector: 'auth-form',
  styles: [`.email { border-color: #9f72e6; }`],
  template: `
    <div>
      <form (ngSubmit)="onSubmit(form.value)" #form="ngForm">
        <ng-content select="h3"></ng-content>
        <label>
          Email address
          <input type="email" name="email" ngModel #email />
        </label>
        <label>
          Password
          <input type="password" name="password" ngModel />
        </label>
        <ng-content select="auth-remember"></ng-content>
        <!-- due to vs code angular2-inline plugin formatting problem
          this is rewritten as a function -->
        <auth-message [style.display]="inheritStyleIfTrue(showMessage)">
        </auth-message>
        <ng-content select="button"></ng-content>
      </form>
    </div>
  `
})
export class AuthFormComponent implements AfterContentInit, AfterViewInit {
  showMessage: boolean;

  @ContentChildren(AuthRememberComponent)
  remember: QueryList<AuthRememberComponent>;

  @Output()
  submitted: EventEmitter<User> = new EventEmitter<User>();

  @ViewChild('email') email: ElementRef;

  @ViewChildren(AuthMessageComponent) message: QueryList<AuthMessageComponent>;

  inheritStyleIfTrue(test: boolean) {
    return test ? 'inherit' : 'none';
  }

  constructor(private cd: ChangeDetectorRef) {}

  // this runs before ngAFterViewInit()
  ngAfterContentInit(): void {
    if (this.remember) {
      console.log(this.remember);
      this.remember.forEach(item => {
        item.checked.subscribe(
          (checked: boolean) => (this.showMessage = checked)
        );
      });
    }
  }

  /* note that it is not recommended to mutate the view
   * after the content has been initialized
   * this is to demonstrate the change detection
   */
  ngAfterViewInit(): void {
    this.email.nativeElement.setAttribute('placeholder', 'Enter your email address');
    this.email.nativeElement.classList.add('email');
    this.email.nativeElement.focus();
    if (this.message) {
      this.message.forEach(
        (message: AuthMessageComponent) => (message.days = 30)
      );
    }
    this.cd.detectChanges();
  }

  onSubmit(value: User) {
    this.submitted.emit(value);
  }
}
