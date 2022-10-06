import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  decrementAction,
  incrementAction,
  resetAction,
} from 'src/store/actions/counter.actions';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
})
export class CounterComponent {
  count$: Observable<number>;

  constructor(private store: Store<{ counter }>) {
    // Connect `this.count$` stream to the current store `count` state
    this.count$ = store.select('counter');
  }

  increment() {
    this.store.dispatch(incrementAction());
  }
  decrement() {
    this.store.dispatch(decrementAction());
  }
  reset() {
    this.store.dispatch(resetAction());
  }
}
