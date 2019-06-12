import { Action } from '@ngrx/store';
import { Joke } from '../../models';

export enum ActionTypes {
  LOAD = '[Jokes Page] Load',
  LOAD_FAILURE = '[Jokes API] Load Failure',
  LOAD_SUCCESS = '[Jokes API] Load Success',
  REFRESH = '[Jokes Page] Refresh',
  SELECT = '[Jokes Page] Select'
}

export class LoadAction implements Action {
  readonly type = ActionTypes.LOAD;
}

export class LoadFailureAction implements Action {
  readonly type = ActionTypes.LOAD_FAILURE;
  constructor(public payload: { error: string }) {}
}

export class LoadSuccessAction implements Action {
  readonly type = ActionTypes.LOAD_SUCCESS;
  constructor(public payload: { jokes: Joke[] }) {}
}

export class RefreshAction implements Action {
  readonly type = ActionTypes.REFRESH;
}

export class SelectAction implements Action {
  readonly type = ActionTypes.SELECT;
  constructor(public payload: { id: number }) {}
}

export type Actions =
  | LoadAction
  | LoadFailureAction
  | LoadSuccessAction
  | RefreshAction
  | SelectAction;
