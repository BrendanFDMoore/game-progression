import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

// store
import { effects, reducers } from './store';

// services
import * as fromServices from './services';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('user', reducers ),
    EffectsModule.forFeature(effects),
  ],
  providers: [
    fromServices.ProfileService,
  ],
})
export class UserModule { }


