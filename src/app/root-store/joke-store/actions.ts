import { createAction, props } from '@ngrx/store';
import { Joke } from '../../models';

export const load = createAction('[App Component] Load');

export const loadFailure = createAction(
  '[Jokes API] Load Failure',
  props<{ error: string }>()
);

export const loadSuccess = createAction(
  '[Jokes API] Load Success',
  props<{ jokes: Joke[] }>()
);

export const refresh = createAction('[Jokes Page] Refresh');

export const select = createAction(
  '[Jokes Page] Select',
  props<{ id: number }>()
);
