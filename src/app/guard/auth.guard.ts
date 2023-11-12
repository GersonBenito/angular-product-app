import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { getParam } from '../helpers/local-storage';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  if(getParam()){
    return true;
  }else{
    router.navigate(['auth']);
    return false;
  }
};
