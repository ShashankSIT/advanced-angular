import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-dom-sanitization',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './dom-sanitization.component.html',
  styleUrl: './dom-sanitization.component.scss',
})
export class DomSanitizationComponent {
  constructor(private sanitizer: DomSanitizer) {}

  searchText: string = '';
  resultText: SafeHtml | string = '';
  sanitize: boolean = false;

  svgCode: string = `<svg width="100%" height="150" xmlns="http://www.w3.org/2000/svg">
  <rect
    x="45"
    y="18"
    width="205"
    height="45"
    style="stroke: green; fill: none">
    <animateMotion
      path="M0,0 q60,100 100,0 q60,-20 100,0"
      begin="0s"
      dur="10s"
      repeatCount="indefinite" />
  </rect>
  <text x="50" y="50" style="font-family: Verdana; font-size: 32">
    It's An SVG!
    <animateMotion
      path="M0,0 q60,100 100,0 q60,-20 100,0"
      begin="0s"
      dur="10s"
      repeatCount="indefinite" />
  </text>
</svg>`;

  copyToClipboard(): void {
    navigator.clipboard.writeText(this.svgCode).then(() => {
      alert('SVG code copied to clipboard!');
    });
  }

  performSearch(): void {
    if (this.sanitize) {
      this.resultText = this.sanitizer.bypassSecurityTrustHtml(this.searchText);
    } else {
      this.resultText = this.searchText;
    }
  }
}
