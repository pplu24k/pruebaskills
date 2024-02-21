import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User, UserDTO } from '../../models/User.model';




@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _user: User | null = null; 
  
  constructor() {
    const userJSON = sessionStorage.getItem("user")
    if(userJSON){
      this._user = User.fromDTO(JSON.parse(userJSON) as UserDTO)
    }
  }

  set user(user:User){
    this._user = user;
    sessionStorage.setItem('user',JSON.stringify(user.toDTO()))
  }

  get user(): User | null{
    return this._user;
  }

  clear(){
    this._user = null
    sessionStorage.removeItem('user')
  }


}
