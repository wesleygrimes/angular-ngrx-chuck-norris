import { Action, createReducer, on } from '@ngrx/store';
import * as featureActions from './actions';
import { featureAdapter, initialState, State } from './state';

const featureReducer = createReducer(
  initialState,
  on(featureActions.load, state => ({
    ...state,
    isLoading: true,
    error: null
  })),
  on(featureActions.loadSuccess, (state, { jokes }) =>
    featureAdapter.addAll(jokes, {
      ...state,
      isLoading: false,
      error: null
    })
  ),
  on(featureActions.loadFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    error
  })),
  on(featureActions.select, (state, { id }) => ({
    ...state,
    selectedJokeId: id
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return featureReducer(state, action);
}
