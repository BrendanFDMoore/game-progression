import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment'; // Angular CLI environemnt

import { EffectsModule } from '@ngrx/effects';

import { AppRoutingModule } from './app-routing.module';
import { ProfileService } from './root/services/profile.service';

import { profileReducer, initialProfileState } from './features/profile/services/profile.service';
import { ProfileEffects } from './features/profile/services/profile.service';

import {
  RootComponent,
  HeaderComponent,
  MenuComponent,
  ProfileCardComponent,
  BodyComponent,
  FooterComponent,
} from './root/components';

@NgModule({
  declarations: [
    RootComponent,
    HeaderComponent,
    MenuComponent,
    ProfileCardComponent,
    BodyComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ profile: profileReducer }),
    EffectsModule.forRoot([ProfileEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
  ],
  providers: [
    ProfileService,
  ],
  bootstrap: [RootComponent]
})
export class AppModule { }
