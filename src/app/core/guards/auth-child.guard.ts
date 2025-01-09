import { CanActivateFn } from '@angular/router';

let role = 'admin';
export const authChildGuard: CanActivateFn = (route, state) => {
  if (role !== 'admin') {
    alert('Unauthorized Access Brooo');
    return false;
  }
  return true;
};