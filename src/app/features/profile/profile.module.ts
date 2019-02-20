import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  ProfileComponent,
  ProfileEditComponent,
} from './components';
// import { ProfileService } from './services/profile.service';

import { ProfileRoutingModule } from './profile-routing.module';

@NgModule({
  declarations: [
    ProfileComponent,
    ProfileEditComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ProfileRoutingModule
  ],
  // providers: [
  //   ProfileService,
  // ],
})
export class ProfileModule { }
