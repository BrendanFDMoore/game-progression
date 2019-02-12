import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamesComponent } from './components/games/games.component';

import { GamesRoutingModule } from './games-routing.module';

@NgModule({
  declarations: [
    GamesComponent,
  ],
  imports: [
    CommonModule,
    GamesRoutingModule
  ],
})
export class GamesModule { }
