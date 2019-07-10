import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  RouterModule,
  Routes,
  PreloadingStrategy,
  Route
} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { MailModule } from './mail/mail.module';

import { AppComponent } from './app.component';
import { Observable, of } from 'rxjs';

export const ROUTES: Routes = [
  {
    path: 'dashboard',
    data: { preload: true },
    loadChildren: './dashboard/dashboard.module#DashboardModule'
  },
  { path: '**', redirectTo: 'mail/folder/inbox' }
];

export class CustomPreload implements PreloadingStrategy {
  preload(route: Route, fn: () => Observable<any>): Observable<any> {
    // different from course - of is imported function not static function...
    return route.data && route.data.preload ? fn() : of(null);
  }
}

@NgModule({
  declarations: [AppComponent],
  providers: [CustomPreload],
  imports: [
    BrowserModule,
    HttpClientModule,
    MailModule,
    RouterModule.forRoot(ROUTES, { preloadingStrategy: CustomPreload })
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
