import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import {
  ProfileComponent,
  ProfileEditComponent,
} from './components';
import { ProfileService } from './services/profile.service';

import { ProfileRoutingModule } from './profile-routing.module';

@NgModule({
  declarations: [
    ProfileComponent,
    ProfileEditComponent,
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule
  ],
  providers: [
    ProfileService,
  ],
})
export class ProfileModule { }
