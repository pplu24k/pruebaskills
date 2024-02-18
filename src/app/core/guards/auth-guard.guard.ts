import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthServiceService } from '../services/authservice/auth-service.service';
import { User } from '../models/User.class';

export const authGuardGuard: CanActivateFn = (route, state) => {

  const router = inject(Router);
  const authService = inject(AuthServiceService)
  console.log(authService.currentUser)
  if(authService.currentUser != null){
    if(authService.currentUser.isAdmin() ){
      return true
    }
    if( !authService.currentUser.isAdmin() && route.url[0].path === 'managing'){
      router.navigate(['/','booking'])
      return false
    }
    if( !authService.currentUser.isAdmin() && route.url[0].path === 'booking'){
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
