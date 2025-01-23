import { Component, OnInit } from '@angular/core';
import { error } from 'console';

@Component({
  selector: 'app-promises',
  standalone: true,
  imports: [],
  templateUrl: './promises.component.html',
  styleUrl: './promises.component.scss',
})
export class PromisesComponent implements OnInit {
  isOnline: boolean = false;
  myPromise: any;
  constructor() {}

  ngOnInit(): void {
    this.getStatus();
    this.myPromise.then(
      (res: any) => {
        console.log(res);
        this.checkLogic();
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  checkLogic() {
    console.log('check logic called');
  }

  getStatus() {
    console.log('get status called');
    this.myPromise = new Promise<boolean>((resolve, reject) => {
      setTimeout(() => {
        console.log('setTimeout Called');
        this.isOnline = true;
        resolve(this.isOnline);
        // reject("Pomise Rejected"); // If you want to capture the Error
      }, 5000);
    });
  }

  onCheckboxChange(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.isOnline = inputElement.checked;
  }
}
