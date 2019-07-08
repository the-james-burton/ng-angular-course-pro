import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './containers/dashboard/dashboard.component';

export const ROUTES: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(ROUTES)],
  declarations: [DashboardComponent]
})
export class DashboardModule {}
