import { Action, createReducer, on } from '@ngrx/store';
import * as featureActions from './actions';
import { initialState, State } from './state';

const featureReducer = createReducer(
  initialState,
  on(featureActions.loadAll, state => ({
    ...state,
    isLoading: true,
    error: null
  })),
  on(featureActions.loadAllSuccess, (state, { jokes }) => ({
    ...state,
    isLoading: false,
    error: null,
    jokes
  })),
  on(featureActions.loadAllFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    error
  })),
  on(featureActions.loadCategory, state => ({
    ...state,
    isLoading: true,
    error: null
  })),
  on(featureActions.loadCategorySuccess, (state, { jokes }) => ({
    ...state,
    isLoading: false,
    error: null,
    jokes
  })),
  on(featureActions.loadCategoryFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    error
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return featureReducer(state, action);
}
