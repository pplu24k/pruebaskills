import { Component, OnInit } from '@angular/core';
import { SignInDTO } from '../../../../core/models/dto/SignInDTO.interface';
import { AbstractControl, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from '../../../../shared/services/authservice/auth-service.service';

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

  constructor(private authService: AuthServiceService){}
  userToSingIn: SignInDTO = {
    email: '',
    fullName: '',
    pass1: '',
    pass2: ''
  }

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
    console.log(this.formLogUp)
    this.userToSingIn = this.formLogUp.value

    this.authService.doLogUp(this.userToSingIn)

    

  }



}
