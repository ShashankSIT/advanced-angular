import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterState } from '../counter.state';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-counter-output',
  standalone: true,
  imports: [],
  templateUrl: './counter-output.component.html',
  styleUrl: './counter-output.component.scss',
})
export class CounterOutputComponent implements OnInit, OnDestroy {
  // @Input() counter: number = 0;
  counter: number = 0;
  counter$!: Observable<{ counter: number }>;
  counterSubscription!: Subscription;
  constructor(private store: Store<{ configCounter: CounterState }>) {}

  ngOnInit(): void {
    this.counterSubscription = this.store
      .select('configCounter')
      .subscribe((data) => {
        this.counter = data.counter;
      });

    this.counter$ = this.store.select('configCounter');
  }

  ngOnDestroy(): void {
    if (this.counterSubscription) {
      this.counterSubscription.unsubscribe();
    }
  }
}
