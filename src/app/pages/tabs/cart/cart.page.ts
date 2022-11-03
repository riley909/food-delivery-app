import { Component, OnInit } from '@angular/core';
import { createSelector, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { RootState } from 'src/store/reducers';
import { Book } from '../books/models/book';
import * as booksActions from '../../../../store/actions/books.actions';

const selectBooks = (state: RootState) => state.books;
const booksSelector = createSelector(selectBooks, (state) => state.books);

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  books$: Observable<Book[]>;
  constructor(private store$: Store<RootState>) {
    this.books$ = store$.select(booksSelector);
  }

  ngOnInit() {}
}
