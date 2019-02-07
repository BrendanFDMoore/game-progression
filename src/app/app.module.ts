import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';

import { RootComponent } from './root/components/root/root.component';
import { HeaderComponent } from './root/components/header/header.component';
import { BodyComponent } from './root/components/body/body.component';
import { FooterComponent } from './root/components/footer/footer.component';

// import {
//   RootComponent,
//   HeaderComponent,
//   BodyComponent,
//   FooterComponent,
// } from './root/components';

@NgModule({
  declarations: [
    RootComponent,
    HeaderComponent,
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
