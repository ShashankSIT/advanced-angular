import { Injectable } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ForkJoinService {
  constructor() {}

  getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  getValueOneData() {
    const randomDelay = this.getRandomInt(2000, 4500); // Random delay between 2000ms to 4500ms
    const randomValue = this.getRandomInt(1, 100); // Random number between 1 and 100

    return new Observable<number>((observer) => {
      setTimeout(() => {
        observer.next(randomValue);
        observer.complete();
      }, randomDelay);
    });
  }

  getValueTwoData() {
    const randomDelay = this.getRandomInt(2000, 4500); // Random delay between 2000ms to 4500ms
    const randomValue = this.getRandomInt(1, 100); // Random number between 1 and 100

    return new Observable<number>((observer) => {
      setTimeout(() => {
        observer.next(randomValue);
        observer.complete();
      }, randomDelay);
    });
  }

  getValueThreeData() {
    const randomDelay = this.getRandomInt(2000, 4500); // Random delay between 2000ms to 4500ms
    const randomValue = this.getRandomInt(1, 100); // Random number between 1 and 100

    return new Observable<number>((observer) => {
      setTimeout(() => {
        observer.next(randomValue);
        observer.complete();
      }, randomDelay);
    });
  }

  getAllData() {
    let observableOne = new Observable<number>((observer) => {
      const randomDelay = this.getRandomInt(2000, 4500);
      setTimeout(() => {
        const randomValue = this.getRandomInt(1, 100);
        observer.next(randomValue);
        observer.complete();
      }, randomDelay);
    });

    let observableTwo = new Observable<number>((observer) => {
      const randomDelay = this.getRandomInt(2000, 4500);
      setTimeout(() => {
        const randomValue = this.getRandomInt(1, 100);
        observer.next(randomValue);
        observer.complete();
      }, randomDelay);
    });

    let observableThree = new Observable<number>((observer) => {
      const randomDelay = this.getRandomInt(2000, 4500);
      setTimeout(() => {
        const randomValue = this.getRandomInt(1, 100);
        observer.next(randomValue);
        observer.complete();
      }, randomDelay);
    });

    return forkJoin([observableOne, observableTwo, observableThree]);
  }
}
