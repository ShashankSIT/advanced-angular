import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { ExampleHighlightDirective } from '../../core/directives/example-highlight.directive';

@Component({
  selector: 'app-directive-example',
  standalone: true,
  imports: [CommonModule, ExampleHighlightDirective],
  templateUrl: './directive-example.component.html',
  styleUrl: './directive-example.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class DirectiveExampleComponent {
  count: number = 111;
  isClicked: boolean = false;

  ngOnInit(): void {}

  onClick() {
    this.isClicked = !this.isClicked;
  }

  increaseCount() {
    this.count += 1; // Increase the counter
  }

  decreaseCount() {
    this.count -= 1; // Decrease the counter
  }
}
