import { Injectable } from '@angular/core';
import { LoginRequestModel } from './models/LoginRequestModel';
import { SingInRequestModel } from './models/SignInRequestModel';
import { Router } from '@angular/router';
import { AuthService } from '../../../../core/services/auth/auth.service';
import { User } from '../../../../core/models/User.model';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { singInFormData } from '../../components/logup/logup.component';
import { Observable, catchError, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccessService {

  constructor(private _router: Router, private _authService: AuthService, private _http: HttpClient){


  }

  doLogin(email: string, password: string):Observable<boolean>{


    return this._http.post("http://localhost:8000/api/login",{email, password}).pipe(
      map((response:any) => {

        const token = response.token;
        this._authService.user = new User(response.data.email,true,response.token)


        return true
      }),
      catchError(error => {
        console.error('Error en la solicitud:', error);
        return of(false);
      }))


  }

  doLogUp(userToSave: singInFormData):Observable<boolean> {

    //No he  logrado desacoplarlo

    const user = SingInRequestModel.fromSignInForm(userToSave)
    console.log(userToSave)
    console.log(user.toDTO())
    return this._http.post("http://localhost:8000/api/register", user.toDTO()).pipe(
      map(response => {
        if(response){
          return true
        }
        return false
      }),
      catchError(error => {
        console.error('Error en la solicitud:', error);
        return of(false);
      })
    );


  

  }
}
