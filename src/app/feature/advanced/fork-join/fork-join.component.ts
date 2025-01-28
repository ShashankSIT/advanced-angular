import { Component, NgZone, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForkJoinService } from '../../../shared/services/fork-join.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-fork-join',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './fork-join.component.html',
  styleUrl: './fork-join.component.scss',
})
export class ForkJoinComponent implements OnInit {
  value2: number = 0;
  value3: number = 0;
  value1: number = 0;
  useForkJoin: boolean = false;

  constructor(private ngZone: NgZone, private service: ForkJoinService) {}

  ngOnInit() {
    // this.runOutsideAngular();
    this.getData();

    // Simulate a 3-second load time
  }
  getAllData() {
    this.value1 = this.value2 = this.value3 = 0;
    this.service.getAllData().subscribe((res) => {
      this.value1 = res[0];
      this.value2 = res[1];
      this.value3 = res[2];
    });
  }
  getData() {
    this.value1 = this.value2 = this.value3 = 0;
    this.service.getValueOneData().subscribe((data) => {
      this.value1 = data;
    });
    this.service.getValueTwoData().subscribe((data) => {
      this.value2 = data;
    });
    this.service.getValueThreeData().subscribe((data) => {
      this.value3 = data;
    });
  }

  // runOutsideAngular() {
  //   this.ngZone.runOutsideAngular(() => {
  //     setTimeout(() => {
  //       this.ngZone.run(() => {
  //         this.value1 = 0;
  //         this.value2 = 20;
  //         this.value3 = 30;
  //         console.log(this.value1);
  //       });
  //     }, 3000);
  //   });
  // }
}
