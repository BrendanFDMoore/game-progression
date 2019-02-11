import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { ProfileService } from './root/services/profile.service';

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
  ],
  providers: [
    ProfileService,
  ],
  bootstrap: [RootComponent]
})
export class AppModule { }
