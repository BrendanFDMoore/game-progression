import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';

import { AppLayoutComponent } from './app-layout/app-layout.component';
import { HeaderComponent } from './app-layout/header/header.component';
import { BodyComponent } from './app-layout/body/body.component';
import { FooterComponent } from './app-layout/footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GamesComponent } from './games/games.component';

@NgModule({
  declarations: [
    AppLayoutComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppLayoutComponent]
})
export class AppModule { }
