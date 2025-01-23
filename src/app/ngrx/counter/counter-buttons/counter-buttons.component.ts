import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from '../counter.actions';
import { CounterState } from '../counter.state';

@Component({
  selector: 'app-counter-buttons',
  standalone: true,
  imports: [],
  templateUrl: './counter-buttons.component.html',
  styleUrl: './counter-buttons.component.scss',
})
export class CounterButtonsComponent implements OnInit {
  // @Output() increment = new EventEmitter<void>();
  // @Output() decrement = new EventEmitter<any>();
  // @Output() reset = new EventEmitter<any>();

  constructor(private store: Store<{ counter: CounterState }>) {}
  ngOnInit(): void {}
  onIncrement() {
    // this.increment.emit();
    this.store.dispatch(increment());
  }
  onDecrement() {
    //   this.decrement.emit();
    this.store.dispatch(decrement());
  }
  onReset() {
    // this.reset.emit();
    this.store.dispatch(reset());
  }
}
