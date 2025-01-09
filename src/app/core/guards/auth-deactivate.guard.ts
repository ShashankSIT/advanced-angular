import { CanActivateFn } from '@angular/router';

export const authDeactivateGuard: CanActivateFn = (route, state) => {
  let response = confirm('Leaving already? fine. 😒');
  if (response == true) {
    return true;
  }
  return false;
};
