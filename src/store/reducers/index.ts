import { ActionReducerMap } from '@ngrx/store';
import * as counter from './counter.reducer';

export interface State {
  counter: counter.CounterState;
}

export const reducers: ActionReducerMap<State> = {
  counter: counter.counterReducer,
};
