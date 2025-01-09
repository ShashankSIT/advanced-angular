import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DirectiveExampleComponent } from './feature/directive-example/directive-example.component';
import { RoutingExampleComponent } from './feature/routing/routing-example/routing-example.component';
import { RoutingHomeComponent } from './feature/routing/routing-home/routing-home.component';
import { RoutingAboutComponent } from './feature/routing/routing-about/routing-about.component';
import { RoutingAboutEditComponent } from './feature/routing/routing-about-edit/routing-about-edit.component';
import { RoutingAccessDenidedComponent } from './feature/routing/routing-access-denided/routing-access-denided.component';
import { authGuard } from './core/guards/auth.guard';
import { authChildGuard } from './core/guards/auth-child.guard';
import { authDeactivateGuard } from './core/guards/auth-deactivate.guard';

export const routes: Routes = [
  {
    path: 'directive',
    component: DirectiveExampleComponent,
  },
  {
    path: 'routing',
    component: RoutingExampleComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        component: RoutingHomeComponent,
        canDeactivate: [authDeactivateGuard],
      },
      { path: 'unauthorized', component: RoutingAccessDenidedComponent },
      {
        path: 'about',
        component: RoutingAboutComponent,
        canActivateChild: [authChildGuard],
        children: [{ path: 'edit', component: RoutingAboutEditComponent }],
      },
      {
        path: 'contact',
        canActivate: [authGuard],
        loadComponent: () =>
          import(
            './feature/routing/routing-contact/routing-contact.component'
          ).then((m) => m.RoutingContactComponent),
      },
    ],
  },
];
