import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';
import { User } from '../models/User.model';

export const authGuardGuard: CanActivateFn = (route, state) => {

  const router = inject(Router);
  const authService = inject(AuthService)
  console.log(authService.user)
  if(authService.user != null){
    if(authService.user.isAdmin ){
      return true
    }
    if( !authService.user.isAdmin && route.url[0].path === 'managing'){
      router.navigate(['/','booking'])
      return false
    }
    if( !authService.user.isAdmin && route.url[0].path === 'booking'){
      return true
    }
    
  }
  else{
    if(route.url[0]){
      router.navigate([''])
      return false
    }

  }
  return true

};
