import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../models/User.class';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private _currentUser: User | null;

  constructor(private http: HttpClient) {
    const email = sessionStorage.getItem("user");
    const token = sessionStorage.getItem("token");

    if (email && token) {
      this._currentUser = new User(email, token);
    } else {
      this._currentUser = null;
    }
  }


  changeUser(user: User){
  this._currentUser = user
  }

  get currentUser(): User | null {
    return this._currentUser;
  }


}
