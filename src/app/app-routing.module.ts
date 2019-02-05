import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { GamesComponent } from './games/games.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  // { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
  // { path: 'games', loadChildren: './games/games.module#GamesModule' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'games', component: GamesComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
