import { Injectable } from '@angular/core';
import { LoginRequestDTO } from './dto/LoginRequestDTO';
import { SignInRequestDTO } from './dto/SignInRequestDTO';
import { Router } from '@angular/router';
import { AuthService } from '../../../../core/services/auth/auth.service';
import { User } from '../../../../core/models/User.model';

@Injectable({
  providedIn: 'root'
})
export class AccessService {

  constructor(private _router: Router, private _authService: AuthService){


  }

  doLogin(email: string, pass: string):boolean{

    if(email==='admin' && pass === 'admin'){
      const token = "admin"
      this._authService.user = new User("admin",true)
      return true
    }
 
    
    if(email==='partner' && pass === 'partner'){
      const token = "partner"
      this._authService.user = new User("partner",false)
      return true
    }

    return false

  }

  doLogUp(userToSave: SignInRequestDTO){
    
    return true

  }
}
