import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

let userRole = 'admina';
export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  if (userRole !== 'admin') {
    router.navigate(['routing/unauthorized']);
  }
  return true;
};
