import { Action } from '@ngrx/store';
import { Joke } from '../../models';

export enum ActionTypes {
  LOAD_REQUEST = '[Joke] Load Request',
  LOAD_FAILURE = '[Joke] Load Failure',
  LOAD_SUCCESS = '[Joke] Load Success'
}

export class LoadRequestAction implements Action {
  readonly type = ActionTypes.LOAD_REQUEST;
}

export class LoadFailureAction implements Action {
  readonly type = ActionTypes.LOAD_FAILURE;
  constructor(public payload: { error: string }) {}
}

export class LoadSuccessAction implements Action {
  readonly type = ActionTypes.LOAD_SUCCESS;
  constructor(public payload: { items: Joke[] }) {}
}

export type Actions = LoadRequestAction | LoadFailureAction | LoadSuccessAction;