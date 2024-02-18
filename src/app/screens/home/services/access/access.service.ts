import { Injectable } from '@angular/core';
import { LoginRequestDTO } from './dto/LoginRequestDTO.interface';
import { SignInRequestDTO } from './dto/SignInRequestDTO.interface';
import { Router } from '@angular/router';
import { AuthServiceService } from '../../../../core/services/authservice/auth-service.service';
import { User } from '../../../../core/models/User.class';

@Injectable({
  providedIn: 'root'
})
export class AccessService {

  constructor(private router: Router, private authService: AuthServiceService){


  }

  doLogin(userToLogin: LoginRequestDTO):boolean{

    if(userToLogin.email==='admin' && userToLogin.pass === 'admin'){
      const token = "admin"
      sessionStorage.setItem("user",userToLogin.email)
      sessionStorage.setItem("token",token)
      this.authService.changeUser(new User("admin","admin"))
      this.router.navigate(["/","booking"])
      return true
    }
 
    if(userToLogin.email==='partner' && userToLogin.pass === 'partner'){
      const token = "partner"
      sessionStorage.setItem("user",userToLogin.email)
      sessionStorage.setItem("token",token)
      this.authService.changeUser(new User("partner","partner"))
      this.router.navigate(["/","booking"])
      return true
    }

    return false

  }

  doLogUp(userToSave: SignInRequestDTO){

    return true

  }
}
