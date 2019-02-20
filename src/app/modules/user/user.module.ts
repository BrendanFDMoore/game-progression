import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

// import { ProfileService } from './services/profile.service';

// store
import { effects, reducers } from './store';

// services
import * as fromServices from './services';

// import { ProfileRoutingModule } from './profile-routing.module';

@NgModule({
  // declarations: [
  //   // ProfileComponent,
  //   // ProfileEditComponent,
  // ],
  imports: [
    CommonModule,
    // FormsModule,
    // ReactiveFormsModule,
    // ProfileRoutingModule,
    StoreModule.forFeature('user', reducers ),
    EffectsModule.forFeature(effects),
  ],
  providers: [
    fromServices.ProfileService,
  ],
})
export class UserModule { }


