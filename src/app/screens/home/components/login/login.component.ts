import { Component } from '@angular/core';
import { LoginRequestDTO } from '../../services/access/dto/LoginRequestDTO.interface';
import { AuthServiceService } from '../../../../core/services/authservice/auth-service.service';
import { Router } from '@angular/router';
import { AccessService } from '../../services/access/access.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.less'
})
export class LoginComponent {

  userToLogin : LoginRequestDTO = {
    email: '',
    pass: ''
  }

  loginFailed:boolean = false

  constructor(private accessService: AccessService, private router: Router){


  }

  login(event:any){
    
    event.preventDefault()

    if(!this.accessService.doLogin(this.userToLogin)){
      this.loginFailed = true
    }


    
    
  }

}
