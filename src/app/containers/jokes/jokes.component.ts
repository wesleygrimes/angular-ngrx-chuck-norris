import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Joke } from '../../models';

import {
  RootStoreState,
  JokeStoreActions,
  JokeStoreSelectors
} from '../../root-store';

@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.css']
})
export class JokesComponent implements OnInit {
  jokes$: Observable<Joke[]>;
  error$: Observable<any>;
  isLoading$: Observable<boolean>;

  constructor(private store$: Store<RootStoreState.State>) { }

  ngOnInit() {
    this.jokes$ = this.store$.select(
      JokeStoreSelectors.selectAllJokeItems
    );

    this.error$ = this.store$.select(
      JokeStoreSelectors.selectJokeError
    );

    this.isLoading$ = this.store$.select(
      JokeStoreSelectors.selectJokeIsLoading
    );

    this.store$.dispatch(
      new JokeStoreActions.LoadRequestAction()
    );
  }

  onRefresh() {
    this.store$.dispatch(
      new JokeStoreActions.LoadRequestAction()
    );
  }

}