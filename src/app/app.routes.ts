import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DirectiveExampleComponent } from './feature/directive-example/directive-example.component';
import { RoutingExampleComponent } from './feature/routing/routing-example/routing-example.component';
import { RoutingHomeComponent } from './feature/routing/routing-home/routing-home.component';
import { RoutingAboutComponent } from './feature/routing/routing-about/routing-about.component';
import { RoutingAboutEditComponent } from './feature/routing/routing-about-edit/routing-about-edit.component';
import { RoutingAccessDenidedComponent } from './feature/routing/routing-access-denided/routing-access-denided.component';
import { authGuard } from './shared/guards/auth.guard';
import { authChildGuard } from './shared/guards/auth-child.guard';
import { authDeactivateGuard } from './shared/guards/auth-deactivate.guard';
import { CounterComponent } from './ngrx/counter/counter/counter.component';
import { NgrxComponent } from './ngrx/ngrx/ngrx.component';

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
  {
    path: 'ngrx',
    component: NgrxComponent,
    children: [
      { path: '', redirectTo: 'counter', pathMatch: 'full' },
      {
        path: 'counter',
        component: CounterComponent,
      },
    ],
  },
];
