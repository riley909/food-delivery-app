/* eslint-disable prefer-arrow/prefer-arrow-functions */
import * as Counter from '../actions/counter.actions';

export type CounterState = number;

export const initialState: CounterState = 0;

export function counterReducer(
  state = initialState,
  action: Counter.CounterActionUnion
): CounterState {
  switch (action.type) {
    case Counter.ActionTypes.increment:
      return state + 1;
    case Counter.ActionTypes.decrement:
      return state - 1;
    case Counter.ActionTypes.reset:
      return 0;
    default:
      return state;
  }
}
