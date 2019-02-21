import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment'; // Angular CLI environemnt

import { EffectsModule } from '@ngrx/effects';

import { AppRoutingModule } from './app-routing.module';

import {
  RootComponent,
  HeaderComponent,
  MenuComponent,
  ProfileCardComponent,
  BodyComponent,
  FooterComponent,
} from './root/components';
import { UserModule } from './modules/user/user.module';

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
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    UserModule,
  ],
  // providers: [
  //   ProfileService,
  // ],
  bootstrap: [RootComponent]
})
export class AppModule { }
