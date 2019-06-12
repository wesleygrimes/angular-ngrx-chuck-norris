import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, concatMap, map, tap } from 'rxjs/operators';
import { DataService } from '../../services/data.service';
import * as featureActions from './actions';

@Injectable()
export class JokeStoreEffects {
  constructor(
    private dataService: DataService,
    private actions$: Actions,
    private router: Router
  ) {}

  loadRequestEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(featureActions.load),
      concatMap(_ =>
        this.dataService.getJokes().pipe(
          map(jokes =>
            featureActions.loadSuccess({
              jokes
            })
          ),
          catchError(error => of(featureActions.loadFailure({ error })))
        )
      )
    )
  );

  refreshEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(featureActions.refresh),
      map(_ => featureActions.load())
    )
  );

  navigateToDetailOnSelectEffect$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(featureActions.select),
        tap(_ => this.router.navigate(['/jokes', 'detail']))
      ),
    { dispatch: false }
  );
}
