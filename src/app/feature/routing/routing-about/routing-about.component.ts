import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-routing-about',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  templateUrl: './routing-about.component.html',
  styleUrl: './routing-about.component.scss',
})
export class RoutingAboutComponent {}
