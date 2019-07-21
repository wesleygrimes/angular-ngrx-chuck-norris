import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Joke } from './models';
import {
  JokeStoreActions,
  JokeStoreSelectors,
  RootStoreState
} from './root-store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  jokes$: Observable<Joke[]>;
  error$: Observable<any>;
  isLoading$: Observable<boolean>;

  constructor(private store: Store<RootStoreState.State>) {}

  ngOnInit() {
    this.jokes$ = this.store.pipe(select(JokeStoreSelectors.selectJokes));
    this.isLoading$ = this.store.pipe(
      select(JokeStoreSelectors.selectJokesIsLoading)
    );
    this.error$ = this.store.pipe(select(JokeStoreSelectors.selectJokesError));
  }

  onLoadAll() {
    this.store.dispatch(JokeStoreActions.loadAll());
  }

  onLoadCategory(category: string) {
    this.store.dispatch(JokeStoreActions.loadCategory({ category }));
  }
}
