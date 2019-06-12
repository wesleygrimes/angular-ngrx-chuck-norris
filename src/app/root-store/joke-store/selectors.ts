import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Joke } from '../../models';
import { featureAdapter, State } from './state';

export const selectJokeState = createFeatureSelector<State>('joke');

export const selectAllJokeItems: (
  state: object
) => Joke[] = featureAdapter.getSelectors(selectJokeState).selectAll;

const selectSelectedJokeId = createSelector(
  selectJokeState,
  (state: State): number => state.selectedJokeId
);

export const selectCurrentJoke = createSelector(
  selectAllJokeItems,
  selectSelectedJokeId,
  (allJokes: Joke[], selectedJokeId: number) => {
    if (allJokes && selectedJokeId) {
      return allJokes.find(p => p.id === selectedJokeId);
    } else {
      return null;
    }
  }
);

export const selectJokeError = createSelector(
  selectJokeState,
  (state: State): any => state.error
);

export const selectJokeIsLoading = createSelector(
  selectJokeState,
  (state: State): boolean => state.isLoading
);
