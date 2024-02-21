import { Component } from '@angular/core';
import { LoginRequestDTO } from '../../services/access/dto/LoginRequestDTO';
import { Router } from '@angular/router';
import { AccessService } from '../../services/access/access.service';

type loginForm = LoginRequestDTO

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

    if(!this.accessService.doLogin(this.userToLogin.email, this.userToLogin.pass)){
      this.loginFailed = true
    }
    else{
      this._router.navigate(["/","booking"])
    }


    
    
  }

}
