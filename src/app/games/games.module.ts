import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamesComponent } from './games.component';

console.log('games module file...');

@NgModule({
  declarations: [
    GamesComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class GamesModule { }
