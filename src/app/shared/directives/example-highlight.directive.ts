import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appExampleHighlight]',
  standalone: true,
  host: {
    '(click)': 'applyLogic()',
  },
})
export class ExampleHighlightDirective {
  @Input() number: number = 0;
  @Input() divisible: number = 0;

  private el?: ElementRef;

  constructor(el: ElementRef) {
    this.el = el;
    if (this.el) {
      this.el.nativeElement.style.color = '#d21d1d';
    }
  }
  applyLogic() {
    if (this.number % this.divisible === 0) {
      if (this.el) {
        this.el.nativeElement.style.color = '#57a957';
      }
    } else {
      if (this.el) {
        this.el.nativeElement.style.color = '#d21d1d';
      }
    }
  }
}
