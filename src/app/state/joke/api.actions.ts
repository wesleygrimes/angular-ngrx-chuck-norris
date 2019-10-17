import { createAction, props } from '@ngrx/store';
import { Joke } from 'src/app/models';

export const loadAllSucceeded = createAction(
  '[Jokes API] Load All Succeeded',
  props<{ jokes: Joke[] }>()
);

export const loadAllFailed = createAction(
  '[Jokes API] Load All Failed',
  props<{ error: string }>()
);

export const loadCategorySucceeded = createAction(
  '[Jokes API] Load Category Succeeded',
  props<{ jokes: Joke[] }>()
);

export const loadCategoryFailed = createAction(
  '[Jokes API] Load Category Failed',
  props<{ error: string }>()
);
