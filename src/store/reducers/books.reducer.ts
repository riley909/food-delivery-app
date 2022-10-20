import { createFeatureSelector, createReducer, on } from '@ngrx/store';
import { Book } from '../../app/pages/tabs/books/models/book';
import * as BooksActions from '../actions/books.actions';

export interface BooksState {
  loading: boolean | null;
  books: Book[];
  error: string | null;
}

export const initialState: BooksState = {
  loading: true,
  books: [],
  error: null,
};

export const booksReducer = createReducer<
  BooksState,
  BooksActions.BooksActionUnion
>(
  initialState,
  on(BooksActions.searchBooksSuccessAction, (state, { books }) => ({
    ...state,
    books,
  })),
  on(BooksActions.searchBooksFailureAction, (state, { errorMsg }) => ({
    ...state,
    error: errorMsg,
  })),
);

export const booksSelectFeature = createFeatureSelector<BooksState>('books');
