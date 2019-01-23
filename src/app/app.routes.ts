import { Routes } from '@angular/router';
import { JokeDetailComponent } from './containers/joke-detail/joke-detail.component';
import { JokesComponent } from './containers/jokes/jokes.component';

export const routes: Routes = [{
  path: '',
  redirectTo: 'jokes',
  pathMatch: 'full'
},
{
  path: 'jokes',
  component: JokesComponent
},
{
  path: 'jokes/:jokeId',
  component: JokeDetailComponent
}];
