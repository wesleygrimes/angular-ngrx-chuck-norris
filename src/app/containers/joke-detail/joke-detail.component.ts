import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Joke } from '../../models';
import { JokeStoreSelectors, RootStoreState } from '../../root-store';

@Component({
  selector: 'app-joke-detail',
  templateUrl: './joke-detail.component.html',
  styleUrls: ['./joke-detail.component.css']
})
export class JokeDetailComponent implements OnInit {
  joke$: Observable<Joke>;
  error$: Observable<any>;
  isLoading$: Observable<boolean>;

  constructor(private store: Store<RootStoreState.State>) {}

  ngOnInit() {
    this.joke$ = this.store.pipe(select(JokeStoreSelectors.selectCurrentJoke));

    this.error$ = this.store.pipe(select(JokeStoreSelectors.selectJokeError));

    this.isLoading$ = this.store.pipe(
      select(JokeStoreSelectors.selectJokeIsLoading)
    );
  }
}
