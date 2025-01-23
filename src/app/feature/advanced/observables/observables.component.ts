import { Component, NgZone, OnInit } from '@angular/core';
import { error } from 'console';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observables',
  standalone: true,
  imports: [],
  templateUrl: './observables.component.html',
  styleUrl: './observables.component.scss',
})
export class ObservablesComponent implements OnInit {
  data: number[] = [];
  count = 0;
  myObservable: any;

  constructor(private ngZone: NgZone) {}

  ngOnInit(): void {
    this.runOutsideAngular();
  }

  runOutsideAngular() {
    this.myObservable = new Observable<number[]>((observer) => {
      this.ngZone.runOutsideAngular(() => {
        setInterval(() => {
          this.count++;
          this.data.push(this.count);
          if (this.count < 6) {
            observer.next(this.data);
          } else {
            observer.error('Array Limit Exceeded');
          }
        }, 1000);
      });
    });
  }

  getData() {
    this.myObservable.subscribe(
      (res: number[]) => {
        console.log(res);
      },
      (error: any) => {
        console.log(error);
      },
      () => {
        console.error('Completed');
      }
    );
  }
}
