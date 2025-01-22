import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-counter-output',
  standalone: true,
  imports: [],
  templateUrl: './counter-output.component.html',
  styleUrl: './counter-output.component.scss',
})
export class CounterOutputComponent implements OnInit {
  // @Input() counter: number = 0;
  counter: number = 0;
  constructor(private store: Store<{ configCounter: { counter: number } }>) {}

  ngOnInit(): void {
    this.store.select('configCounter').subscribe((data) => {
      this.counter = data.counter;
    });
  }
}
