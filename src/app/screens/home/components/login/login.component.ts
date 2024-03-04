import { Component } from '@angular/core';
import { LoginRequestModel } from '../../services/access/models/LoginRequestModel';
import { Router } from '@angular/router';
import { AccessService } from '../../services/access/access.service';

type loginForm = LoginRequestModel

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.less'
})
export class LoginComponent {

  userToLogin : loginForm = {
    email: '',
    pass: ''
  }

  loginFailed:boolean = false

  constructor(private accessService: AccessService, private _router: Router){


  }

  login(event:any){
    
    event.preventDefault()
    this.accessService.doLogin(this.userToLogin.email, this.userToLogin.pass).subscribe(data => {
      if(!data){
        this.loginFailed = true
      }
      else{
        this._router.navigate(["/","booking"])
      }
    })
  


    
    
  }

}
