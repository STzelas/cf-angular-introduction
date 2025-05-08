import { Component, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { EPerson } from 'src/app/shared/interfaces/eperson';

@Component({
  selector: 'app-eperson-reactive-form',
  imports: [ ReactiveFormsModule, MatSelectModule, MatInputModule, MatFormFieldModule, MatButtonModule],
  templateUrl: './eperson-reactive-form.component.html',
  styleUrl: './eperson-reactive-form.component.css'
})
export class EpersonReactiveFormComponent {
  @Output() person = new EventEmitter<EPerson>()

  /**
   * Οι reactive φόρμες είναι συνήθως σε αυτή την μορφή
   */
  form = new FormGroup({
    givenName: new FormControl('', Validators.required),  // Default value μέσα στην παρένθεση και required στοιχείο
    surname: new FormControl('', Validators.required),
    age: new FormControl(18, [  // Αντί να τα βάζουμε όλα στην html κάνεις ένα group με το Angular Forms και Fields
      Validators.required,
      Validators.pattern('^[0-9]*$'),
      Validators.min(18),
      Validators.max(100)
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email 
    ]),
    education: new FormControl('', Validators.required)
  })

  /**
   * Εδώ δηλώνουμε και τύπο, και validators
   */
  // form = new FormGroup<{
  //   givenName: FormControl<String>,
  //   surname: FormControl<String>,
  //   email: FormControl<string>,
  //   age: FormControl<number>,
  //   education: FormControl<string>
  // }>({
  //   givenName: new FormControl('', {nonNullable:true, validators: Validators.required}),
  //   surname: new FormControl('', {nonNullable:true, validators: Validators.required}),
  //   email: new FormControl('', {nonNullable:true, 
  //     validators: [
  //       Validators.required,
  //       Validators.email
  //     ]}),
  //   age: new FormControl(18, {nonNullable:true, 
  //     validators: [
  //       Validators.required,
  //       Validators.min(18),
  //       Validators.max(100)
  //     ]}),
  //   education: new FormControl('', {nonNullable:true, validators: Validators.required})
  // })

  onSubmit() {
    if(this.form.valid) {
      // console.log(this.form.value)
      const person: EPerson = {
        givenName: this.form.value.givenName ?? "",
        surname: this.form.value.surname ?? "",
        age: String(this.form.value.age) ?? "" ,
        email: this.form.value.email ?? "",
        education: this.form.value.education ?? ""
      }
      this.person.emit(person)
      this.form.reset() 
    }
    // console.log("Data")
    // console.log("givenName>>", this.form.controls['givenName'].value)
    // this.form.controls['surname'].setValue('Papakis')
    // console.log(this.form.value)
  }

  onSetValue() {
    this.form.setValue({
      givenName: "Kostas",
      surname: "Lalakis",
      age: 39,
      email: "Kostas@aueb.gr",
      education: "Master's Degree"
    })
  }
}
