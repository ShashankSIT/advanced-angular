import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { RoutingAboutEditComponent } from "../routing-about-edit/routing-about-edit.component";

@Component({
  selector: 'app-routing-about',
  standalone: true,
  imports: [RouterOutlet, RouterModule, RoutingAboutEditComponent],
  templateUrl: './routing-about.component.html',
  styleUrl: './routing-about.component.scss',
})
export class RoutingAboutComponent {}
