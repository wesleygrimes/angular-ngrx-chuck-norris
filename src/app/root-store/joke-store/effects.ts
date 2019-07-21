import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { JokeService } from '../../services/';
import * as featureActions from './actions';

@Injectable()
export class JokeStoreEffects {
  constructor(private jokeService: JokeService, private actions$: Actions) {}

  loadAll$ = createEffect(() =>
    this.actions$.pipe(
      ofType(featureActions.loadAll),
      mergeMap(() =>
        this.jokeService.getJokes().pipe(
          map(jokes => featureActions.loadAllSuccess({ jokes })),
          catchError(error => of(featureActions.loadAllFailure({ error })))
        )
      )
    )
  );

  loadCategory$ = createEffect(() =>
    this.actions$.pipe(
      ofType(featureActions.loadCategory),
      mergeMap(({ category }) =>
        this.jokeService.getJokesByCategory(category).pipe(
          map(jokes => featureActions.loadCategorySuccess({ jokes })),
          catchError(error => of(featureActions.loadCategoryFailure({ error })))
        )
      )
    )
  );

  showAlertOnFailure$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(featureActions.loadAllFailure),
        map(({ error }) => window.alert(error.message))
      ),
    { dispatch: false }
  );
}
