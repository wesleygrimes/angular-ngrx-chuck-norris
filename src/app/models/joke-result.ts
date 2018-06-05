import { Joke } from './joke';

export interface JokeResult {
  type: string;
  value: Joke[];
}