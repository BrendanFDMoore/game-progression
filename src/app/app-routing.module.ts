import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', loadChildren: './features/dashboard/dashboard.module#DashboardModule' },
  { path: 'games', loadChildren: './features/games/games.module#GamesModule' },
  { path: 'my-profile', loadChildren: './features/profile/profile.module#ProfileModule' },
  { path: '**', redirectTo: '/'},
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
