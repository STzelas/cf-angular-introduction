import { Component, Output } from '@angular/core';
import { EpersonReactiveFormComponent } from '../eperson-reactive-form/eperson-reactive-form.component';
import { PersonTableComponent } from '../person-table/person-table.component';
import { SimpleDataTableComponent } from '../simple-data-table/simple-data-table.component';
import { EPerson } from 'src/app/shared/interfaces/eperson';

@Component({
  selector: 'app-reactive-form-example',
  imports: [EpersonReactiveFormComponent, PersonTableComponent, SimpleDataTableComponent],
  templateUrl: './reactive-form-example.component.html',
  styleUrl: './reactive-form-example.component.css'
})
export class ReactiveFormExampleComponent {
  @Output() personInput2: EPerson | undefined
} 
