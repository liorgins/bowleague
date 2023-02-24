import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeaderboardComponent } from './components/leaderboard/leaderboard.component';
import { MainGameComponent } from './components/main-game/main-game.component';

const routes: Routes = [
  { path: '', component: LeaderboardComponent},
  { path: 'game', component: MainGameComponent},
  { path: '**', redirectTo: '' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
