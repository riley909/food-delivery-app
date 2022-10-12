import { createAction, props } from '@ngrx/store';
import { Book } from 'src/app/pages/tabs/books/models/book';

export enum ActionTypes {
  searchBooks = '[Books] Search Books',
  getBookById = '[Books] Get Book By Id',
  searchBooksSuccess = '[Books/API] Search Books Success',
  searchBooksFailure = '[Books/API] Search Books Failure',
}

export const searchBooksAction = createAction(
  ActionTypes.searchBooks,
  props<{ query: string }>()
);
export const getBookByIdAction = createAction(
  ActionTypes.getBookById,
  props<{ volumeId: string }>()
);

export const searchBooksSuccessAction = createAction(
  ActionTypes.searchBooksSuccess,
  props<{ books: Book[] }>()
);

export const searchBooksFailureAction = createAction(
  ActionTypes.searchBooksFailure,
  props<{ errorMsg: string }>()
);

export type BooksActionUnion =
  | typeof searchBooksAction
  | typeof getBookByIdAction
  | typeof searchBooksSuccessAction
  | typeof searchBooksFailureAction;
