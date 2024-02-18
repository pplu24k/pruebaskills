import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.less'
})
export class HomeComponent implements OnInit {

  authState:string = 'login'

  constructor(private router:Router){}


  ngOnInit(): void {
    if(sessionStorage.getItem("token")){
      this.router.navigate(['/','booking'])
    }
  }

  toogleAuthState = (e:any) => {
    e.preventDefault()
    this.authState = (this.authState==='login')?'logup':'login'
  }


}
