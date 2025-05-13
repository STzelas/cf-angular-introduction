import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { EPerson } from 'src/app/shared/interfaces/eperson';


@Component({
  selector: 'app-user-registration',
  imports: [ 
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule],
  templateUrl: './user-registration.component.html',
  styleUrl: './user-registration.component.css'
})
export class UserRegistrationComponent {
  form = new FormGroup({
    username: new FormControl("", Validators.required),
    name: new FormControl('', Validators.required),
    surname: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    address: new FormGroup({
      area: new FormControl(""),
      road: new FormControl("")
    }),
    password: new FormControl("", [Validators.required, Validators.minLength(5)]),
    confirmPassword: new FormControl('', [Validators.required, Validators.minLength(5)])
  },

  this.passwordConfirmValidator,
)

  passwordConfirmValidator(control: AbstractControl): {[key: string] : boolean} | null {  // AbstractControl είναι ο wrapper των FromGroup - Control κλπ
    const form = control as FormGroup
    const password = form.get('password')?.value
    const confirmPassword = form.get('confirmPassowrd')?.value

    if (password && confirmPassword && password !== confirmPassword) {
      form.get('confirmPassword')?.setErrors({passwordMismatch: true})
      return {passwordMismatch: true}
    }
    return null
  }

  onSubmit() {
    const data = this.form.value
    console.log(data)
  }
}
