import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IgdbResultsComponent } from './components/igdb-results/igdb-results.component';
import { GamesListComponent } from './components/games-list/games-list.component';
import { GameDetailsComponent } from './components/game-details/game-details.component';
import { CoverComponent } from './components/cover/cover.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { MissingComponent } from './components/missing/missing.component';

const routes: Routes = [
  { path: '', component: CoverComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'backlog', component: GamesListComponent, pathMatch: 'full' },
  { path: 'games', component: IgdbResultsComponent },
  {
    path: 'games/search',
    component: IgdbResultsComponent,
    runGuardsAndResolvers: 'always',
  },
  { path: 'games/platforms/:platformId', component: IgdbResultsComponent },
  { path: 'games/genres/:genreId', component: IgdbResultsComponent },
  { path: 'games/:id', component: GameDetailsComponent },
  { path: '**', component: MissingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
