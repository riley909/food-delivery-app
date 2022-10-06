import { Action } from '@ngrx/store';
import { createAction } from '@ngrx/store';

export enum ActionTypes {
  increment = '[Counter Component] Increment',
  decrement = '[Counter Component], Decrement',
  reset = '[Counter Component], Reset',
}

export class Increment implements Action {
  readonly type = ActionTypes.increment;

  // constructor(public payload: { val: number; status: string }) {}
}

export class Decrement implements Action {
  readonly type = ActionTypes.decrement;
}

export class Reset implements Action {
  readonly type = ActionTypes.reset;
}

export type CounterActionUnion = Increment | Decrement | Reset;
