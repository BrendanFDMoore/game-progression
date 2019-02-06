import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
console.log('dashboard module file...');

const routes: Routes = [
  { path: '', component: DashboardComponent },
];

@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [ RouterModule ],
})
export class DashboardModule { }
