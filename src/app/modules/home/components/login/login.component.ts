import { Component } from '@angular/core';
import { LoginDTO } from '../../../../core/models/dto/LoginDTO.interface';
import { AuthServiceService } from '../../../../shared/services/authservice/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.less'
})
export class LoginComponent {

  userToLogin : LoginDTO = {
    email: '',
    pass: ''
  }

  loginFailed:boolean = false

  constructor(private authService: AuthServiceService, private router: Router){


  }

  login(event:any){
    
    event.preventDefault()

    if(this.authService.doLogin(this.userToLogin)){
      console.log("NAVIGATING")
      this.router.navigate(['/','booking'])

    }else{
      this.loginFailed = true
    }


    
    
  }

}
