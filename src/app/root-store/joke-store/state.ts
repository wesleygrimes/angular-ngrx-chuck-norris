import { Joke } from 'src/app/models';

export interface State {
  jokes: Joke[];
  isLoading?: boolean;
  error?: any;
}

export const initialState: State = {
  jokes: null,
  isLoading: false,
  error: null
};
