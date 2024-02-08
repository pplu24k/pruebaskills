import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.less'
})
export class HomeComponent {

  authState:string = 'login'


  toogleAuthState = (e:any) => {
    e.preventDefault()
    this.authState = (this.authState==='login')?'logup':'login'
  }


}
