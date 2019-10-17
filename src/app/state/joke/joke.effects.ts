import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { JokeService } from '../../services';
import * as JokeAPIActions from './api.actions';
import * as JokeUIActions from './ui.actions';

@Injectable()
export class JokeStoreEffects {
  constructor(private jokeService: JokeService, private actions$: Actions) {}

  loadAllJokes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        JokeUIActions.appComponentInitialized,
        JokeUIActions.loadAllRequested
      ),
      mergeMap(() =>
        this.jokeService.getJokes().pipe(
          map(jokes => JokeAPIActions.loadAllSucceeded({ jokes })),
          catchError(error =>
            of(JokeAPIActions.loadAllFailed({ error: error.message }))
          )
        )
      )
    )
  );

  // loadCategory
  loadCategoryJokes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(JokeUIActions.loadCategoryRequested),
      mergeMap(action =>
        this.jokeService.getJokesByCategory(action.category).pipe(
          map(jokes => JokeAPIActions.loadCategorySucceeded({ jokes })),
          catchError(error =>
            of(JokeAPIActions.loadCategoryFailed({ error: error.message }))
          )
        )
      )
    )
  );

  // showAlertOnFailure
  showAlertOnFailure$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(JokeAPIActions.loadAllFailed),
        tap(({ error }) => window.alert(error))
      ),
    { dispatch: false }
  );
}
