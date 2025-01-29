import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-track-by',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './track-by.component.html',
  styleUrl: './track-by.component.scss',
})
export class TrackByComponent {
  users: any[] = [
    { id: 1, name: 'Harry' },
    { id: 2, name: 'Ron' },
    { id: 3, name: 'Hermion' },
    { id: 4, name: 'Snape' },
    { id: 5, name: 'Hagrid' },
  ];

  refresh() {
    this.users = [
      { id: 1, name: 'Harry' },
      { id: 2, name: 'Ron' },
      { id: 4, name: 'Sirius' },
      { id: 5, name: 'Hagrid' },
      { id: 6, name: 'Dumbledor' },
    ];
  }
  trackByUser(index: number, item: any) {
    return item.id;
  }
}
