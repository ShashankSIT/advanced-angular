import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-advance-concept',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './advance-concept.component.html',
  styleUrl: './advance-concept.component.scss',
})
export class AdvanceConceptComponent {
  subscribeToChildEmitter(componentRef: any) {
    componentRef.eventToParent.subscribe((res: any) => {
      this.parentCalled();
    });
  }
  parentCalled() {
    alert('Parent Component Called');
  }
}
