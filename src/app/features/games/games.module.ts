import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { GamesComponent } from './components/games/games.component';

console.log('games module file...');

const routes: Routes = [
  { path: '', component: GamesComponent },
];

@NgModule({
  declarations: [
    GamesComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [ RouterModule ],
})
export class GamesModule { }
