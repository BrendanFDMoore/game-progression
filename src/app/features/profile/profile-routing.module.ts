import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
  ProfileComponent,
  ProfileEditComponent,
} from './components';

const routes: Routes = [
  { path: 'edit', component: ProfileEditComponent },
  { path: '', component: ProfileComponent },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class ProfileRoutingModule {}
