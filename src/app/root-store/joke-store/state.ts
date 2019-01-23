import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Joke } from '../../models';

export const featureAdapter: EntityAdapter<
  Joke
> = createEntityAdapter<Joke>({
  selectId: model => model.id,
  sortComparer: (a: Joke, b: Joke): number =>
    b.id.toString().localeCompare(a.id.toString())
});

export interface State extends EntityState<Joke> {
  isLoading?: boolean;
  error?: any;
}

export const initialState: State = featureAdapter.getInitialState(
  {
    isLoading: false,
    error: null
  }
);
