import { Component, OnInit } from '@angular/core';
import { createSelector, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { RootState } from 'src/store/reducers';
import * as booksActions from '../../../../store/actions/books.actions';
import { Book } from './models/book';

const selectBooks = (state: RootState) => state.books;
const booksSelector = createSelector(selectBooks, (state) => state.books);
// const booksSelector = createSelector(
//   createFeatureSelector('books'),
//   (state: BooksState) => state.books
// );

@Component({
  selector: 'app-books',
  templateUrl: './books.page.html',
  styleUrls: ['./books.page.scss'],
})
export class BooksPage implements OnInit {
  books$: Observable<Book[]>;
  query: string;
  booksList: Book[];

  constructor(private store$: Store<RootState>) {
    this.books$ = store$.select(booksSelector);
  }

  ngOnInit() {}

  onBookSearchChange(event) {
    this.query = event.detail.value;
    this.store$.dispatch(booksActions.searchBooksAction({ query: this.query }));

    console.log(this.books$);
  }
}
