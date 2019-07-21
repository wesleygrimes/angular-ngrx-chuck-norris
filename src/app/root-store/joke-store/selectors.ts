import { createSelector } from '@ngrx/store';
import { State as RootState } from '../state';
import { State as JokesState } from './state';

export const selectFeature = (state: RootState) => state.joke;

export const selectJokes = createSelector(
  selectFeature,
  (state: JokesState) => state.jokes
);

export const selectJokesIsLoading = createSelector(
  selectFeature,
  (state: JokesState) => state.isLoading || false
);

export const selectJokesError = createSelector(
  selectFeature,
  (state: JokesState) => state.error || null
);
