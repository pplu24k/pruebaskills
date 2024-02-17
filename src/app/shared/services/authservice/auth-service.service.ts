import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SignInDTO } from '../../../core/models/dto/SignInDTO.interface';
import { LoginDTO } from '../../../core/models/dto/LoginDTO.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http: HttpClient) { 
  }



  doLogin(userToLogin: LoginDTO):boolean{



    if(userToLogin.email==='admin' && userToLogin.pass === 'admin'){
      const token = "__token__admin"

      
      sessionStorage.setItem("user",userToLogin.email)
      sessionStorage.setItem("token",token)
      return true
    }
 
    if(userToLogin.email==='partner' && userToLogin.pass === 'partner'){
      const token = "__token__partner"

      sessionStorage.setItem("user",userToLogin.email)

      sessionStorage.setItem("token",token)
      return true
    }

    return false

  }

  doLogUp(userToSave: SignInDTO){

    return true

  }

  checkSession():string | null{
    if(sessionStorage.getItem('token') == "__token__admin"){
      return "admin"
    }
    if(sessionStorage.getItem('token') == "__token__partner"){
      return "partner"
    }
    return null
  }
  checkUser():string | null{
    return sessionStorage.getItem("user")
  }
}
