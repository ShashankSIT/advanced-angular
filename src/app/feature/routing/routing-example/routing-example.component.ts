import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-routing-example',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  templateUrl: './routing-example.component.html',
  styleUrl: './routing-example.component.scss',
})
export class RoutingExampleComponent {}
