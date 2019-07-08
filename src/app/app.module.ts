import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { MailModule } from './mail/mail.module';

import { AppComponent } from './app.component';
import { DashboardModule } from './dashboard/dashboard.module';

export const ROUTES: Routes = [{ path: '**', redirectTo: 'mail/folder/inbox' }];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    MailModule,
    DashboardModule,
    RouterModule.forRoot(ROUTES)
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
