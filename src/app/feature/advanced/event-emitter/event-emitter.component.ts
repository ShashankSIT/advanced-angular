import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-event-emitter',
  standalone: true,
  imports: [],
  templateUrl: './event-emitter.component.html',
  styleUrl: './event-emitter.component.scss',
})
export class EventEmitterComponent {
  @Output() eventToParent = new EventEmitter();

  eventEmitToParent() {
    this.eventToParent.emit();
  }
}
