import { Action, createReducer, on } from '@ngrx/store';
import { Joke } from '../../models';
import * as JokeAPIActions from './api.actions';
import * as JokeUIActions from './ui.actions';

export interface State {
  jokes: Joke[];
  isLoading: boolean;
  error: string;
}

export const jokeFeatureKey = 'joke';

export const initialState: State = {
  jokes: [],
  isLoading: false,
  error: ''
};

const jokeReducer = createReducer(
  initialState,
  on(
    JokeUIActions.appComponentInitialized,
    JokeUIActions.loadAllRequested,
    state => ({ ...state, isLoading: true, error: '' })
  ),
  on(
    JokeAPIActions.loadAllSucceeded,
    JokeAPIActions.loadCategorySucceeded,
    (state, { jokes }) => ({
      ...state,
      jokes,
      isLoading: false
    })
  ),
  on(
    JokeAPIActions.loadAllFailed,
    JokeAPIActions.loadCategoryFailed,
    (state, { error }) => ({
      ...state,
      error,
      isLoading: false
    })
  )
);

export function reducer(state: State | undefined, action: Action) {
  return jokeReducer(state, action);
}
