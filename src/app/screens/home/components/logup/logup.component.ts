import { Component, OnInit } from '@angular/core';

import { AbstractControl, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { AccessService } from '../../services/access/access.service';

export interface singInFormData  {
  email: string,
  fullName: string
  password: string
  password1: string
  password2: string
}

@Component({
  selector: 'app-logup',
  templateUrl: './logup.component.html',
  styleUrl: './logup.component.less'
})
export class LogupComponent implements OnInit{

  passwordMatchValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const password1 = control.get('password1')?.value;
    const password2 = control.get('password2')?.value;
  
    return password1 === password2 ? null : { 'passwordMismatch': true };
}

  formLogUp: UntypedFormGroup = new UntypedFormGroup({});
  logupError: boolean = false
  logupDone: boolean = false
  constructor(private accessService: AccessService){}


  ngOnInit(): void {
    this.formLogUp = new UntypedFormGroup(
      {
        email: new UntypedFormControl('', [
          Validators.required,
          Validators.email
        ]),
        fullName: new UntypedFormControl('',
        [
          Validators.required,
          Validators.minLength(1),

        ]),
        password1: new UntypedFormControl('',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(12)
          ]),
          password2: new UntypedFormControl('',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(12)
          ])
      }, {validators: this.passwordMatchValidator}
    )
  }

  logup(event:any){
    event.preventDefault()

    this.accessService.doLogUp(this.formLogUp.value as singInFormData).subscribe(data => {
      console.log("resultado en el front: " + data)
      if(data){
        this.logupDone = true
        this.logupError = false
      }
      else{
        this.logupError = true
        this.logupDone = false
      }

    })

  }



}
