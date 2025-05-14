import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { UserService } from '../services/user.service';

export const adminRoleGuard: CanActivateFn = (route, state) => {
  
  const userService = inject(UserService)
  const router = inject(Router)

  const userRoles = userService.user$()?.roles
  const hasPermission = userRoles?.includes('ADMIN')

  if(hasPermission) {
    return true
  }

  return router.navigate(['user-login'])

};
