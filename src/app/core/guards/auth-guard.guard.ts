import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthServiceService } from '../../shared/services/authservice/auth-service.service';

export const authGuardGuard: CanActivateFn = (route, state) => {

  const router = inject(Router);
  const authService = inject(AuthServiceService)
  console.log(authService.checkSession() == null)
  if(authService.checkSession() != null){

    if(authService.checkSession()=== 'admin' ){
      return true
    }
    if( authService.checkSession()=== 'partner' && route.url[0].path === 'managing'){
      router.navigate(['/','booking'])
      return false
    }
    if( authService.checkSession()=== 'partner' && route.url[0].path === 'booking'){
      return true
    }
    
  }
  else{
    router.navigate(['/','home'])
    return false
  }
  return true

};
