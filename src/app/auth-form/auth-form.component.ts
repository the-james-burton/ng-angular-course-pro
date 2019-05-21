import {
  Component,
  Output,
  EventEmitter,
  ContentChildren,
  QueryList,
  AfterContentInit,
  ViewChild,
  AfterViewInit
} from "@angular/core";

import { AuthRememberComponent } from "./auth-remember.component";
import { AuthMessageComponent } from "./auth-message.component";

import { User } from "./auth-form.interface";

@Component({
  selector: "auth-form",
  template: `
    <div>
      <form (ngSubmit)="onSubmit(form.value)" #form="ngForm">
        <ng-content select="h3"></ng-content>
        <label>
          Email address
          <input type="email" name="email" ngModel />
        </label>
        <label>
          Password
          <input type="password" name="password" ngModel />
        </label>
        <ng-content select="auth-remember"></ng-content>
        <!-- this appears to confuse the angular2-inline plugin
         and causes formatting problems in vs code -->
        <auth-message [style.display]="showMessage ? 'inherit' : 'none'">
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

  @ViewChild(AuthMessageComponent) message: AuthMessageComponent;

  ngAfterViewInit(): void {
    console.log(this.message);
  }

  ngAfterContentInit(): void {
    if (this.message) {
      this.message.days = 30;
    }
    if (this.remember) {
      console.log(this.remember);
      this.remember.forEach(item => {
        item.checked.subscribe(
          (checked: boolean) => (this.showMessage = checked)
        );
      });
    }
  }

  onSubmit(value: User) {
    this.submitted.emit(value);
  }
}
