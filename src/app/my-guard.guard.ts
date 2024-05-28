import { CanActivateFn } from '@angular/router';

export const myGuardGuard: CanActivateFn = (route, state) => {

  if (sessionStorage.getItem("u") == null) {
    return false;
  }
  else {
    return true;
  }
};
