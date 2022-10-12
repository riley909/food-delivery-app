import { ActionReducerMap } from '@ngrx/store';
import * as counter from './counter.reducer';
import * as books from './books.reducer';

export interface RootState {
  counter: counter.CounterState;
  books: books.BooksState;
}

export const reducers: ActionReducerMap<RootState> = {
  counter: counter.counterReducer,
  books: books.booksReducer,
};
