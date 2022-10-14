import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of, EMPTY as empty } from 'rxjs';
import { catchError, debounceTime, map, switchMap } from 'rxjs/operators';
import { Book } from 'src/app/pages/tabs/books/models/book';
import { GoogleBooksService } from 'src/app/services/google-books.service';
import * as BooksActions from '../actions/books.actions';

@Injectable()
export class BookSearchEffects {
  searchBooks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BooksActions.searchBooksAction),
      debounceTime(800),
      switchMap(({ query }) => {
        if (query === '') {
          return empty;
        }
        return this.bookService.searchBooks(query).pipe(
          map((books: Book[]) =>
            BooksActions.searchBooksSuccessAction({ books }),
          ),
          catchError((err) =>
            of(
              BooksActions.searchBooksFailureAction({ errorMsg: err.message }),
            ),
          ),
        );
      }),
    ),
  );

  constructor(
    private actions$: Actions,
    private bookService: GoogleBooksService,
  ) {}
}
