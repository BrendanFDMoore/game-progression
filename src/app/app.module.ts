import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';

import {
  RootComponent,
  HeaderComponent,
  MenuComponent,
  BodyComponent,
  FooterComponent,
} from './root/components';

@NgModule({
  declarations: [
    RootComponent,
    HeaderComponent,
    MenuComponent,
    BodyComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class AppModule { }
