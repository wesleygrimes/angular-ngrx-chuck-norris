import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  jokeId: number;
  joke$: Observable<Joke>;
  error$: Observable<any>;
  isLoading$: Observable<boolean>;

  constructor(private route: ActivatedRoute, private store$: Store<RootStoreState.State>) {
    const jokeIdParam = this.route.snapshot.paramMap.get('jokeId');
    this.jokeId = parseInt(jokeIdParam, 10);
  }

  ngOnInit() {
    this.joke$ = this.store$.pipe(
      select(JokeStoreSelectors.selectJokeById(this.jokeId))
    );

    this.error$ = this.store$.pipe(
      select(JokeStoreSelectors.selectJokeError)
    );

    this.isLoading$ = this.store$.pipe(
      select(JokeStoreSelectors.selectJokeIsLoading)
    );
  }
}
