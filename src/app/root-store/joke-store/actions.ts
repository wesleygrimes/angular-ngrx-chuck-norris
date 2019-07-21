import { createAction, props } from '@ngrx/store';
import { Joke } from 'src/app/models';

export const createJokeSuccessAction = (actionType: string) =>
  createAction(actionType, props<{ jokes: Joke[] }>());

export const createJokeFailureAction = (actionType: string) =>
  createAction(actionType, props<{ error: any }>());

export const loadAll = createAction('[Jokes Page] Load All');

export const loadAllSuccess = createJokeSuccessAction(
  '[Jokes API] Load All Success'
);

export const loadAllFailure = createJokeFailureAction(
  '[Jokes API] Load All Failure'
);

export const loadCategory = createAction(
  '[Jokes Page] Load Category',
  props<{ category: string }>()
);

export const loadCategorySuccess = createJokeSuccessAction(
  '[Jokes API] Load Category Success'
);

export const loadCategoryFailure = createJokeFailureAction(
  '[Jokes API] Load Category Failure'
);
