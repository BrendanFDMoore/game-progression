import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard.component';
console.log('dashboard module file...');

@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    CommonModule
  ],
  // bootstrap: [DashboardComponent]
})
export class DashboardModule { }
