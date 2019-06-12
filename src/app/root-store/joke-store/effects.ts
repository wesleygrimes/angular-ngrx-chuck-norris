import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
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

  @Effect()
  loadRequestEffect$: Observable<Action> = this.actions$.pipe(
    ofType<featureActions.LoadAction>(featureActions.ActionTypes.LOAD),
    concatMap(_ =>
      this.dataService.getJokes().pipe(
        map(
          jokes =>
            new featureActions.LoadSuccessAction({
              jokes
            })
        ),
        catchError(error => of(new featureActions.LoadFailureAction({ error })))
      )
    )
  );

  @Effect()
  refreshEffect$: Observable<Action> = this.actions$.pipe(
    ofType(featureActions.ActionTypes.REFRESH),
    map(_ => new featureActions.LoadAction())
  );

  @Effect({ dispatch: false })
  navigateToDetailOnSelectEffect$ = this.actions$.pipe(
    ofType(featureActions.ActionTypes.SELECT),
    tap(_ => this.router.navigate(['/jokes', 'detail']))
  );
}
