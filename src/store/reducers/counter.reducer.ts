import { createReducer, on } from '@ngrx/store';
import {
  decrementAction,
  incrementAction,
  resetAction,
} from '../actions/counter.actions';

export const counterState = 0;

export const counterReducer = createReducer(
  counterState,
  on(incrementAction, (state) => state + 1),
  on(decrementAction, (state) => state - 1),
  on(resetAction, (state) => 0)
);
